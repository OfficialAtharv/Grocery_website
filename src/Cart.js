
import { Offcanvas, ListGroup, Button } from "react-bootstrap";
import { useState } from "react";

function Cart({ cart }) {
  const [show, setShow] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Button
        variant="primary"
        style={{ position: "fixed", bottom: 20, right: 20, borderRadius: "50%", padding: "15px 20px" }}
        onClick={() => setShow(true)}
      >
        🛒 {cart.length}
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {cart.map((item, i) => (
              <ListGroup.Item key={i}>
                {item.name} - ₹{item.price}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h5 className="mt-3">Total: ₹{total}</h5>
          <Button variant="success" className="mt-2 w-100">
            Proceed to Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
