import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Card, Container, Col, Row, Tabs, Tab, Fade, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Settings from './Settings';
import Profile from './MyProfile';

const MyProfile: React.FC<IProfileProps> = props => {

  const [key, setKey] = useState('profile');

  let handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await localStorage.clear()
    window.location.reload()
  }



  return (
    <Container>
      <Row className="d-flex">
        <Col sm="10" className="mx-auto my-4">
          <Tabs defaultActiveKey="profile" activeKey={key} transition={Fade} id="my-profile"
            className="bg-success rounded profileTabs" variant="pills" onSelect={(k: any) => setKey(k)}>
            <Tab eventKey="profile" title="My Profile" >
              <Tab.Content as={Card}>
                <Profile />
              </Tab.Content>
            </Tab>
            <Tab eventKey="settings" title="Settings">
              <Tab.Content as={Card}>
                <Settings />
              </Tab.Content>
            </Tab>

          </Tabs>
        </Col>
      </Row>

    </Container>
  )
}

export interface IProfileProps extends RouteComponentProps { }

export default MyProfile;