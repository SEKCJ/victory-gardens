import React, { } from 'react';
import { Jumbotron, Container} from 'react-bootstrap';
import { IAppProps } from '../App';

const AboutUs: React.FC<IAppProps> = props => {
  return (
  <Container className= "d-flex flex-column">
      <Jumbotron fluid>
              <h1>About Victory Gardens</h1>
      </Jumbotron>
  </Container>
  )
}
export default AboutUs;