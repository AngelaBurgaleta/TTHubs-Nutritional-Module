import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Collapse,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export function FoodTable(props) {
  //manejador para filtrar por nombre del alimento

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  /*
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Nutritional Module</CardTitle>
              </CardHeader>
              <CardBody>
              
                <form>
                <InputGroup className="no-border">
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search by name..."
                    onChange={handleSearch}
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="nc-icon nc-zoom-split" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                </form>
              
                <Table striped>
                  <thead className="text-success">
                    <tr>
                      <th>Name</th>
                      <th>Food Group</th>
                      <th>Food Subgroup</th>
                      <th>Country</th>
                      <th>Energy (Kcal/KJ)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.foods
                      .filter((val) => {
                        if (props.search === "") {
                          return val;
                        } else if (
                          val.Name.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((food, index) => (
                        <tr key={index}>
                          <td>{food.Name}</td>
                          <td>{food.FoodGroup}</td>
                          <td>{food.FoodSubgroup}</td>
                          <td>{food.Country}</td>
                          <td>{food.Energy}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
  ); */
console.log("hola")
  //FUNCIONANDO
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Nutritional Module</CardTitle>
              </CardHeader>
              <CardBody>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name..."
                  onChange={handleSearch}
                />

                <Table striped>
                  <thead className="text-success">
                    <tr>
                      <th>Name</th>
                      <th>Food Group</th>
                      <th>Food Subgroup</th>
                      <th>Country</th>
                      <th>Energy (Kcal/KJ)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.foods
                      .filter((val) => {
                        if (props.search === "") {
                          return val;
                        } else if (
                          val.Name.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((food, index) => (
                        <tr key={index}>
                          <td>{food.Name}</td>
                          <td>{food.FoodGroup}</td>
                          <td>{food.FoodSubgroup}</td>
                          <td>{food.Country}</td>
                          <td>{food.Energy}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>

            <Button color="success" onClick={props.handleShow}>
              Añadir Alimento
            </Button>
            <Modal isOpen={props.show}>
              <ModalHeader>Añadir Alimento</ModalHeader>
              <ModalBody>
                <Form onSubmit={props.handleAddFormSubmit}>
                  <input
                    type="text"
                    name="Name"
                    required="Required"
                    placeholder="Enter a name"
                    onChange={props.handleAddFormChange}
                  />

                  <input
                    type="text"
                    name="FoodGroup"
                    required="Required"
                    placeholder="Enter the food group"
                    onChange={props.handleAddFormChange}
                  />
                  <input
                    type="text"
                    name="FoodSubgroup"
                    required="Required"
                    placeholder="Enter the food subgroup"
                    onChange={props.handleAddFormChange}
                  />
                  <input
                    type="text"
                    name="Country"
                    required="Required"
                    placeholder="Enter the Country"
                    onChange={props.handleAddFormChange}
                  />
                  <input
                    type="text"
                    name="Energy"
                    required="Required"
                    placeholder="Enter energy (Kcal)"
                    onChange={props.handleAddFormChange}
                  />
                  <input
                    type="text"
                    name="TotalProteins"
                    required="Required"
                    placeholder="Enter total proteins"
                    onChange={props.handleAddFormChange}
                  />
                  <input
                    type="text"
                    name="TotalCarbos"
                    required="Required"
                    placeholder="Enter total carbohydrates"
                    onChange={props.handleAddFormChange}
                  />
                  <input
                    type="text"
                    name="TotalSugars"
                    required="Required"
                    placeholder="Enter total sugars"
                    onChange={props.handleAddFormChange}
                  />
                  <input
                    type="text"
                    name="TotalLipids"
                    required="Required"
                    placeholder="Enter total lipds"
                    onChange={props.handleAddFormChange}
                  />
                  <Button
                    color="success"
                    className="nc-icon nc-simple-add"
                    type="submit"
                  >
                    <em></em>
                  </Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={props.handleClose} color="success">
                  Cerrar
                </Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </div>
    </>
  );
}
