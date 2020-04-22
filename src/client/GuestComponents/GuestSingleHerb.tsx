import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button, Jumbotron, Form } from 'react-bootstrap';

interface IVeggieProps extends RouteComponentProps<{ id: string }> { }
const GSingleVeg: React.FC<IVeggieProps> = ({ match: { params: { id } } }) => {
    return (
        <Container>
            <Jumbotron fluid>
                <h1></h1>
                <p>Must sign in to view details.<Button href="/guestlogin" variant="link" type="submit">Go to login page.</Button></p>
                <p className="text-muted">Don't have an account yet? Click<Button href="/guestsignup" variant="link" type="submit">here</Button>to join Victory Gardens!</p>
            </Jumbotron>
            <div className="d-flex">

                <Card className="mx-auto" style={{ width: '40rem' }}>

                    <Card.Body>
                        <Card.Link href='/herbs'>Back to List</Card.Link>
                    </Card.Body>
                    <Card.Title className="mx-auto" as="h1">Cabbage</Card.Title>

                    <Card.Img className="mx-auto" variant="top" style={{ "width": '15em' }} src="https://c7.uihere.com/files/396/838/483/cabbage-vector.jpg" />


                    <Card.Body className="mx-auto">
                        <Button variant="primary" type="submit" disabled>Add to My Garden!</Button>
                        <Form.Text className="text-muted">Must be signed in to add an herb.</Form.Text>

                        <Card.Text as="h1">
                            {id}
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
export default GSingleVeg;