import { useState } from "react";
import { Accordion, Container, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AccordionItemComp from "../AccordionItem/AccordionItemComp";
import { Link } from "react-router-dom";

// List Component
function ListItem({ to, text, onClick }: { to: string; text: string; onClick: () => void }) {
  return (
    <li className="border-bottom pb-2">
      <Link to={to} className="text-decoration-none text-dark" onClick={onClick}>
        {text}
      </Link>
    </li>
  );
}

export default function OffcanvasComp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Button variant="" onClick={handleShow}>
            <FaBars />
          </Button>
          <Navbar.Brand as={Link} to={'/'}>Link Utility</Navbar.Brand>
        </Container>
      </Navbar>
      {/* Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-3">
            <Link to={"/"} onClick={handleClose} className="text-decoration-none text-dark">
              Link Utility
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column h-100 justify-content-between">
          {/* Header section */}
          <header className="border-bottom pb-3">
            Link Utility is a web app for developers that offers curated links
            with descriptions for essential React libraries, streamlining the
            development process and saving time by making it easy to find the
            right tools.
          </header>
          {/* Main Content */}
          <main className="flex-grow-1 py-4">
            <Accordion>
              <AccordionItemComp
                eventKey="0"
                title="Styles"
                content={
                  <ol className="d-flex flex-column gap-3">
                    <ListItem to={'/icons'} text="Icons" onClick={handleClose}/>
                    <ListItem to={'/animation'} text="Animation" onClick={handleClose}/>
                  </ol>
                }
              />
              <AccordionItemComp
                eventKey="1"
                title="React Validation"
                content={
                  <ol className="d-flex flex-column gap-3">
                    <ListItem to={'/validation'} text="Validation" onClick={handleClose}/>
                  </ol>
                }
              />
              <AccordionItemComp
                eventKey="2"
                title="Package #3"
                content={`Google`}
              />
            </Accordion>
          </main>
          {/* Footer Section */}
          <footer className="mt-3 pt-3 border-top ">
            <p className="mb-1">
              Created by <span className="fw-bold">Abanoub Abd Elmessih</span>
            </p>
            <ul className="list-unstyled m-0 pt-2 d-flex justify-content-start gap-2 align-items-center">
              <li className="">
                <a
                  href="https://github.com/Abanoub-Abd-Elmessih"
                  target="_blank"
                >
                  <FaGithub className={'text-dark fs-5'} />
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.linkedin.com/in/abanoub-abd-elmessih/"
                  target="_blank"
                >
                  <FaLinkedin className={'text-dark fs-5'} />
                </a>
              </li>
              <li className="">
                <a
                  href="mailto:Abanoubabdelmessih110@gmail.com"
                  target="_blank"
                >
                  <SiGmail className={'text-dark fs-5'} />
                </a>
              </li>
              <li className="">
                <a href="tel:+20 155 956 6765" target="_blank">
                  <FaPhoneAlt className={'text-dark fs-6'} />
                </a>
              </li>
            </ul>
          </footer>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
