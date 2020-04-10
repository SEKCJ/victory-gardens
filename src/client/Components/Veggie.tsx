import React, { } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button, Accordion } from 'react-bootstrap';

interface IVeggieProps extends RouteComponentProps<{ id: string }> { }
const Veggie: React.FC<IVeggieProps> = ({ match: { params: { id } } }) => {
    return (
        <div className="d-flex">

            <Card className="mx-auto" style={{ width: '40rem' }}>

                <Card.Body>
                    <Card.Link href='/veggies'>Back to List</Card.Link>
                </Card.Body>
                <Card.Title className="mx-auto"><h1>Cabbage</h1></Card.Title>

                <Card.Img className="mx-auto" variant="top" style={{ "width": '15em' }} src="https://c7.uihere.com/files/396/838/483/cabbage-vector.jpg" />


                <Card.Body className="mx-auto">
                    <Button variant="success">Add to My Garden</Button>{' '}

                    <Card.Text>
                        <h1>{id}</h1>
                    </Card.Text>
                </Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                        </Col>

                        <Col>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                            </ListGroup>  </Col></Row> </Container>


            </Card>
        </div>
    )

}

export default Veggie;
