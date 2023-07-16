import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Remarkable } from 'remarkable';

const md = new Remarkable();

function renderMarkdownToHTML(markdown) {
  const renderedHTML = md.render(markdown);
  return {__html: renderedHTML};
}

export const MdModal = ({ show, handleClose, title, markdown }) => {
  const markup = renderMarkdownToHTML(markdown);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{maxHeight: "500px", overflowY: "scroll"}}>
        <div dangerouslySetInnerHTML={markup} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};