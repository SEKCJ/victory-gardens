import React, { } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IAppProps } from '../GuestApp';


const GuestNavigate: React.FC<IAppProps> = props => {

return (
    <Navbar variant="dark" bg="dark" expand="lg" className="sticky-top">
        <Navbar.Brand href="/"> <img src={window.location.origin + "/assets/VGLogo.png"}
        style={{"width": "3em"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navigate"/>
        <Navbar.Collapse id="navigate">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/guestchoose">Help Me Choose</Nav.Link>
                <Nav.Link as={Link} to="/guestveggies">Veggies</Nav.Link>
                {/* <Nav.Link as={Link} to="/">Calendar</Nav.Link> */}
                <Nav.Link as={Link} to="/guestabout">About Victory Gardens</Nav.Link>
                
            </Nav>
            <Nav className="mr-5">
                <Nav.Link as={Link} to="/myprofile">Login</Nav.Link>
                <Nav.Link as={Link} to="/guestsignup">Signup</Nav.Link>


            </Nav>
        </Navbar.Collapse>

    </Navbar >
)
}

export default GuestNavigate;