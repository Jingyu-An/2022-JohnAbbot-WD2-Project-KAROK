//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useDispatch} from "react-redux";
import {logout} from "../../Actions/AuthActions";

// import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigate() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log("Log out handler")
    dispatch(logout())
  }


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>

        <Navbar.Brand href="#">Karokify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Karokify</Nav.Link>
            <Nav.Link href="#action2">Login</Nav.Link>
            <Nav.Link href="#action2">Support</Nav.Link>
            {/*Temporary logout button*/}
            <button style={{cursor: "pointer"}} onClick={handleLogOut}>Log Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;