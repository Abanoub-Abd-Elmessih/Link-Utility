import { Container } from "react-bootstrap";
import CardComp from "../../Components/CardComp/CardComp";
import { linkData } from "../../data/linkData"; // Import the centralized data

export default function Icons() {
  const iconCards = linkData.filter((item) => item.category === "Icons");

  return (
    <Container>
      <p className="h3 text-center py-5">Icons</p>
      <ul className="list-unstyled">
        {iconCards.map((card, index) => (
          <li key={index} className="mb-3">
            <CardComp
              header={card.header}
              text={card.text}
              go={
                <a
                  href={card.url}
                  target="_blank"
                >
                  Visit Now
                </a>
              }
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
