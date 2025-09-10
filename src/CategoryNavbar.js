
import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function CategoryNavbar({ categories }) {
  const [activeCategory, setActiveCategory] = useState(categories[0].name.toLowerCase());

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    }, options);

    categories.forEach((cat) => {
      const section = document.getElementById(cat.name.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Nav className="mx-auto">
          {categories.map((cat, i) => {
            const catId = cat.name.toLowerCase();
            return (
              <Nav.Link
                key={i}
                href={`#${catId}`}
                style={{
                  fontSize: "16px",
                  margin: "0 10px",
                  fontWeight: activeCategory === catId ? "bold" : "normal",
                  color: activeCategory === catId ? "green" : "black",
                  borderBottom: activeCategory === catId ? "2px solid green" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                {cat.name}
              </Nav.Link>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CategoryNavbar;
