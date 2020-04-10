import React, { } from 'react';
import {IAppProps} from '../GuestApp';
import { Jumbotron, Container, Button, Form} from 'react-bootstrap';

const GuestVeggies: React.FC<IAppProps> = props => {
    return(
<>

<Jumbotron fluid>
    <Container>
    <h1>My Veggies</h1>
    <p > View what plants you're currently growing!</p>
    <p>No veggies yet! Looks like you haven't signed in yet!<Button href="/guestlogin"variant="link" type="submit">Go to login page.</Button></p>
    <p className="text-muted">Don't have an account yet? Click<Button href="/guestsignup"variant="link"type="submit">here</Button>to join Victory Gardens!</p>
 </Container>
</Jumbotron>
<Button variant="primary" type="submit" disabled>Add a veggie!</Button> 
<Form.Text className="text-muted">Must be signed in to add a veggie.</Form.Text>

</>
    )
}

export default GuestVeggies;