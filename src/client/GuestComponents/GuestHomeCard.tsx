import React, { } from 'react';
import { IAppProps } from '../GuestApp';
import { Jumbotron, Form, Button } from 'react-bootstrap';

const GuestHome: React.FC<IAppProps> = props => {
  return (
      <>
    <Jumbotron fluid>
        <h1>Victory Gardens</h1>
        <h4>How can YOU flatten the curve?</h4>
    </Jumbotron>
    


        <Form>
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
  <Button variant="primary" type="submit">Submit</Button>
  <div>
 <Button href="/guestsignup"variant="link" type="submit">Don't have an account? Click here to create one!</Button>
 </div>
</Form>
</>
  )
 }

export default GuestHome;