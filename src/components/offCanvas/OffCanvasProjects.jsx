import { useState } from 'react';
import { Button, Offcanvas} from 'react-bootstrap';

export function OffCanvasProjects({ title, description, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="me-2">
        Detalles
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <p dangerouslySetInnerHTML={description}></p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}