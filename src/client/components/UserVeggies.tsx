
import React, { } from 'react';
import { Card, CardColumns, Container, Jumbotron } from 'react-bootstrap';
import { IAppProps } from '../App';

const Veggies: React.FC<IAppProps> = props => {
    

    return (
        <React.Fragment>

<Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>

            <CardColumns>

                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
        content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                
            </CardColumns>
        </React.Fragment>
    )
}




export default Veggies;