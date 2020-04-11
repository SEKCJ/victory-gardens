import React, { } from 'react';
import { Container, Form, Button, Jumbotron, Dropdown, InputGroup, DropdownButton, FormControl } from 'react-bootstrap';
import { IAppProps } from '../GuestApp';
//import { Fragment } from 'react-router-dom';

const GuestSignUp: React.FC<IAppProps> = () => {
  return (
    <Container fluid>
      <Jumbotron fluid>
        <h1>Join the Army of Victory Gardens!</h1>
        <p>Join the fight against potential source rationing and start gardening today!</p>
        </Jumbotron>



      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>

      <br></br><br></br>

      <InputGroup className="mb-3">

        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Help Me Choose!"
          id="input-group-dropdown-1">

          <Dropdown.Item href="#">Plant example</Dropdown.Item>
          <Dropdown.Item href="#">Plant example</Dropdown.Item>
          <Dropdown.Item href="#">Plant example</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="./GuestChoose">See More..</Dropdown.Item>
        </DropdownButton>

        <FormControl
          placeholder="What plants will you be gardening?"
          aria-label="What plants will you be gardening?"
          aria-describedby="basic-addon1"/>
   </InputGroup>

     <Form.Text className="text-muted">So we can help you find your inner green thumb!</Form.Text>
   
   <br></br>

      <InputGroup>

        <FormControl
          placeholder="Where will you be gardening?"
          aria-label="Where will you be gardening?"
          aria-describedby="basic-addon2"/>

        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2">

          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>

   </InputGroup>
       <Form.Text className="text-muted">Why do we need your location?</Form.Text>

       <br></br>

       <Button variant="primary" type="submit">Let's dig in!</Button>
 </Container>
  )
}


export default GuestSignUp;