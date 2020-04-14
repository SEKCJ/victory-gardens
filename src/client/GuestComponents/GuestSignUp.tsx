import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Jumbotron, Col, Row, Spinner } from 'react-bootstrap';
import { ILoginProps } from './GuestHomeCard';
import { api, setToken, Token } from '../Services/apiServices';
//import { Fragment } from 'react-router-dom';

const UserSignUp: React.FC<ILoginProps> = (props) => {

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

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
      if (results === null) {
        alert('This email has been already added to the database')
      } else {
        if (password !== "" && email !== "" && confirmPass !== "" && firstName !== "" && lastName !== "") {
          let results = await api('/auth/register', "POST", { email, firstName, lastName, password });
          setToken(results.token);
          props.history.push("/")
          window.location.reload()
        } else {
          alert("please make sure each box is filled")
        }
      }
    } else {
      alert("passwords do not match")
    }
  }

  if (loading === true) {
    return (
      <Container className="d-flex">
        <Spinner className="mx-auto my-3" animation="border" variant="warning" style={{ "width": "30em", "height": "30em" }} />
      </Container>
    )
  } else {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <h1>Join the Army of Victory Gardens!</h1>
          <p>Join the fight against potential source rationing and start gardening today!</p>
        </Jumbotron>

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

            <Form.Group controlId="enter-email">
              <Row>
                <Col sm="2"><Form.Label>Email address</Form.Label></Col>
                <Col sm="10"><Form.Control type="email" placeholder="Enter email" value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} /></Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="enter-password">
              <Row>
                <Col sm="2"><Form.Label>Password</Form.Label></Col>
                <Col sm="10"><Form.Control type="password" placeholder="Password" value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} /></Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="confirm-password">
              <Row>
                <Col sm="2"><Form.Label>Confirm Password</Form.Label></Col>
                <Col sm="10"><Form.Control type="password" placeholder="Password" value={confirmPass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPass(e.target.value)} /></Col>
              </Row>
            </Form.Group>

            <Row className='d-flex my-5'>
              <Col sm="8" className="mx-auto d-flex">
                <Col sm="2" className="mr-4">
                  <div style={{ "width": "100%", "height": "1em" }}></div>
                </Col>
                <Button href="/veggies" className="col-sm-8"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
                  variant="primary" type="submit"><h5 className="my-auto">Let's dig in!</h5></Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </React.Fragment>
    )
  }
}


export default UserSignUp;