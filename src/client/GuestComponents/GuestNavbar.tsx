import React, { } from 'react';
import { Nav, Navbar, NavDropdown, Form, Button} from 'react-bootstrap';
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
               
                <Navbar.Collapse id="navigate">  <Nav>
                 <Nav.Link as={Link} to="/guestchoose">Help Me Choose</Nav.Link>
                <NavDropdown className="mr-auto" title="Browse All" id="browse-dropdown">
                    <NavDropdown.Item as={Link} to='/guestveggies'>Veggies</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/'>Herbs</NavDropdown.Item>

                </NavDropdown>
                {/* <Nav.Link as={Link} to="/">Calendar</Nav.Link> */}
                <Nav.Link as={Link} to="/guestabout">About Victory Gardens</Nav.Link>
                </Nav>
            </Navbar.Collapse>


            </Nav>
            <Nav className="mr-5">
            <NavDropdown className="mr-auto" title="Login" id="login-dropdown" >
                    <NavDropdown.Item onClick={(e:any)=> e.preventDefault()}><Form>
<Form.Group controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
  </Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
</NavDropdown.Item>
                    

                </NavDropdown>
                <Nav.Link as={Link} to="/guestsignup">Signup</Nav.Link>


            </Nav>
        </Navbar.Collapse>

    </Navbar >
)
}


export default GuestNavigate;