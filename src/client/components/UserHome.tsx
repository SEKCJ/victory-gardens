import React, { } from 'react';
import { IAppProps } from '../App';
import { Jumbotron, Form, Button } from 'react-bootstrap';

const Home: React.FC<IAppProps> = props => {
  return (
      <Jumbotron fluid>
        <h1>Victory Gardens</h1>
        <h4>How can YOU flatten the curve?</h4>
      </Jumbotron>


  )
}

export default Home;