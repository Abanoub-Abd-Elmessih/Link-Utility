import styles from "./OffcanvasComp.module.css";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AccordionItem from "../AccordionItem/AccordionItem";

export default function OffcanvasComp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="position-fixed top-50 start-0 translate-middle-y">
      <Button variant="" onClick={handleShow}>
        <FaBars />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-3">Link Utility</Offcanvas.Title>
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
              <Accordion.Item eventKey="0">
                <Accordion.Header>Package #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Package #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <AccordionItem eventKey="2" title="Package #3" content={`Google`}/>
            </Accordion>
          </main>
          {/* Footer Section */}
          <footer className="mt-3 pt-3 border-top text-center">
            <p className="mb-1">
              Created by <span className="fw-bold">Abanoub Abd Elmessih</span>
            </p>
            <ul className="list-unstyled m-0 pb-1 d-flex justify-content-center align-items-center">
              <li className={styles.brandsIcon}>
                <a
                  href="https://github.com/Abanoub-Abd-Elmessih"
                  target="_blank"
                >
                  <FaGithub className={styles.footerIcons} />
                </a>
              </li>
              <li className={styles.brandsIcon}>
                <a
                  href="https://www.linkedin.com/in/abanoub-abd-elmessih/"
                  target="_blank"
                >
                  <FaLinkedin className={styles.footerIcons} />
                </a>
              </li>
              <li className={styles.brandsIcon}>
                <a
                  href="mailto:Abanoubabdelmessih110@gmail.com"
                  target="_blank"
                >
                  <SiGmail className={styles.footerIcons} />
                </a>
              </li>
              <li className={styles.brandsIcon}>
                <a href="tel:+20 155 956 6765" target="_blank">
                  <FaPhoneAlt className={styles.footerIcons} />
                </a>
              </li>
            </ul>
          </footer>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
