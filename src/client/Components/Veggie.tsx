import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { api, Token } from '../Services/apiServices';
import { Card, ListGroup, Row, Col, Button, Accordion, Container, Spinner } from 'react-bootstrap';

interface IVeggieProps extends RouteComponentProps { }

const Veggie: React.FC<IVeggieProps> = (props: any) => {
    const [Veggie, setVeggie] = useState<JSX.Element>();
    const [btnState, setBtnState] = useState<boolean>(true);
    const [added, setAdded] = useState<boolean>(false);
    const [pageState, setPageState] = useState<boolean>(true);

    let vegetableid = props.match.params.id;

    useEffect(() => {
        vgCheck()
        fetchAPI()
    }, [btnState]);

    let vgCheck = async () => {
        let check = await api('/api/savedvegetables/vegetableCheck', "POST", { Token, vegetableid });
        if (check) {
            setBtnState(true)
        } else {
            setBtnState(false)
        }
    }

    let fetchAPI = async () => {
        let [response] = await api(`/api/vegetables/${vegetableid}`)
        makeVeggie(response);
        setPageState(false);
    }

    let handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setBtnState(true);
        setAdded(true);
        let response = await api('/api/savedvegetables', "POST", { Token, vegetableid })
        if (response) {
            props.history.push("/savedveggies")
        } else {
            setAdded(false);
        }
    }

    let makeVeggie = (resObj: any) => {
        let vgId = resObj.id;
        let vgName = resObj.name;
        let vgSciName = resObj.sci_name;
        let vgSoil = resObj.soil;
        let vgPosition = resObj.position;
        let vgFt = resObj.frost_tolerant;
        let vgFeeding = resObj.feeding;
        let vgCompanions = resObj.companions;
        let vgBadCompanions = resObj.bad_companions;
        let vgSpacing = resObj.spacing;
        let vgSandP = resObj.sow_and_plant;
        let vgPm = resObj.planting_months;
        let vgHm = resObj.harvest_months;
        let vgNotes = resObj.notes;
        let vgHarvest = resObj.harvesting;
        let vgTs = resObj.troubleshooting;
        let vgImg = resObj.url;

        setVeggie(
            <div className="d-flex">
                <Card className="mx-auto my-4" style={{ width: '40rem' }}>

                    <Card.Body className="d-flex">
                        <Card.Link as={Link} to="/veggies" className="mx-auto btn btn-secondary col-sm-8"><h5 className="my-auto">Back to List</h5></Card.Link>
                    </Card.Body>

                    <Card.Title className="mx-auto">
                        <h1>{vgName}</h1>
                        <p>{vgSciName}</p>
                    </Card.Title>

                    <Card.Img className="mx-auto" variant="top" style={{ "width": '15em' }} src={vgImg} />

                    <Card.Body className="mx-auto">
                        <Button variant="success" disabled={btnState}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}>Add to My Garden</Button>
                    </Card.Body>

                    <Row>
                        <Col>
                            <Accordion>
                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="0">
                                            Soil
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <ListGroup className="list-group-flush">
                                                {vgSoil}
                                            </ListGroup>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="1">
                                            Position
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>{vgPosition}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="2">
                                            Frost Tolerance
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>{vgFt}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="3">
                                            Feeding
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body> <ListGroup className="list-group-flush">
                                            {vgFeeding}

                                        </ListGroup> </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                            </Accordion>
                        </Col>

                        <Col>
                            <Accordion>

                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="4">
                                            Companions
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>{vgCompanions}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="5">
                                            Bad Companions
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>{vgBadCompanions}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="6">
                                            Spacing
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body> <ListGroup className="list-group-flush">
                                            {vgSpacing}

                                        </ListGroup> </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="7">
                                            Sow and Plant
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="7">
                                        <Card.Body>{vgSandP}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="8">
                                            Planting Months
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="8">
                                        <Card.Body>{vgPm}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>

                        <Col>
                            <Accordion>


                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="9">
                                            Harvesting Months
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="9">
                                        <Card.Body> <ListGroup className="list-group-flush">
                                            {vgHm}

                                        </ListGroup> </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="10">
                                            Notes
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="10">
                                        <Card.Body>{vgNotes}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="11">
                                            Harvesting
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="11">
                                        <Card.Body> <ListGroup className="list-group-flush">
                                            {vgHarvest}

                                        </ListGroup> </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header className="bg-info d-flex">
                                        <Accordion.Toggle as={Button} variant="link"
                                            className="mx-auto text-light" eventKey="12">
                                            Troubleshooting
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="12">
                                        <Card.Body> <ListGroup className="list-group-flush">
                                            {vgTs}

                                        </ListGroup> </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                            </Accordion> </Col>

                    </Row>




                    {/* 
                <Container>
                    <Row>
                        <Col>
                       
                            <ListGroup className="list-group-flush">
        <ListGroupItem><h5>SOIL:</h5> {vgSoil}</ListGroupItem>
        <ListGroupItem><h5>POSITION:</h5> {vgPosition}</ListGroupItem>
        <ListGroupItem><h5>FROST TOLERANCE:</h5> {vgFt}</ListGroupItem>
        <ListGroupItem><h5>FEEDING:</h5> {vgFeeding}</ListGroupItem>
        <ListGroupItem><h5>COMPANIONS:</h5> {vgCompanions}</ListGroupItem>
        <ListGroupItem><h5>BAD COMPANIONS:</h5> {vgBadCompanions}</ListGroupItem>
        <ListGroupItem><h5>SPACING:</h5> {vgSpacing}</ListGroupItem>
                            </ListGroup> 
                        </Col>

                        <Col>
                            <ListGroup className="list-group-flush"> 
        <ListGroupItem><h5>SOW AND PLANT:</h5> {vgSandP}</ListGroupItem>
        <ListGroupItem><h5>PLANTING MONTHS:</h5> {vgPm}</ListGroupItem>
        <ListGroupItem><h5>HARVESTING MONTHS:</h5> {vgHm}</ListGroupItem>
        <ListGroupItem><h5>NOTES:</h5> {vgNotes}</ListGroupItem>
        <ListGroupItem><h5>HARVEST:</h5> {vgHarvest}</ListGroupItem>
        <ListGroupItem><h5>TROUBLESHOOTING:</h5> {vgTs}</ListGroupItem>
                                
                            </ListGroup>  </Col></Row> </Container> */}


                </Card>
            </div>
        )
    }

    if (added === true) {
        return (
            <Container className="d-flex">
                <div className="mx-auto d-flex" style={{ "height": "85vh" }}>
                    <Spinner className="my-auto" animation="grow" variant="warning"
                        style={{ "height": "15vh", "width": "15vh" }} />
                    <h1 className="my-auto text-warning" style={{ "fontSize": "15vh" }}>Adding...</h1>
                    <Spinner className="my-auto" animation="grow" variant="warning"
                        style={{ "height": "15vh", "width": "15vh" }} />
                </div>

            </Container>
        )
    } else if (pageState === true) {
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
            <React.Fragment>
                {Veggie}
            </React.Fragment>
        )
    }

}
export default Veggie;
