import React, { useState,useRef  } from 'react';
import Graph from './components/Graph';
import NodeModal from './components/NodeModal';
import EdgeModal from './components/EdgeModal';
import data from './components/data/mockData.json';
import SearchBar from './components/SearchBar';

export default function App() {
  const [highlightedNode, setHighlightedNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleSearch = (query) => {
    const found = data.nodes.find(
      n => n.label.toLowerCase().includes(query.toLowerCase())
    );
    if (found) {
      setHighlightedNode(found);
      setSelectedNode(found);
    } else {
      alert('No match found for: ' + query);
    }
  };
  const graphRef = useRef();

  const handleClear = () => {
    if (highlightedNode) {
      highlightedNode.fx = null;
      highlightedNode.fy = null;
  
      // Small random nudge
      highlightedNode.x += Math.random() * 40 - 20;
      highlightedNode.y += Math.random() * 40 - 20;
  
      // Optional: add velocity to push it off faster
      highlightedNode.vx = Math.random() * 2 - 1;
      highlightedNode.vy = Math.random() * 2 - 1;
    }
  
    setHighlightedNode(null);
    setSelectedNode(null);
  
    if (graphRef.current) {
      graphRef.current.zoomToFit(1000);
    }
  };
  
  

  return (
    <div>
      <SearchBar onSearch={handleSearch} onClear={handleClear} />
 
      <Graph
        ref={graphRef}
        data={data}
        highlightedNode={highlightedNode}
        onNodeClick={setSelectedNode}
        onLinkClick={setSelectedLink}
        onLinkHover={setHoveredLink}
      />

      <NodeModal node={selectedNode} onClose={() => setSelectedNode(null)} />
      <EdgeModal link={selectedLink} onClose={() => setSelectedLink(null)} />
    </div>
  );
}