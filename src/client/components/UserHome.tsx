import React, { } from 'react';
import { IAppProps } from '../App';
import { Jumbotron, Button, Container, Row, Col, Image, Carousel } from 'react-bootstrap';


const UserHome: React.FC<IAppProps> = props => { 
  return (
  <>
    <Jumbotron fluid className="shadow rounded text-white ">
      <h1 className="text-light">Welcome to Victory Gardens!</h1><p className="text-light">How will YOU help flatten the curve?</p>
      </Jumbotron>
      <Container className="justify-content-around ">  
        <div className="justify-content-around">
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
           {/* <Container fluid className="justify-content-center">
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
    </Container> */}
</>
  )
}

{/* 
      <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image 
       width={300}
       height={200}
       src="https://c0.wallpaperflare.com/preview/716/333/216/tomato-tomates-garden-vegetable.jpg" thumbnail />
    </Col>
   <Col xs={6} md={4}>
      <Image
       width={300}
    height={200} 
    src= "https://c1.peakpx.com/wallpaper/454/298/418/vegetable-garden-varieties-of-kale-wallpaper-preview.jpg" thumbnail/>
    </Col>

    <Col xs={6} md={4}>
      <Image 
       width={300}
       height={200}
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Corn_On_The_Cobb_From_The_Garden_%28120856897%29.jpeg/1600px-Corn_On_The_Cobb_From_The_Garden_%28120856897%29.jpeg" thumbnail />
    </Col>
  </Row>
</Container> 
<br></br>
 <Button variant="success" href="/aboutus">About Us</Button>


  )
} */}

export default UserHome;