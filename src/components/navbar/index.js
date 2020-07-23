import React from 'react'
import { Link } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'


function NavBar(){

    return(
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
          <Link to="/">Treehouse</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link> <Link to="/renters">All Renters</Link></Nav.Link>
            <Nav.Link> <Link to="/landlord">Landlord Profile</Link></Nav.Link>
            <Nav.Link> <Link to="/renter-profile">Renter Profile</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
        <a href="https://treehouse-115.web.app/" >
        <button type="button" className="btn btn-success">Login</button>
        </a>

        <a href="https://renter-profile2.web.app/" >
        <button type="button" className="btn btn-success">Renter</button>
        </a>

        <a href="https://landlord-profile.web.app/" >
        <button type="button" className="btn btn-success">Landlord</button>
        </a>

        <a href="https://chat-112.web.app/" >
        <button type="button" className="btn btn-success">Chat</button>
        </a>

      </Navbar>
    );
}


export default NavBar
