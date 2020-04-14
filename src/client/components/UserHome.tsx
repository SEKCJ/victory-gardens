import React, { } from 'react';
import { IAppProps } from '../App';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';


const Home: React.FC<IAppProps> = props => {
  return (
     
 <Jumbotron fluid>
        <h1>Victory Gardens</h1>
        <h4>How can YOU flatten the curve?</h4>
    
     

      <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image
       width={300}
    height={200} 
    src= "https://c1.peakpx.com/wallpaper/454/298/418/vegetable-garden-varieties-of-kale-wallpaper-preview.jpg"rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image 
       width={300}
       height={200}
       src="https://c0.wallpaperflare.com/preview/716/333/216/tomato-tomates-garden-vegetable.jpg" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image 
       width={300}
       height={200}
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Corn_On_The_Cobb_From_The_Garden_%28120856897%29.jpeg/1600px-Corn_On_The_Cobb_From_The_Garden_%28120856897%29.jpeg" rounded />
    </Col>
  </Row>
</Container> 

 <Button variant="success" href="/aboutus">About Us</Button>{''}
 </Jumbotron>

  )
}

export default Home;