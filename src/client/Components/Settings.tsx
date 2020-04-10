import React, { } from 'react';
import { IAppProps } from '../App';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Settings: React.FC<IAppProps> = props => {
    return (
    <Card>
    <Card.Header>
  
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
        <Nav.Link as={Link} to='/myprofile'>User Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/settings'>Settings</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    <div className="d-flex flex-row mx-auto">
    <Card.Body>
      <Card.Title>Settings</Card.Title>
      <Card.Text>
        Settings and stuff will go here
      </Card.Text>
    </Card.Body>
    </div>
  </Card>
      )
  }
      

export default Settings;