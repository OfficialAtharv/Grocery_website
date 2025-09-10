import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { categories } from "../data/Products";

function ProductList() {
  return (
    <Container>
      {categories.map((category, idx) => (
        <div key={idx} className="mb-5">
          <h3 className="mt-4">{category.name}</h3>
          <Row>
            {category.items.map((p, i) => (
              <Col key={i} md={3}>
                <ProductCard {...p} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default ProductList;
