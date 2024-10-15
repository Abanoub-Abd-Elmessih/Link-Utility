import { Container } from "react-bootstrap";
import CardComp from "../../Components/CardComp/CardComp";
import { linkData } from "../../data/linkData";

export default function Animation() {
  const animationCards = linkData.filter((item) => item.category === "Animation");
  return (
    <div>
      <Container>
        <p className="h3 text-center py-5">Animation</p>
        <ul className="list-unstyled">
          {animationCards.map((card, index) => (
            <li key={index} className="mb-3">
              <CardComp
                header={card.header}
                text={card.text}
                go={
                  <a href={card.url} target="_blank">
                    Visit Now
                  </a>
                }
              />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
