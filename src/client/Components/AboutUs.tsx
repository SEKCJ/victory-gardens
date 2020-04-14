import React, { } from 'react';
import { Jumbotron, Container, Carousel, Image, Card} from 'react-bootstrap';
import { IAppProps } from '../App';

const AboutUs: React.FC<IAppProps> = props => {
  return (
  <Container className= "d-flex flex-column">
      <Jumbotron fluid>
              <h1>About Victory Gardens</h1>
      </Jumbotron>

      <Carousel>
  <Carousel.Item>
    <Image
      className="d-block w-25"
      src="https://live.staticflickr.com/6053/6302880786_13e17071f5_b.jpg"
      alt="First slide" rounded
    />
    <Carousel.Caption>
      <h3>What is a Victory Garden?</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>


<Card className="mr-auto" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>What is a Victory Garden?</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </Container>
  )
}
export default AboutUs;