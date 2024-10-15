import styles from "./OffcanvasComp.module.css";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AccordionItemComp from "../AccordionItem/AccordionItemComp";
import { Link } from "react-router-dom";

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
          <Offcanvas.Title className="fs-3"><Link to={'/'} className="text-decoration-none text-dark">Link Utility</Link></Offcanvas.Title>
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
                content={
                  <ol className="d-flex flex-column gap-2">
                    <li className="border-bottom">
                      <Link to={"/icons"} className="text-decoration-none text-dark">Icons</Link>
                    </li>
                    <li className="border-bottom">
                      <Link to={"/animation"} className="text-decoration-none text-dark">Animation</Link>
                    </li>
                  </ol>
                }
                title="Styles"
              />
              <AccordionItemComp
                eventKey="1"
                content={`Lorem`}
                title="Package #2"
              />
              <AccordionItemComp
                eventKey="2"
                title="Package #3"
                content={`Google`}
              />
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
