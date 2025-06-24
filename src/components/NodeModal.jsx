import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function NodeModal({ node, onClose }) {
  if (!node) return null;

  return (
    <Modal show={!!node} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{node.label}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Education:</strong> {node.education}</p>
        <p><strong>Work:</strong> {node.work}</p>
        <p><strong>Publications:</strong></p>
        <ul>
          {node.publications?.map(pub => (
            <li key={pub}>{pub}</li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
}
