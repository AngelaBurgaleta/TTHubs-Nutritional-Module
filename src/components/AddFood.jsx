import React, { useState, Fragment } from "react";
import data from "./mock-data.json";
import { FoodTable } from "./FoodTable";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  Button,
} from "reactstrap";

export function AddFood(props) {



/*
  const [addFormData, setAddFormData] = useState({
    Name: "",
    FoodGroup: "",
    FoodSubgroup: "",
    Country: "",
    EnergyKcal: "",
    EnergyKJ: "",
    TotalProteins: "",
    TotalCarbos: "",
    TotalSugars: "",
    TotalLipids: "",
  });

  //manejador para añadir datos al formulario
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name"); //devuelve la clave del atributo que queramos añadir
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData }; //nuevo formulario copia el form anterior
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  //agregar datos a la tabla.
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    //crear nuevo objeto con los datos que ha almacenado el usuario
    const newFood = {
      id: nanoid(),
      Name: addFormData.Name,
      FoodGroup: addFormData.FoodGroup,
      FoodSubgroup: addFormData.FoodSubgroup,
      Country: addFormData.Country,
      EnergyKcal: addFormData.EnergyKcal,
      EnergyKJ: addFormData.EnergyKJ,
      TotalProteins: addFormData.TotalProteins,
      TotalCarbos: addFormData.TotalCarbos,
      TotalSugars: addFormData.TotalSugars,
      TotalLipids: addFormData.TotalLipids,
    };

    //const newFoods = [...props.foods, newFood];
    //props.setFoods(newFood);
  };*/
  

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <h3>Add a food</h3>
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
            <Button color= "success" className="nc-icon nc-simple-add" type="submit">
              <em></em>
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
