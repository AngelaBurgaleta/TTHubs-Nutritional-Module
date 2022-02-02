import React, { useState, Fragment, useRef } from "react";
import { nanoid } from "nanoid";
import data from "./components/mock-data.json";
import { FoodTable } from "./components/FoodTable";
import { AddFood } from "components/AddFood";
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export function App() {
  const [foods, setFoods] = useState(data);

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
      Energy: addFormData.Energy,
      TotalProteins: addFormData.TotalProteins,
      TotalCarbos: addFormData.TotalCarbos,
      TotalSugars: addFormData.TotalSugars,
      TotalLipids: addFormData.TotalLipids,
    };

    const newFoods = [...foods, newFood];
    setFoods(newFoods);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <FoodTable foods={foods} setFoods={setFoods} />
      <AddFood
        handleAddFormChange={handleAddFormChange}
        handleAddFormSubmit={handleAddFormSubmit}
        show={show}
        setShow={setShow}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </Fragment>
  );

  /*
  return (
    <Fragment>
      <Button color="success" onClick={handleShow}>Show Modal</Button>
      <Modal isOpen={show}>
        <ModalHeader>Añadir Alimento</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="usuario">Nombre</Label>
            <Input type="text"/>
          </FormGroup>
          <FormGroup>
            <Label for="nombre">Energia</Label>
            <Input type="text" id="energia" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
        <Button color="success">Añadir</Button>
        <Button onClick={handleClose} color="success">Cerrar</Button>
        </ModalFooter> 
      </Modal>
    </Fragment>
  );
 */
}
