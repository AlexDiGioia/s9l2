import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Component } from "react";


/*class MyNav extends Component {

    state = {
        booksDir: ""
    };

}*/


const MyNav = (props) => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Libri Belli</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <NavDropdown title="Browse" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              History
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Romance
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sci-Fi</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
