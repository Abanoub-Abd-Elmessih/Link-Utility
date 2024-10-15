import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

interface CardItemProp {
  className?: string;
  header: string;
  text: string;
  go: string | React.ReactNode;
}

const CardComp: React.FC<CardItemProp> = ({ header, text, go , className}) => {
  return (
    <Card className={className}>
      <Card.Header as="h5">{header}</Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">{go}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
