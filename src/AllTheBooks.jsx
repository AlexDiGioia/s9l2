import { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import BooksData from "./data/fantasy.json";
import Col from 'react-bootstrap/Col';

class AllTheBooks extends Component {
  render() {
    return (
      <>
      <Row>
        
      {BooksData.map((book)=>(
        <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Button variant="primary">{book.price}€</Button>
          </Card.Body>
        </Card>
        </Col>
      ))}
      </Row>
      </>
    );
  }
}

export default AllTheBooks;
