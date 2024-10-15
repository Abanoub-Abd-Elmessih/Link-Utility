import { Container } from "react-bootstrap";
import CardComp from "../../Components/CardComp/CardComp";

export default function Animation() {
  return (
    <div>
      <Container>
        <p className="h3 text-center py-5">Animation</p>
        <ul className="list-unstyled">
          <li>
            <CardComp
              header="Animista"
              text="Animation Library: Animista offers an extensive collection of animations that can be previewed in real-time. Users can choose from different categories, making it easy to find the perfect effect for their project."
              go={
                <a
                  href="https://animista.net/"
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
