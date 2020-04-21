import React, { } from 'react';
import { IAppProps } from '../App';
import { Card, Nav, Col, Row, ListGroup, Button } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Settings: React.FC<IAppProps> = props => {
  return (
    <React.Fragment>

      <Card.Header>
        <Card.Title className="my-auto">Settings</Card.Title>
      </Card.Header>
      <Card.Body className="mx-3">

        <Card>
          <Card.Header className="bg-warning text-dark px-2 py-2">
            <Card.Title className="my-auto"><FaExclamationTriangle className="mr-2" />Change Your Profile Settings</Card.Title>
          </Card.Header>
          <Card.Body className="px-0 pb-0">
            <ListGroup>
              <ListGroup.Item>
                <h6>Password</h6>
                <Button variant="outline-warning">
                  Reset Password
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>Delete Account</h6>
                <Button variant="outline-danger">
                  Warning: This Will Delete Your Account
                </Button>
              </ListGroup.Item>

            </ListGroup>
          </Card.Body>
        </Card>
      </Card.Body>
    </React.Fragment>
  )
}


export default Settings;