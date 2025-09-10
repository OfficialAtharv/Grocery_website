
import { useState } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import ProductCard from "./components/ProductCard";
import { categories } from "./data/Products";
import Cart from "./Cart";
import CategoryNavbar from "./CategoryNavbar";  
import "./app.css"

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <Container fluid>
      <h1 className="text-center mt-4">🛒 Grocery Lane</h1>

      
      <CategoryNavbar categories={categories} />

   
      <Form className="d-flex justify-content-center mb-4 mt-3">
        <Form.Control
          type="text"
          placeholder="Search for items..."
          style={{ width: "50%", padding: "10px", fontSize: "16px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </Form>

      {categories.map((cat, i) => {
        const filteredItems = cat.items.filter((p) =>
          p.name.toLowerCase().includes(search)
        );
        if (filteredItems.length === 0) return null;

        return (
          <Card className="mb-4 shadow-sm p-3" key={i} id={cat.name.toLowerCase()}>
            <h3 className="mt-2">{cat.name}</h3>
            <Row>
              {filteredItems.map((p, j) => (
                <Col key={j} md={3} sm={6} xs={12}>
                  <ProductCard {...p} onAddToCart={addToCart} />
                </Col>
              ))}
            </Row>
          </Card>
        );
      })}

      <Cart cart={cart} />
    </Container>
  );
}

export default App;
