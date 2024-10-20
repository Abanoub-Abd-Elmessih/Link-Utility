import React from 'react'
import { linkData } from '../../data/linkData';
import CardComp from '../../Components/CardComp/CardComp';
import { Container } from 'react-bootstrap';

export default function Validation() {
    const ValidationCard = linkData.filter((item) => item.category === "Validation");

  return (
    <Container>
    <p className="h3 text-center py-5">Validation</p>
    <ul className="list-unstyled">
      {ValidationCard.map((card, index) => (
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
  )
}
