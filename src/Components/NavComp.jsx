import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap'
import logo from '../static/logo.svg';


export default class NavComp extends Component {
    render() {
        return (
            <div>
                <Navbar className='nav-color' variant="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand><img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"/>
                            Cv
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll >
                                <NavLink className="nav-link" to="/">Home</NavLink>
                                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                <NavLink className="nav-link" to="/pdf">Pdf</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
