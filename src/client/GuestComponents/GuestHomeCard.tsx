import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IAppProps } from '../GuestApp';
import { Jumbotron, Form, Button, Container, Spinner } from 'react-bootstrap';
import { api, setToken, Token } from '../services/apiServices';

const GuestHome: React.FC<ILoginProps> = props => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api('/auth/tokens/validate')
      .then(result => {
        if (result.msg === "successful") {
          props.history.push(`/${Token}`)
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
      props.history.push(`/${result.token}`)
      window.location.reload()
    } else {
      setError(true);
    }
  }

  if (loading === true) {
    return (
      <Container className="d-flex">
        <Spinner className="mx-auto my-3" animation="border" variant="warning" style={{ "width": "30em", "height": "30em" }} />
      </Container>
    )
  } else {
    return (
      <>
        <Jumbotron fluid>
          <h1>Victory Gardens</h1>
          <h4>How can YOU flatten the curve?</h4>
        </Jumbotron>

        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                value={email} onChange={(e: any) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
                value={password} onChange={(e: any) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit"
              onClick={handleLogin}>Submit</Button>
            <div>
              <Button href="/guestsignup" variant="link" type="submit">Don't have an account? Click here to create one!</Button>
            </div>
          </Form>
        </Container>
      </>
    )
  }
}

export interface ILoginProps extends RouteComponentProps { }

export default GuestHome;
