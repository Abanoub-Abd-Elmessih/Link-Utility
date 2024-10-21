import { linkData } from '../../data/linkData';
import { Container } from 'react-bootstrap';
import CardComp from '../../Components/CardComp/CardComp';

export default function Notification() {
    const NotificationCard = linkData.filter((item) => item.category === "Notification");

    return (
        <Container>
        <p className="h3 text-center py-5">Notification</p>
        <ul className="list-unstyled">
          {NotificationCard.map((card, index) => (
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
