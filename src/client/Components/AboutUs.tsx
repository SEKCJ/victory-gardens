import React, { } from 'react';
import { IAppProps } from '../App';
import { Carousel, Card, Image, Jumbotron, Container } from 'react-bootstrap';

const AboutUs: React.FC<IAppProps> = props => {
  return (
    <Container className="justify-content-center">
      <Jumbotron fluid className="rounded">
        <main className="container my-5">
          <h1 className="text-primary">About Victory Gardens</h1>
          <div className="video">  <h3 className="text-primary"></h3>
            {/* <iframe src="https://archive.org/embed/Kitchencaravan-TheVictoryGardenGrowsAgain209-2" width="640" height="480" frameBorder="0" allowFullScreen></iframe> */}
            {/* // webkitallowfullscreen="true"
      // mozallowfullscreen="true"  */}
          </div>
          {/* <p className="text-muted">Don't have an account yet? Click<Button href="/guestsignup" variant="link" type="submit">here</Button>to join Victory Gardens!</p>  */}
        </main>
      </Jumbotron>
      <div className="justify-content">
        <Carousel className="rounded mb-5">
          <Carousel.Item>
            <Image className="d-block w-100"
              src="assets/victorydefintion2.png"
              alt="First slide" rounded />

          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block w-100"
              src="assets/victoryabout3.jpg"
              alt="Third slide" rounded />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>

  )
}
export default AboutUs;