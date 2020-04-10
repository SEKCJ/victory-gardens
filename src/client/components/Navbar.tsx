import React, { } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IAppProps } from '../App';


const Navigate: React.FC<IAppProps> = props => {

return (
    <Navbar variant="dark" bg="dark" expand="sm" className="sticky-top">
        <Navbar.Brand href="/"> <img src={window.location.origin + "/assets/VGLogo.png"}
        style={{"width": "3em"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navigate"/>
        <Navbar.Collapse id="navigate">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/choose">Help Me Choose</Nav.Link>
                <Nav.Link as={Link} to="/veggies">My Veggies</Nav.Link>
                {/* <Nav.Link as={Link} to="/">Calendar</Nav.Link> */}
            </Nav>
            <Nav>
                <NavDropdown className="mr-auto" title="Profile" id="profile-dropdown">
                    <NavDropdown.Item as={Link} to='/myprofile'>My Profile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/savedveggies'>Saved Veggies</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/settings'>Settings</NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link as={Link} to="/">Community Garden</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>

    </Navbar >
)
}

export default Navigate;