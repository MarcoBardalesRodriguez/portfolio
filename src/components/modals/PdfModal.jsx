import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const PdfModal = ({ show, handleClose, pdfUrl }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>PDF Viewer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <embed src={pdfUrl} type="application/pdf" width="100%" height="500px" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};