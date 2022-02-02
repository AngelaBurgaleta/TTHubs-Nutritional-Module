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
} from "reactstrap";

export function FoodTable(props) {

//const [foods, setFoods] = useState(data);

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
                    {props.foods.map((food) => (
                      <tr>
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
    </>


)

}

