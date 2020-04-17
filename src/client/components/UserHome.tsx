import React, { } from 'react';
import { IAppProps } from '../App';
import { Jumbotron, Button, Container, Row, Col, Image, Carousel } from 'react-bootstrap';


const UserHome: React.FC<IAppProps> = props => { 
  return(
    <Container className="justify-content-center">
    <Jumbotron fluid className="shadow p-3 mb-5 rounded">
    <main className="container my-5">
      <h1 className="text-light">Welcome to Victory Gardens</h1><p className="text-light">How will YOU flatten the curve?</p>
      <div className="video">  <h3 className="text-primary"></h3>
        {/* <iframe src="https://archive.org/embed/Kitchencaravan-TheVictoryGardenGrowsAgain209-2" width="640" height="480" frameBorder="0" allowFullScreen></iframe> */}
        {/* // webkitallowfullscreen="true"
        // mozallowfullscreen="true"  */}
    </div> 
    {/* <p className="text-muted">Don't have an account yet? Click<Button href="/guestsignup" variant="link" type="submit">here</Button>to join Victory Gardens!</p>  */}
    </main>
  </Jumbotron>
  <div className="justify-content">  
  <Carousel className="rounded">
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