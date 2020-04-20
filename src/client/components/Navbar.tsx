import React, { } from 'react';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IAppProps } from '../App';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';


const Navigate: React.FC<IAppProps> = () => {
    let handleClick = async (e: React.MouseEvent) => {
        e.preventDefault()
        await localStorage.clear()
        window.location.reload()
    }

    return (
        <Navbar variant="dark" bg="dark" expand="sm" className="sticky-top">
            <Navbar.Brand href="/"> <Image src={window.location.origin + "/assets/VGLogo.png"}
                style={{ "width": "3em" }} rounded /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navigate" />
            {/* <Navbar.Collapse id="navigate"> */}
            {/* <Nav className="mr-auto">
                
                <Nav.Link as={Link} to="/veggies">Browse All Veggies</Nav.Link>
                <Nav.Link as={Link} to="/herbs">Browse All Herbs</Nav.Link> */}


            {/* <Nav.Link as={Link} to="/">Calendar</Nav.Link> */}
            {/* </Nav> */}

            <Navbar.Collapse id="navigate">  <Nav>
                <Nav.Link as={Link} to="/choose">Help Me Choose</Nav.Link>
                <NavDropdown className="mr-auto" title="Browse All" id="browse-dropdown">
                    <NavDropdown.Item as={Link} to='/veggies'>Veggies</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/userherbs'>Herbs</NavDropdown.Item>

                </NavDropdown>
                <Nav.Link as={Link} to="/savedveggies">My Garden</Nav.Link>
            </Nav>
            </Navbar.Collapse>
    

            <Nav className="mr-5">
                <Nav.Link as={Link} to="/myprofile">My Profile</Nav.Link>
        <Nav.Link as={Link} to="/communitygarden">Community Garden</Nav.Link>
        <Nav.Link onClick={(e: React.MouseEvent) =>  handleClick(e)}>Log Out</Nav.Link>
        </Nav></Navbar>
    )
    }

 
 
export default Navigate;