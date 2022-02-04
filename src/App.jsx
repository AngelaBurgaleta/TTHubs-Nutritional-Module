import React, { useState, Fragment, useRef } from "react";
import { nanoid } from "nanoid";
import data from "./components/mock-data.json";
import { FoodTable } from "./components/FoodTable";
import { AddFood } from "./components/AddFood";
import { NavbarEl } from "components/NavbarEl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Card,
  Container,
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
  Navbar
} from "reactstrap";
import Home from "./components/pages/Home";
import Statistics from "./components/pages/Statistics";
import Reports from "./components/pages/Reports";
import  {Sidebar}  from "./components/Sidebar";

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

  //Abrir y cerrar el modal de añadir alimento

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <Fragment>
      <Navbar />
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
  //nav bar side

  return (
    <Fragment>
      <Router>
        <Navbar />
        <div>
          <Sidebar />
          <div className="content">
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/statistics" exact={true} component={Statistics} />
              <Route path="/reports" exact={true} component={Reports} />
            </Switch>
          </div>
        </div>
      </Router>
    </Fragment>
  );
  */
}
