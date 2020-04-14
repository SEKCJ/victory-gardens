import React, { } from 'react';
import { IAppProps } from '../App';
import { Jumbotron, Container, Button, Form } from 'react-bootstrap';

const GuestAbout: React.FC<IAppProps> = props => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <main className="container my-5">
            <h1 className="text-primary">
              About Victory Gardens
            </h1>
            <div className="video">
              <h3 className="text-primary">What is a Victory Garden?</h3>
              <p>
                In World War I and World War II, Victory Gardens were a prominent part of the American landscape. By the end of WWII, produce from Victory Gardens provided 40% of the nation's food needs.
              </p>
              <p>
                Government-issued posters, pamphlets, and films educated the public in growing techniques, pest control, and the health and economic benefits of Victory Gardens.
              </p>
              <p>
                In 2019,
              </p>
              <iframe
                src="https://archive.org/embed/Kitchencaravan-TheVictoryGardenGrowsAgain209-2"
                width="640"
                height="480"
                frameBorder="0"
                // webkitallowfullscreen="true"
                // mozallowfullscreen="true"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-muted">
              Don't have an account yet? Click
              <Button href="/guestsignup" variant="link" type="submit">
                here
              </Button>
              to join Victory Gardens!
            </p>
          </main>
        </Container>
      </Jumbotron>
      <Button variant="primary" type="submit" disabled>
        Click to _go some place_.
      </Button>
      <Form.Text className="text-muted">
        Must be signed in to _do some thing_.
      </Form.Text>
    </>
  );
}

export default GuestAbout;

