import React, { } from 'react';
import { IAppProps } from '../App';
import {Jumbotron, Container, Button} from 'react-bootstrap';

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
<Button variant="secondary">About Us</Button>

export default Home;