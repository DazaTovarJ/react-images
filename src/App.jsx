import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import AppCard from "./components/AppCard";
import {data} from "./data/card-data";
import "bootswatch/dist/journal/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>React Bootstrap</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          {data.map((item, index) => (
            <Col key={index} xs className="mb-3">
              <AppCard img={item.img} title={item.title} body={item.body} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
