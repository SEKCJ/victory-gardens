import React, { } from 'react';
import { IAppProps } from '../App';
import { Jumbotron} from 'react-bootstrap';

const AboutUs: React.FC<IAppProps> = props => {
  return (
      <Jumbotron fluid>
        <h1>Victor Gardens</h1>
        <h4>How can YOU flatten the curve?</h4>
      </Jumbotron>
  )
}

export default AboutUs;