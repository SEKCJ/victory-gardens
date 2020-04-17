import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IAppProps } from '../GuestApp';
import { Jumbotron, Form, Button, Container, Spinner, Alert, Carousel, Image, Card} from 'react-bootstrap';
import { api, setToken, Token } from '../services/apiServices';

const GuestHome: React.FC<ILoginProps> = props => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<JSX.Element>();
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

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let result = await api<{ token: string }>('/auth/login', "POST", { email, password });
    if (result?.token) {
      setToken(result.token);
      props.history.push("/")
      window.location.reload()
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    if (error === true) {
      setInvalid(
        <Alert variant="danger" className="col-sm-8 mx-auto" onClose={() => setError(false)} dismissible>
          <Alert.Heading>Invalid Login</Alert.Heading>
          <p>Check your credentials and try again.</p>
        </Alert>
      )
    } else {
      setInvalid(<div></div>)
    }
  }, [error])

  if (loading === true) {
    return (
      <Container className="d-flex">
        <Spinner className="mx-auto my-3" animation="border" variant="warning" style={{ "width": "30em", "height": "30em" }} />
      </Container>
    )
  } else {
    return ( 
      <Container className="d-flex flex-column">
        <Jumbotron fluid className="rounded">
          <h1>Victory Gardens</h1>
          <h4>How can YOU flatten the curve?</h4>
          <br></br>
          <p>Login</p>
          <div className="padding: 35px">
          <Form className="flex-center">
            <Form.Group controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email"
                value={email} onChange={(e: any) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password"
                value={password} onChange={(e: any) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit"
              onClick={handleLogin}>Login</Button>
            <div>
              <Button href="/guestsignup" variant="link" type="submit">Don't have an account? Click here to create one!</Button>
            </div>
          </Form>
          </div>
          <div className="d-flex">
            {invalid}
          </div>
        </Jumbotron>

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
}

export interface ILoginProps extends RouteComponentProps { }

export default GuestHome;
