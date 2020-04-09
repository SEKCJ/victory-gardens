import React, { } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IAppProps } from '../App';


const Navigate: React.FC<IAppProps> = props => {

return (
    <Navbar variant="dark" bg="dark" expand="lg" className="sticky-top">
        <Navbar.Brand href="/"> <img src={window.location.origin + "/assets/VGLogo.png"}
        style={{"width": "3em"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navigate"/>
        <Navbar.Collapse id="navigate">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/Choose">Help Me Choose</Nav.Link>
                <Nav.Link as={Link} to="/veggies">My Veggies</Nav.Link>
                <Nav.Link as={Link} to="/">Calendar</Nav.Link>
                <Nav.Link as={Link} to="/about">About Victory Gardens</Nav.Link>

            </Nav>
            <Nav>
                <NavDropdown className="mr-auto" title="Profile" id="profile-dropdown">
                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                    <NavDropdown.Item>My Garden</NavDropdown.Item>
                    <NavDropdown.Item>Saved Veggies</NavDropdown.Item>
                    <NavDropdown.Item>Settings</NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link as={Link} to="/">Community Garden</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>

    </Navbar >
)
}

export default Navigate;