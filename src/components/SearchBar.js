import { Form, Container, Row, Col } from "react-bootstrap";

function SearchBar() {
  return (
    <Container className="mb-4">
      <Row className="align-items-center">
        <Col md={10}>
          <Form.Control type="text" placeholder="Search for items..." />
        </Col>
        <Col md={2}>
          <Form.Check label="Only show products in stock" />
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
