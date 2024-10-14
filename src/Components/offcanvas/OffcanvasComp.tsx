import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa";

export default function OffcanvasComp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="position-fixed top-50 start-0">
      <Button variant="" onClick={handleShow}>
      <FaBars />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-3">Link Utility</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <span className="fs-5 fw-medium">Link Utility</span> is a web app for developers that offers curated links and
          descriptions for essential React libraries, streamlining the
          development process and saving time by making it easy to find the
          right tools.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
