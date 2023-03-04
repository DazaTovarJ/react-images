import React from "react";
import {Button, Card} from "react-bootstrap";

function Counter({count, setCount}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">Counter: {count}</Card.Title>
        <div className="d-flex justify-content-evenly">
          <Button variant="primary" onClick={() => setCount((c) => c + 1)}>
            Increment
          </Button>
          <Button variant="secondary" onClick={() => setCount((c) => c - 1)}>
            Decrement
          </Button>
          <Button variant="danger" onClick={() => setCount(0)}>
            Reset
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Counter;
