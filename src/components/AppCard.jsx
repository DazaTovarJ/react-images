import React from "react";
import {Button, Card} from "react-bootstrap";

function AppCard({img, title, body, count}) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title + " - Count: " + count}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default AppCard;
