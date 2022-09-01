import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{
                color: "#ffffff",
              }}  href="/">Zoo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{
                color: "#ffffff",
              }}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{
                color: "#ffffff",
              }}
              href="/animals"
            >
              Animals
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
