import React, { } from 'react';
import { IAppProps } from '../App';
import { Card, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyProfile: React.FC<IAppProps> = props => {
    return(
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
       <img
    width={70}
    height={70}
    className="mr-3"
    src="https://www.jing.fm/clipimg/detail/29-294477_jpg-royalty-free-stock-tomato-clipart-free-cherry.png"
    alt="Generic placeholder"
  />
    <Card.Title>User Profile</Card.Title>
    <Card.Text>
      Name:
    </Card.Text>
    <Card.Text>
     Email:
    </Card.Text>
    <Card.Text>
     Password (encrypted):
    </Card.Text>

  </Card.Body>
  </div>
</Card>
    )
}
    

export default MyProfile;