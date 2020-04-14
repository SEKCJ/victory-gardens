import * as React from "react";
// import { IAppProps } from '../App';
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Accordion,
  Button,
  Form,
  Jumbotron,
  Image,
} from "react-bootstrap";

class GuestAbout extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      name: null,
    };
  }

  async componentDidMount() {
    try {
      let r = await fetch("/api/hello");
      let name = await r.json();
      this.setState({ name });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <main className="container my-5">
              <h1 className="text-primary">
                About Victory Gardens{this.state.name}
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
}

export interface IAppProps { }

export interface IAppState {
  name: string;
}

export default GuestAbout;
