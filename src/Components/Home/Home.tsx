import { useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { linkData } from "../../data/linkData";
import CardComp from "../../Components/CardComp/CardComp";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLinks = linkData.filter(
    (item) =>
      item.header.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-5">
      <h1 className="text-center">Link Utility</h1>

      {/* Search Input */}
      <InputGroup className="mb-3 mt-4">
        <Form.Control
          placeholder="Search across all libraries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      {/* Display Results */}
      <ul className="list-unstyled">
        {searchTerm && filteredLinks.length > 0 ? (
          filteredLinks.map((link, index) => (
            <li key={index} className="mb-3">
              <CardComp
                header={link.header}
                text={link.text}
                go={
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    Visit Now
                  </a>
                }
              />
            </li>
          ))
        ) : searchTerm && filteredLinks.length === 0 ? (
          <p>No results found</p>
        ) : null }
      </ul>
    </Container>
  );
}
