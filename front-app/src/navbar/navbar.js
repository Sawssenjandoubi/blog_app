import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbarr() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand >Blogs</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Register</Nav.Link>
            <Nav.Link >Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr