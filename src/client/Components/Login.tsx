import React, { } from 'react';
import { Form, Button } from 'react-bootstrap';
import { IAppProps } from '../App';


const UserLogin: React.FC<IAppProps> = () => {
  return (
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
      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
  )
}

export default UserLogin;