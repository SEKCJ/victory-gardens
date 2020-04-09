import React, { } from 'react';
import { IAppProps } from '../App';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';

const Home: React.FC<IAppProps> = props => {
    return (

<Jumbotron fluid>
  <Container>
    <h1>Victory Gardens</h1>
    <h4>How can YOU flatten the curve?</h4>
    
  </Container>
</Jumbotron>

    ); 
};


export default Home;