import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { Card, ListGroup, Row, Col, Button, Accordion } from 'react-bootstrap';

interface IVeggieProps extends RouteComponentProps<{ id: string }> { }
const Veggie: React.FC<IVeggieProps> = ({ match: { params: { id } } }) => {
    const [Veggie, setVeggie] = useState<any>()

    let fetchAPI = async () => {
        let [response] = await api(`/api/vegetables/${id}`)
        makeVeggie(response);
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


                <Card className="mx-auto" style={{ width: '40rem' }}>

                    <Card.Body>
                        <Card.Link href='/veggies'>Back to List</Card.Link>
                    </Card.Body>

                    <Card.Title className="mx-auto">
                        <h1>{vgName}</h1>
                        <p>{vgSciName}</p>
                    </Card.Title>

                    <Card.Img className="mx-auto" variant="top" style={{ "width": '15em' }} src={vgImg} />


                    <Card.Body className="mx-auto">
                        <Button variant="success">Add to My Garden</Button>{' '}


                    </Card.Body>

                    <Row><Col>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Soil
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body> <ListGroup className="list-group-flush">
                                        {vgSoil}

                                    </ListGroup> </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Position
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{vgPosition}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Frost Tolerance
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{vgFt}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Feeding
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body> <ListGroup className="list-group-flush">
                                        {vgFeeding}

                                    </ListGroup> </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            
                        </Accordion> 
                        {/* </Row> */}
                        </Col>


                    {/* <Row> */}
                        <Col>
                        <Accordion>
                          
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Companions
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{vgCompanions}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Bad Companions
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{vgBadCompanions}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Spacing
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body> <ListGroup className="list-group-flush">
                                        {vgSpacing}

                                    </ListGroup> </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Sow and Plant
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{vgSandP}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion> </Col>

                        <Col>
                        <Accordion>
                            
                           
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Planting Months
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{vgPm}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Harvesting Months
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body> <ListGroup className="list-group-flush">
                                        {vgHm}

                                    </ListGroup> </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Notes
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>{vgNotes}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Harvesting
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body> <ListGroup className="list-group-flush">
                                        {vgHarvest}

                                    </ListGroup> </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Troubleshooting
      </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
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
    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <React.Fragment>
            {Veggie}
        </React.Fragment>
    )

}
export default Veggie;
