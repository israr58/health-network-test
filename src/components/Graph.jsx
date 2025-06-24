import React, {
    useRef,
    useEffect,
    forwardRef,
    useImperativeHandle
  } from 'react';
  import ForceGraph2D from 'react-force-graph-2d';
  
  const Graph = forwardRef(
    ({ data, onNodeClick, onLinkClick, onLinkHover, highlightedNode }, ref) => {
      const fgRef = useRef();
      const previousNodeRef = useRef();
  
      useImperativeHandle(ref, () => ({
        zoomToFit: (duration = 1000) => {
          if (fgRef.current) fgRef.current.zoomToFit(duration);
        },
        centerAt: (x, y, duration = 1000) => {
          if (fgRef.current) fgRef.current.centerAt(x, y, duration);
        },
        zoom: (scale, duration = 1000) => {
          if (fgRef.current) fgRef.current.zoom(scale, duration);
        }
      }));
  
      useEffect(() => {
        if (highlightedNode && fgRef.current) {
          const fg = fgRef.current;
      
          const prev = previousNodeRef.current;
          if (prev && prev !== highlightedNode) {
            prev.fx = null;
            prev.fy = null;
          }
      
          highlightedNode.fx = 0;
          highlightedNode.fy = 0;
      
          fg.centerAt(0, 0, 1000);
          fg.zoom(3, 1000);
      
          // ✅ Reheat simulation to make forces push nodes apart again
          fg.d3ReheatSimulation();
      
          previousNodeRef.current = highlightedNode;
        }
      }, [highlightedNode]);
      
      
  
      useEffect(() => {
        const fg = fgRef.current;
        if (fg) {
          fg.d3Force('charge').strength(-200);
          fg.d3Force('link').distance(150).strength(0.1);
        }
      }, []);
  
      return (
        <ForceGraph2D
          ref={fgRef}
          graphData={data}
          nodeLabel={() => ''}
          linkLabel={link => link.label}
          nodeCanvasObject={(node, ctx) => {
            const size = 20;
            const img = new Image();
            img.src = node.photo || 'https://via.placeholder.com/40';
  
            ctx.save();
            ctx.beginPath();
            ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
            ctx.clip();
            ctx.drawImage(img, node.x - size, node.y - size, size * 2, size * 2);
            ctx.restore();
  
            ctx.beginPath();
            ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
            ctx.strokeStyle =
              node.id === highlightedNode?.id ? 'red' : '#007bff';
            ctx.lineWidth = 3;
            ctx.stroke();
          }}
          onNodeClick={onNodeClick}
          onLinkClick={onLinkClick}
          onLinkHover={onLinkHover}
        />
      );
    }
  );
  
  export default Graph;
  