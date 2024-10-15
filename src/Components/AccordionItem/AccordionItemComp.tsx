// AccordionItem.js
import { Accordion } from "react-bootstrap";

interface AccordionItemProps {
    eventKey: string;
    title: string;
    content: string | React.ReactNode;
  }
  
const AccordionItemComp:React.FC<AccordionItemProps> = ({ eventKey, title, content }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>{content}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItemComp;
