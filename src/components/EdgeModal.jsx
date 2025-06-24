import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function EdgeModal({ link, onClose }) {
  if (!link) return null;

  return (
    <Modal show={!!link} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Connection Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Source:</strong> {link.source.label}</p>
        <p><strong>Target:</strong> {link.target.label}</p>
        <p><strong>Type:</strong> {link.label}</p>
      </Modal.Body>
    </Modal>
  );
}
