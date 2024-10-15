import { Container } from "react-bootstrap";
import CardComp from "../../Components/CardComp/CardComp";

export default function Icons() {
  return (
    <div>
      <Container>
        <p className="h3 text-center py-5">Icons</p>
        <ul className="list-unstyled">
          <li>
            <CardComp
              header="React Icons"
              text="React Icons is a library that enables developers to seamlessly integrate a diverse range of icons into their React applications. It supports numerous icon packs, including Font Awesome, Material Design Icons, and many others, allowing for a unified approach to styling and using icons across different projects."
              go={
                <a
                  href="https://react-icons.github.io/react-icons/"
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  Visit Now
                </a>
              }
            />
          </li>
        </ul>
      </Container>
    </div>
  );
}
