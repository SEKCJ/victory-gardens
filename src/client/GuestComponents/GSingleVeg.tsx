import React, { useState, useEffect  } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button, Accordion, Form, Jumbotron } from 'react-bootstrap';

interface IVeggieProps extends RouteComponentProps<{ id: string }> { }
const GSingleVeg: React.FC<IVeggieProps> = ({ match: { params: { id } } }) => {
    const [GSingleVeg, guestSingleVeg] = useState<any>()

    let fetchAPI = async () => {
        let [response] = await api(`/api/vegetables/${id}`)
        makeGuestVeggie(response);
    }
    let makeGuestVeggie = (resObj: any) => {
        let vgId = resObj.id;
        let vgName = resObj.name;
        let vgSciName = resObj.sci_name;
        let vgImg = resObj.url;

        guestSingleVeg(
            <Container>
                <Jumbotron fluid className="rounded" >
                    <h1></h1>
                    <p>Must sign in to view details.<Button href="/guestlogin" variant="link" type="submit">Go to login page.</Button></p>
                    <p className="text-muted">Don't have an account yet? Click<Button href="/guestsignup" variant="link" type="submit">here</Button>to join Victory Gardens!</p>
                </Jumbotron>
                <div className="d-flex">

                    <Card className="mx-auto" style={{ width: '40rem' }}>

                        <Card.Body>
                            <Card.Link href='/veggies'>Back to List</Card.Link>
                        </Card.Body>
                        <Card.Title className="mx-auto"><h1>{vgName}</h1></Card.Title>
                        <Card.Subtitle>{vgSciName}</Card.Subtitle>

                        <Card.Img className="mx-auto" variant="top" style={{ "width": '15em' }} src={vgImg} />

                        <Card.Body className="mx-auto">
                            <Button variant="primary" type="submit" disabled>Add to My Garden!</Button>
                            <Form.Text className="text-muted">Must be signed in to add a veggie.</Form.Text>

                            <Card.Text>
                                <h1>{id}</h1>
                            </Card.Text>
                        </Card.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <ListGroup className="text-muted">
                                        <ListGroupItem>Login to view details.</ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                    </ListGroup>
                                </Col>

                                <Col>

                                    <ListGroup className="text-muted">
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                    </ListGroup>  </Col></Row> </Container>
                    </Card>
                </div>
            </Container>

        )

    }
    useEffect(() => {
        fetchAPI()
    }, [])

    return (
       <React.Fragment>
           {GSingleVeg}
       </React.Fragment>
    )

}

export default GSingleVeg;