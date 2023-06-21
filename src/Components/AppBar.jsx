import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function AppBar() {
  return (
    <>
      {/* <Navbar>
     <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/products">Products</Link>
              {/* <Nav.Link ><Link to="/products" >CategoryPage</Link></Nav.Link> */}
              <Link className="nav-linkms-4 btn btn-dark" to="/login">
                Login
              </Link>
              <Link  className="nav-link btn btn-dark" to="/signup">
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AppBar
