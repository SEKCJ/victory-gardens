import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button, Jumbotron, Form, Spinner } from 'react-bootstrap';
import { IVeggieState, IResObj } from '../services/interfaces';

interface IVeggieProps extends RouteComponentProps<{ id: string }> { }
const GSingleVeg: React.FC<IVeggieProps> = (props) => {
    const [vgObj, setVgObj] = useState<any>()

    const [pageState, setPageState] = useState<boolean>(true);

    let vegetableid = props.match.params.id;

    useEffect(() => {
        fetchAPI();
    }, []);
    let fetchAPI = async () => {
        let [response]: any = await api(`/api/vegetables/${vegetableid}`);
        makeVeggie(response);
    }

    let makeVeggie = (resObj: any) => {
    
        setVgObj(
            {
                vgId: resObj.id,
                vgName: resObj.name,
                vgSciName: resObj.sci_name,
                vgImg: resObj.url
            }
        )
        setPageState(false);
    }

    if (pageState === true) {
        return (
            <Container className="d-flex">
                <div className="mx-auto d-flex" style={{ "height": "85vh" }}>
                    <Spinner className="my-auto" animation="grow" variant="dark"
                        style={{ "height": "15vh", "width": "15vh" }} />
                    <h1 className="my-auto text-dark" style={{ "fontSize": "15vh" }}>Loading...</h1>
                    <Spinner className="my-auto" animation="grow" variant="dark"
                        style={{ "height": "15vh", "width": "15vh" }} />
                </div>
            </Container>
        )
    } else {

        return (
            <Container>
                <Jumbotron fluid>
                    <h1></h1>
                    <p>Must sign in to view details.<Button href="/guestlogin" variant="link" type="submit">Go to login page.</Button></p>
                    <p className="text-muted">Don't have an account yet? Click<Button href="/guestsignup" variant="link" type="submit">here</Button>to join Victory Gardens!</p>
                </Jumbotron>
                <div className="d-flex">
                    <Card className="mx-auto my-4 bg-secondary shadow-lg p-3 mb-5 border- mb-3 text-info" style={{ width: '50rem' }}>
                        <div className="shadow-lg rounded-pill text-white text-center bg-info">

                        <Card.Body>
                            <Card.Link href='/veggies'>Back to List</Card.Link>
                        </Card.Body>
                        <Card.Title className="mx-auto">
                                <br></br>
                                <h1>{vgObj.vgName}</h1>
                                <p>{vgObj.vgSciName}</p>
                            </Card.Title>
                            </div>
                        <Card.Img className="mx-auto" variant="top" style={{ "width": '15em' }} src={vgObj.vgImg} />


                        <Card.Body className="mx-auto">
                            <Button variant="primary" type="submit" disabled>Add to My Garden!</Button>
                            <Form.Text className="text-muted">Must be signed in to add a veggie.</Form.Text>


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
}
export default GSingleVeg;