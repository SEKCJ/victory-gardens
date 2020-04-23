import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IAppProps } from '../GuestApp';
import { Jumbotron,  Container, Spinner, Alert, Carousel, Image, Row, Col } from 'react-bootstrap';
import { api, setToken, Token } from '../Services/apiServices';

const GuestHome: React.FC<ILoginProps> = props => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api('/auth/tokens/validate')
      .then(result => {
        if (result.msg === "successful") {
          props.history.push("/")
        }
      })
      .catch(error => {
        setLoading(false)
      })
  }, [])


  if (loading === true) {
    return (
      <Container className="d-flex">
        <Spinner className="mx-auto my-3" animation="border" variant="warning" style={{ "width": "30em", "height": "30em" }} />
      </Container>
    )
  } else {
    return (
      <>
        <Jumbotron fluid className="shadow rounded text-success bg-primary"> 
          <h1 className="text-dark">Victory Gardens</h1>
          <h4>How can YOU help flatten the curve?</h4>
          <br></br>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image
                className=""
                  width={300}
                  height={200}
                  src="https://c0.wallpaperflare.com/preview/716/333/216/tomato-tomates-garden-vegetable.jpg" thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image
                  width={300}
                  height={200}
                  src="https://c1.peakpx.com/wallpaper/454/298/418/vegetable-garden-varieties-of-kale-wallpaper-preview.jpg" thumbnail />
              </Col>

              <Col xs={6} md={4}>
                <Image
                  width={300}
                  height={200}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Corn_On_The_Cobb_From_The_Garden_%28120856897%29.jpeg/1600px-Corn_On_The_Cobb_From_The_Garden_%28120856897%29.jpeg" thumbnail />
              </Col>
            </Row>
            </Container>
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
</>
    )
  }
}

export interface ILoginProps extends RouteComponentProps { }

export default GuestHome;
