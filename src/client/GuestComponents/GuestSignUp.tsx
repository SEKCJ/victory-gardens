import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Jumbotron, Col, Row, Spinner, Modal, Badge } from 'react-bootstrap';
import { ILoginProps } from './GuestHomeCard';
import { api, setToken, Token } from '../Services/apiServices';
//import { Fragment } from 'react-router-dom';

const UserSignUp: React.FC<ILoginProps> = (props) => {

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(true);
  const [show, setShow] = useState(false);

  const [error, setError] = useState<JSX.Element>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    api('/auth/tokens/validate')
      .then(result => {
        if (result.msg === "successful") {
          props.history.push("/")
        }
      })
      .catch(error => {
        setLoading(false)
      })
  }, [])


  let handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    if (password === confirmPass) {
      let [results] = await api('/auth/emailCheck', "POST", { email })
      if (results) {
        setLoading(false);
        setShow(true);
        setError(
          <div style={{ "backgroundColor": "#E3C36D" }} className="rounded">
            <Modal.Header className="d-flex" closeButton>
              <Modal.Title><Badge style={{ "backgroundColor": "1A5FBC", "color": "#E3C36D" }}
              >Invalid Email!</Badge></Modal.Title>
            </Modal.Header>
            <Modal.Body as="h6">This email is already in use</Modal.Body>
          </div>
        )
      } else {
        if (password !== "" && email !== "" && confirmPass !== ""
          && firstName !== "" && lastName !== "" && userName !== "") {
          if (email.indexOf("@") !== -1) {
            let results = await api('/auth/register', "POST",
              { email, firstName, lastName, password, userName });
            
            setToken(results.token);
            props.history.push("/")
            window.location.reload()
          } else {
            setLoading(false)
            setShow(true);
            setError(
              <div style={{ "backgroundColor": "#E3C36D" }} className="rounded">
                <Modal.Header className="d-flex" closeButton>
                  <Modal.Title><Badge style={{ "backgroundColor": "1A5FBC", "color": "#E3C36D" }}
                  >Invalid Email!</Badge></Modal.Title>
                </Modal.Header>
                <Modal.Body as="h6">Email is not valid!</Modal.Body>
              </div>
            )
          }
        } else {
          setLoading(false);
          setShow(true);
          setError(
            <div style={{ "backgroundColor": "#E3C36D" }} className="rounded">
              <Modal.Header className="d-flex" closeButton>
                <Modal.Title><Badge style={{ "backgroundColor": "1A5FBC", "color": "#E3C36D" }}
                >Empty Fields!</Badge></Modal.Title>
              </Modal.Header>
              <Modal.Body as="h6">Please make sure all fields are not empty!</Modal.Body>
            </div>
          )
        }
      }
    } else {
      setLoading(false);
      setShow(true);
      setError(
        <div style={{ "backgroundColor": "#E3C36D" }} className="rounded">
          <Modal.Header className="d-flex" closeButton>
            <Modal.Title><Badge style={{ "backgroundColor": "1A5FBC", "color": "#E3C36D" }}
            >Invalid Passwords!</Badge></Modal.Title>
          </Modal.Header>
          <Modal.Body className="pb-0" as="h6"
          >Please Check Your Password Matches</Modal.Body>
        </div>
      )
    }
  }

  if (loading === true) {
    return (
      <Container className="d-flex">
        <Spinner className="mx-auto my-3" animation="border" variant="warning"
          style={{ "width": "30em", "height": "30em" }} />
      </Container>
    )
  } else {
    return (
      <React.Fragment>
        <Jumbotron fluid className="rounded bg-success text-white ">
          <h1>Join the Army of Victory Gardens!</h1>
          <p>Join the fight against potential source rationing and start gardening today!</p>
        </Jumbotron>

        <Modal show={show} onHide={handleClose} animation={true} keyboard={true}
          autoFocus={true} restoreFocus={true} centered >
          {error}
        </Modal>

        <Container>
          <h3 className="text-center mb-5">Tell Us More About You!</h3>
          <Form className="mb-4">
            <Row>
              <Col sm="6">
                <Form.Group controlId="first-name-input" className="d-flex">
                  <Col sm="4" className="px-0"><Form.Label>First Name</Form.Label></Col>
                  <Col sm="8" className="pl-2"> <Form.Control placeholder="First name" value={firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} /> </Col>
                </Form.Group>
              </Col>
              <Col sm="6" className="px-0">
                <Form.Group controlId="last-name-input" className="d-flex">
                  <Col sm="3" className="px-0"><Form.Label>Last Name</Form.Label></Col>
                  <Col sm="8" className="pl-2"><Form.Control placeholder="Last name" value={lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} /></Col>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm="6">
                <Form.Group controlId="enter-email" className="d-flex">
                  <Col sm="4" className="px-0"><Form.Label>Email address</Form.Label></Col>
                  <Col sm="8" className="pl-2">
                    <Form.Control type="email" placeholder="Enter email" value={email} required
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm="6" className="px-0">
                <Form.Group controlId="username" className="d-flex">
                  <Col sm="3" className="px-0"><Form.Label>Username</Form.Label></Col>
                  <Col sm="8" className="pl-2"><Form.Control placeholder="VeggieMaster9000" value={userName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} /></Col>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm="6">
                <Form.Group controlId="enter-password" className="d-flex">
                  <Col sm="4" className="px-0"><Form.Label>Password</Form.Label></Col>
                  <Col sm="8" className="pl-2"><Form.Control type="password" placeholder="Password" value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} /></Col>
                </Form.Group>
              </Col>
              <Col sm="6" className="px-0">
                <Form.Group controlId="confirm-password" className="d-flex">
                  <Col sm="3" className="px-0"><Form.Label>Confirm Password</Form.Label></Col>
                  <Col sm="8" className="pl-2"><Form.Control type="password" placeholder="Confirm Password" value={confirmPass}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPass(e.target.value)} /></Col>
                </Form.Group>
              </Col>
            </Row>

            <Row className='d-flex my-5'>
              <Col sm="8" className="mx-auto d-flex">
                <Col sm="2" className="mr-4">
                  <div style={{ "width": "100%", "height": "1em" }}></div>
                </Col>
                <Button href="/veggies" className="col-sm-8"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
                  variant="success" type="submit"><h5 className="my-auto text-white">Let's dig in!</h5></Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </React.Fragment>
    )
  }
}


export default UserSignUp;