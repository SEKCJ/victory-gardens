import React, { } from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IAppProps } from '../App';


const Navigate: React.FC<IAppProps> = props => {

    return (
        <Navbar variant="dark" bg="dark" expand="sm" className="sticky-top">
            <Navbar.Brand href="/"> <Image src={window.location.origin + "/assets/VGLogo.png"}
                style={{ "width": "3em" }} rounded/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navigate" />
            {/* <Navbar.Collapse id="navigate"> */}
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/choose">Help Me Choose</Nav.Link>
                <Nav.Link as={Link} to="/veggies">Browse All Veggies</Nav.Link>
                <Nav.Link as={Link} to="/savedveggies">My Garden</Nav.Link>
                {/* <Nav.Link as={Link} to="/">Calendar</Nav.Link> */}
            </Nav>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/myprofile">My Profile</Nav.Link>

            </Nav>
        </Navbar >
    )
}
           { /* <Nav>
                <NavDropdown className="mr-auto" title="Profile" id="profile-dropdown">
                    <NavDropdown.Item as={Link} to='/myprofile'>My Profile</NavDropdown.Item> */}
{/* <NavDropdown.Item as={Link} to='/savedveggies'>Saved Veggies</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/settings'>Settings</NavDropdown.Item> */}
{/* </NavDropdown> */ }
{/* <Nav.Link as={Link} to="/">Community Garden</Nav.Link> */ }
{/* </Nav>
        </Navbar.Collapse> */}




export default Navigate;