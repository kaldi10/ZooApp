import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>Zoo &copy; since 2000</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
