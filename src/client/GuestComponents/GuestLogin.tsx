// import React, { useState, useEffect } from 'react';
// import { RouteComponentProps } from 'react-router';
// import { Form, Button } from 'react-bootstrap';
// import { api, setToken, Token } from '../services/apiServices';


// const GuestLogin: React.FC<ILoginProps> = props => {
//   const [email, setEmail] = useState<string>("test@test.com");
//   const [password, setPassword] = useState<string>('testpassword');
//   const [error, setError] = useState<boolean>(false);

//   useEffect(() => {
//     api('/auth/tokens/validate')
//       .then(result => {
//         if (result.msg === "loggedin") {
//           props.history.push('/')
//         }
//       })
//   }, [])

//   const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     let result = await api<{ token: string }>('/auth/login', "POST", { email, password });
//     if (result?.token) {
//       setToken(result.token);
//       props.history.push('/')
//     } else {
//       setError(true);
//     }
//   }

//   return (
//     <Form>
//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email"
//           value={email} onChange={e => setEmail(e.target.value)} />
//         <Form.Text className="text-muted">
//         </Form.Text>
//       </Form.Group>

//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password"
//           value={password} onChange={e => setPassword(e.target.value)} />
//       </Form.Group>
//       <Form.Group controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button href="./Components/Veggies" variant="primary" type="submit" onClick={handleLogin}>
//         Submit
//       </Button>
//       <Button href="./GuestComponents/GuestSignUp" variant="primary" type="submit">
//         Click to create account!
//       </Button>
//     </Form>
//   )
// }

// export default GuestLogin;

// export interface ILoginProps extends RouteComponentProps { }