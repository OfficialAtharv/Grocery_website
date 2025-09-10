
import { Card, Button } from "react-bootstrap";
import { useState } from "react";

function ProductCard({ name, price, image, inStock, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      className="mb-4 shadow-sm"
      style={{
        borderRadius: "12px",
        cursor: inStock ? "pointer" : "not-allowed",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        transition: "all 0.3s ease",
        opacity: inStock ? 1 : 0.6,
        width: "100%",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{
          height: "150px",
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />
      <Card.Body className="text-center">
        <Card.Title style={{ fontSize: "16px", fontWeight: "600" }}>
          {name}
        </Card.Title>
        <Card.Text style={{ fontSize: "15px", fontWeight: "bold", color: "green" }}>
          ₹{price}
        </Card.Text>
        {!inStock && <p style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}>Out of Stock</p>}

        {inStock && hovered && (
          <Button
            size="sm"
            variant="success"
            onClick={() => onAddToCart({ name, price, image })}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
