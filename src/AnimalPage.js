import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import allAnimals from "./Database";

export default function AnimalPage() {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState();

  const search = useLocation().search;

  useEffect(() => {
    let current = new URLSearchParams(search).get("name");
    let selected = allAnimals.filter((a) => current === a.name);
    setAnimal(selected[0]);
  }, []);

  return (
    <>
      <Container fluid style={{ width: "360px", marginTop: 50 }}>
        <h1 style={{ color: "#ff8080", fontWeight: "600" }}>
          Animal Page {animal && animal.name}
        </h1>
        <br></br>
        {animal && (
          <Card
            fluid
            style={{
              width: "360px",
              padding: 10,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
            }}
          >
            <Card.Title style={{ color: "blueviolet", fontWeight: "800" }}>
              Category:{" "}
              <span style={{ fontWeight: "500" }}>{animal.category}</span>
            </Card.Title>
            <Card.Title style={{ color: "blue", fontWeight: "800" }}>
              Animal: <span style={{ fontWeight: "500" }}>{animal.name}</span>
            </Card.Title>
            <Card.Title style={{ color: "magenta", fontWeight: "800" }}>
              Legs Number:{" "}
              <span style={{ fontWeight: "500" }}>{animal.legNumbers}</span>
            </Card.Title>
            <Card.Title style={{ color: "lightseagreen", fontWeight: "800" }}>
              Is In Israel:{" "}
              <span style={{ fontWeight: "500" }}>
                {animal.isInIsrael ? "yes" : "no"}
              </span>
            </Card.Title>
            <Card.Img
              style={{ paddingLeft: 80, paddingRight: 80 }}
              height={100}
              width={100}
              variant="top"
              src={animal.picture}
            />
            <Card.Body style={{ margin: 10, justifyContent: "center" }}>
              <Row className="justify-content-md-center">
                <Button
                  onClick={() => navigate(`/edit_animal?name=${animal.name}`)}
                  style={{ width: 150, margin: 10 }}
                  variant="danger"
                >
                  Edit
                </Button>
              </Row>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}
