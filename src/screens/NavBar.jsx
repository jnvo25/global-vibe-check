import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar() {

    return(
        <Navbar sticky="top" variant="light" expand="lg" className="bottom-nav pb-0">
            <LinkContainer to="/" exact>
                <Navbar.Brand>
                    <img className="brand" src={""} alt="Hero" />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="DropDown">
                        <LinkContainer>
                            <NavDropdown.Item>About Us</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer>
                            <NavDropdown.Item>Covid Guidelines</NavDropdown.Item>
                        </LinkContainer>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item>Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <LinkContainer to="/contactus">
                        <Nav.Link>Interactive Global Map</Nav.Link>
                    </LinkContainer>
                    <Button className="nav-button" variant="secondary" href="tel:818-993-1369"><i className="fas fa-phone-alt pr-1"/>Call Us</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}