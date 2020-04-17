
import React, { useState, useEffect } from 'react';
import { Card, Container, Jumbotron, Row, Col, Button, Collapse, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { IAppProps } from '../GuestApp';


const GuestVeggies: React.FC<IAppProps> = props => {

    const [apiArray, setApiArray] = useState([]);
    const [open, setOpen] = useState(false);

    let fetchAPI = async () => {
        let response = await api(`/api/vegetables`)
        makeGuestCards(response)
    }
    let makeGuestCards = (resObj: any) => {
        let cardMemory = resObj.map((element: any, index: any) => {
            let veggieImg = element.url;
            let veggieName = element.name;
            let veggieId = element.id;
            let veggieSciName = element.sci_name

            return (
                <Row key={veggieId} className="d-flex">
                <Card className="mx-auto col-sm-8 px-0">
                    <div className="d-flex flex-row">
                        <Card.Img variant="top" style={{ "width": "10em" }}
                            src={veggieImg} />
                        <Card.Body>
                            <Card.Title>{veggieName}</Card.Title>
                            <Card.Text>
                                {veggieSciName}
                            </Card.Text>
                        </Card.Body>
                        <Button variant="primary" as={Link} to={`/veggies/${veggieId}`}>Read More</Button>
                    </div>

                    {/* <Collapse in={open}>
                    <div id={`collapse-content ${index}`}>VEGGIES</div>
                </Collapse> */}

                </Card>
            </Row>

        )
    })
    setApiArray(cardMemory)
}
// useEffect [] same as componentDidMount()
useEffect(() => {
    // Arrays start at index 0
    fetchAPI()


}, [])

return (
<>
<Container>
   <Jumbotron fluid className="rounded">
        <h1>My Veggies</h1>
        <p> </p>
        <p>Looks like you haven't signed in yet!<Button href="/guestlogin" variant="link" type="submit">Go to login page.</Button></p>
        <p className="text-muted">Don't have an account yet? Click<Button href="/guestsignup" variant="link" type="submit">here</Button>to join Victory Gardens!</p>
        <Button variant="primary" type="submit" disabled>Add a veggie!</Button>
      <Form.Text className="text-muted">Must be signed in to add a veggie.</Form.Text>
   </Jumbotron>
          {apiArray}
</Container>
</>
)
}
export default GuestVeggies;

