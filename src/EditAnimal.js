import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Col, Row, Form, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import allAnimals from "./Database";

export default function EditAnimal() {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState();
  const [formValues, setFormValues] = useState({
    category: "",
    name: "",
    legNumbers: "",
    isInIsrael: "",
    picture: "",
  });

  const search = useLocation().search;

  useEffect(() => {
    let current = new URLSearchParams(search).get("name");
    let selected = allAnimals.filter((a) => current === a.name);
    setAnimal(selected[0]);
    formValues.category = selected[0].category
    formValues.name = selected[0].name;
    formValues.legNumbers = selected[0].legNumbers;
    formValues.isInIsrael = selected[0].isInIsrael;
    formValues.picture = selected[0].picture;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)
    setAnimal(formValues)
    // update datebase
  };
  const handleChange = (e) => {
    console.log("e.target.value: ", e.target);
  };
  return (
    <>
      {animal && (
        <Container fluid style={{ width: "80%", marginTop: 50 }}>
          <h1 style={{ color: "#ff8080", fontWeight: "600" }}>
            Edit Animal Page {animal && animal.name}
          </h1>
          <Row
            className="justify-content-md-center"
            style={{ width: "800px", marginTop: 50 }}
          >
            <Col
              style={{
                width: "360px",
                padding: 10,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  onChange={(e) => {
                    setFormValues({ ...formValues, category: e.target.value });
                  }}
                >
                  <Form.Label>Category</Form.Label>
                  <Form.Select defaultValue={formValues.category}>
                    <option>Land</option>
                    <option>Air</option>
                    <option>Sea</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Animal name</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={formValues.name}
                    onChange={(e) => {
                      setFormValues({ ...formValues, name: e.target.value });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Legs Number</Form.Label>
                  <Form.Control
                    type="number"
                    defaultValue={formValues.legNumbers}
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        legNumbers: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      isInIsrael: e.target.value == "No" ? false : true,
                    });
                  }}
                >
                  <Form.Label>IsInIsrael</Form.Label>
                  <Form.Select defaultValue={formValues.isInIsrael}>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group>
                <Card.Img
                  style={{ paddingLeft: 80, paddingRight: 80 }}
                  height={100}
                  width={100}
                  variant="top"
                  src={formValues.picture}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Picture Url</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={formValues.picture}
                    onChange={(e) => {
                      setFormValues({ ...formValues, picture: e.target.value });
                    }}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <br></br>
                <br></br>
              </Form>
            </Col>
            <br></br>
            <br></br>
            <br></br>

            <Col className="justify-content-md-center">
              <Card
                style={{
                  width: "360px",
                  padding: 10,
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <Card.Title style={{ color: "blueviolet", fontWeight: "800" }}>
                  Category:{" "}
                  <span style={{ fontWeight: "500" }}>{animal.category}</span>
                </Card.Title>
                <Card.Title style={{ color: "blue", fontWeight: "800" }}>
                  Animal:{" "}
                  <span style={{ fontWeight: "500" }}>{animal.name}</span>
                </Card.Title>
                <Card.Title style={{ color: "magenta", fontWeight: "800" }}>
                  Legs Number:{" "}
                  <span style={{ fontWeight: "500" }}>{animal.legNumbers}</span>
                </Card.Title>
                <Card.Title
                  style={{ color: "lightseagreen", fontWeight: "800" }}
                >
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
                <br></br>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
