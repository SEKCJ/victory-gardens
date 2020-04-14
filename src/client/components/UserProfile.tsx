import React, { } from 'react';
import { RouteComponentProps } from 'react-router';
import { Card, Nav, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyProfile: React.FC<IProfileProps> = props => {
  let handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await localStorage.clear()
    window.location.reload()
  }
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
          <br></br>
          <Image
            width={70}
            height={70}
            className="mr-3"
            src="https://www.jing.fm/clipimg/detail/29-294477_jpg-royalty-free-stock-tomato-clipart-free-cherry.png"
            alt="Generic placeholder" roundedCircle
          />
          <br></br>
          <Card.Title>User Profile</Card.Title>
          <br></br>
          <Card.Text>
            Name:
    </Card.Text>
          <br></br>
          <Card.Text>
            Email:
    </Card.Text>
          <br></br>
          <Card.Text>
            Password (encrypted):
    </Card.Text>
          <Button variant="danger" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}>Log Out</Button>

        </Card.Body>
      </div>
    </Card>
  )
}

export interface IProfileProps extends RouteComponentProps { }

export default MyProfile;