import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import AppCard from "./components/AppCard";
import {data} from "./data/card-data";
import "bootswatch/dist/journal/bootstrap.min.css";

function App() {
  let rows = Math.ceil(data.length / 4);

  const getCardsPerRow = (index) => {
    const startIndex = index * 4;
    const endIndex = startIndex + 4;
    return data.slice(startIndex, endIndex);
  };

  const renderRows = () => {
    let rows = [];

    for (let i = 0; i < Math.ceil(data.length / 4); i++) {
      const cardsPerRow = getCardsPerRow(i);
      rows.push(
        <Row key={i}>
          {cardsPerRow.map((item, index, array) => (
            <Col
              key={index}
              md={12 / (array.length <= 2 ? array.length : array.length / 2)}
              lg={12 / array.length}
              className="mb-3"
            >
              <AppCard img={item.img} title={item.title} body={item.body} />
            </Col>
          ))}
        </Row>,
      );
    }

    return rows;
  };

  return (
    <div className="App">
      <Container>
        <h1>React Bootstrap</h1>
        {renderRows()}
      </Container>
    </div>
  );
}

export default App;
