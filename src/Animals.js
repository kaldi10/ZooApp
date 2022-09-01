import React, { useEffect, useState } from "react";
import allAnimals from "./Database";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import AnimalPage from "./AnimalPage";
import { Container, Row } from "react-bootstrap";

export default function Animals() {
  const navigate = useNavigate();
  const [animals, setAnimals] = useState("");
  const [filterdAnimal, setFilterdAnimal] = useState("");

  const handleFilter = (name) => {
    let filterdAnimal = animals.filter((a) => name === a.category);
    setFilterdAnimal(filterdAnimal);
  };

  useEffect(() => {
    setAnimals(allAnimals);
    setFilterdAnimal(allAnimals);
    console.log(allAnimals);
  }, []);

  const handleDelete = (name) => {
    let filter = filterdAnimal.filter((a) => a.name !== name);
    setFilterdAnimal(filter);
  };

  return (
    <Container fluid style={{ marginTop: 50 }}>
      <h1>All Animals Page</h1>
      <Button
        onClick={() => {
          setFilterdAnimal(allAnimals);
        }}
        style={{ margin: 10 }}
        variant="info"
      >
        All
      </Button>
      <Button
        onClick={() => {
          handleFilter("sea");
        }}
        style={{ margin: 10 }}
        variant="primary"
      >
        Sea Animals
      </Button>
      <Button
        onClick={() => {
          handleFilter("land");
        }}
        style={{ margin: 10 }}
        variant="secondary"
      >
        Land Animals
      </Button>
      <Button
        onClick={() => {
          handleFilter("air");
        }}
        style={{ margin: 10 }}
        variant="success"
      >
        Air Animals
      </Button>
      <Row className="justify-content-md-center">
        {filterdAnimal &&
          filterdAnimal.map((animal) => (
            <Card key={animal.id} style={{ width: "300px", margin: 20 }}>
              <Card.Title>Category {animal.category}</Card.Title>
              <Card.Title>Animal: {animal.name}</Card.Title>
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
                    onClick={() => {
                      handleDelete(animal.name);
                    }}
                    style={{ width: 100, margin: 10 }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => navigate(`/animal_page?name=${animal.name}`)}
                    style={{ width: 100, margin: 10 }}
                    variant="warning"
                  >
                    View
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          ))}
      </Row>
    </Container>
  );
}
