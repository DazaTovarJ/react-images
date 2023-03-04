import React from "react";
import {Button, Card} from "react-bootstrap";

function AppCard({img, title, body}) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default AppCard;
