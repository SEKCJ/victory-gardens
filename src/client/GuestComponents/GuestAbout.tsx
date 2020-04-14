import React, { } from 'react';
import { IAppProps } from '../App';
import { Jumbotron, Container} from 'react-bootstrap';

const GuestAbout: React.FC<IAppProps> = props => {
  return (
	  <Container>
      <Jumbotron fluid>
        <h1>Victor Gardens</h1>
        <h4>How can YOU flatten the curve?</h4>
      </Jumbotron>
	 </Container>
  )
}

export default GuestAbout;