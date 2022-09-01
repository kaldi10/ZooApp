import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Container fluid style={{ width: "360px", marginTop: 50 }}>
        <Row
          className="justify-content-md-center"
          fluid
          style={{ width: "360px", marginTop: 50 }}
        >
          {" "}
          <h1>Welcome to the Zoo</h1>
          <Image
            bsPrefix="img"
            roundedCircle={true}
            height={300}
            width={300}
            src="https://m.media-amazon.com/images/M/MV5BZDAzN2FhMTgtMzg5YS00ZDFkLWFiMTUtZTVmMzk4ZjEyMmJmXkEyXkFqcGdeQXVyNjkzMjkzMTY@._V1_.jpg"
          />
        </Row>
        <br></br>
        <br></br>

        <Col className="justify-content-md-center">
          <Button
            style={{ width: "360px", color: "white", fontWeight: 700, fontSize: 24 }}
            onClick={() => navigate(`/animals`)}
            variant="info"
          >
            Review all animals
          </Button>{" "}
        </Col>
      </Container>
    </>
  );
}
