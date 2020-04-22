import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IAppProps } from '../GuestApp';
import { api, Token, setToken } from '../Services/apiServices';
import { Nav, Navbar, NavDropdown, Form, Button, DropdownButton, Alert, Container, Spinner } from 'react-bootstrap';


const GuestNavigate: React.FC<any> = props => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<JSX.Element>();
  const [btnState, setBtnState] = useState<boolean>(false);
  const [loading, setLoading] = useState<JSX.Element>();

  const handleLogin = async () => {
    setBtnState(true);
    let result = await api<{ token: string }>('/auth/login', "POST", { email, password });
    if (result?.token) {
      setToken(result.token);
      // props.history.push("/")
      setBtnState(false);
      window.location.reload()
    } else {
      setError(true)
      setBtnState(false)
    }
  }

  useEffect(() => {
    if (error === true) {
      setInvalid(
        <Alert variant="danger" className="mx-2 my-1" onClose={() => setError(false)} dismissible>
          <Alert.Heading>Invalid Login</Alert.Heading>
          <p>Check your credentials and try again.</p>
        </Alert>
      )
    } else {
      setInvalid(<div></div>)
    }
  }, [error])

  useEffect(() => {
    if (btnState === true) {
      setInvalid(<div></div>)
      setLoading(
        <Container className="d-flex">
          <Spinner className="mx-auto" animation="border" variant="info"
            style={{ "width": "5em", "height": "5em" }} />
        </Container>
      )
    } else {
      setLoading(
        <Form className="px-2 py-2 mb-0 d-flex flex-column">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              style={{ "width": "15em" }} value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="success" onClick={() => handleLogin()}
            type="submit" className="mx-auto" as={Link} to="/">
            Submit
            </Button>
        </Form>
      )
    }
  }, [btnState, email, password])

  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="sticky-top">
      <Navbar.Brand  href="/"> <img className="rounded" src={window.location.origin + "/assets/VGLogo.png"}
        style={{ "width": "3em" }} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navigate" />
      <Navbar.Collapse id="navigate">
        <Nav className="mr-auto">

          <Navbar.Collapse id="navigate">  <Nav>
            <Nav.Link as={Link} to="/guestchoose">Help Me Choose</Nav.Link>
            <NavDropdown className="mr-auto" title="Browse All" id="browse-dropdown">
              <NavDropdown.Item as={Link} to='/guestveggies'>Veggies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/guestherbs'>Herbs</NavDropdown.Item>

            </NavDropdown>
            {/* <Nav.Link as={Link} to="/">Calendar</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/guestabout">About Victory Gardens</Nav.Link> */}
          </Nav>
          </Navbar.Collapse>


        </Nav>
        <Nav className="mr-5">

          <DropdownButton alignRight title="Login" variant="success" id="login-button">
            {loading}
            {invalid}
          </DropdownButton>

          <Nav.Link as={Link} to="/guestsignup">Signup</Nav.Link>


        </Nav>
      </Navbar.Collapse>

    </Navbar >
  )
}


export default GuestNavigate;