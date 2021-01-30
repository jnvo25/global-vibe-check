import React, { useState } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar() {

    // TODO: Open dropdown on hover
    // TODO: Link links

    // const [isOpen, setOpen] = useState(false);

    return(
        <Navbar sticky="top" variant="dark" expand="lg" className="bottom-nav pb-0">
            <LinkContainer to="/" exact>
                <Navbar.Brand>
                    <img className="brand" 
                        // open={isOpen}
                        style={{width: "100px"}} 
                        src={"https://firebasestorage.googleapis.com/v0/b/global-vibe-check.appspot.com/o/images%2Ftransparent-global-logo.png?alt=media&token=294cb8c8-ebf9-492f-a397-109ea4325d01"} 
                        alt="Hero" />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Menu" open={true}>
                        <LinkContainer to="/about">
                            <NavDropdown.Item>About Us</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/guidelines">
                            <NavDropdown.Item>Covid Guidelines</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/stats">
                            <NavDropdown.Item>Covid Statistics</NavDropdown.Item>
                        </LinkContainer>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item>Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <LinkContainer to="/globe">
                        <Nav.Link>Interactive Global Map</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}