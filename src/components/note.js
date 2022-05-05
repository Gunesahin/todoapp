import React from "react";
import { Button, Card } from "react-bootstrap";
const Note = ({ note, removeNote }) => {
  const {  title, body } = note;
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary">Sil</Button>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={()=>removeNote()}>sil</Button>
      </Card.Footer>
    </Card>
  );
};
export default Note;