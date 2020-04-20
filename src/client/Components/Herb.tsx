import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { api, Token } from '../Services/apiServices';
import { Card, ListGroup, Row, Col, Button, Accordion, Container, Spinner, Alert } from 'react-bootstrap';
import { IVeggieProps, IVeggieState, IResObj } from '../Services/interfaces';

const Herb: React.FC<IVeggieProps> = (props: any) => {
    const [inGarden, setInGarden] = useState<JSX.Element>();
    const [btnType, setBtnType] = useState<JSX.Element>();

    const [added, setAdded] = useState<boolean>(false);
    const [deleted, setDeleted] = useState<boolean>(false);
    const [pageState, setPageState] = useState<boolean>(true);
    const [vgObj, setvgObj] = useState<IVeggieState>() 

    let herbsId = props.match.params.herbid;

    useEffect(() => {
        herbCheck();
        fetchAPI();
    }, []);

    let herbCheck = async () => {
        let check = await api('/api/savedherbs/herbCheck', "POST", { Token, herbsId });
        if (check) {

            setInGarden(
                <Container className="d-flex mt-4">
                    <Alert variant="warning" className="mx-auto col-sm-6 d-flex flex-column">
                        <p className="mb-0">Looks like this herb has already been added to your garden!</p>
                        <Alert.Link as={Link} to="/savedveggies">Click to go to your garden!</Alert.Link>
                    </Alert>
                </Container>
            )
            setBtnType(
                <Button variant="danger"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e, "delete")}>Delete From Garden</Button>
            )
        } else {
            setBtnType(
                <Button variant="success"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e, "add")}>Add to My Garden</Button>
            )

        }
    }

    let fetchAPI = async () => {
        let [response]: IResObj[] = await api(`/api/herbs/${herbsId}`)
        makeHerbs(response);
        setPageState(false);
    }

    let handleClick = async (e: React.MouseEvent<HTMLButtonElement>, method: string) => {
        if (method === "add") {
            setAdded(true);
            let response = await api('/api/savedherbs', "POST", { Token, herbsId })
            if (response) {
                props.history.push("/savedveggies")
            } else {
                setAdded(false);
            }
        } else if (method === "delete") {
            setDeleted(true);
            let response = await api(`/api/savedherbs/${herbsId}`, "DELETE", { Token })
            if (response) {
                props.history.push("/savedveggies")
            } else {
                setDeleted(false);
            }
        }
    }

    let makeHerbs = (resObj: IResObj) => {
        setvgObj(
            {
                vgId: resObj.id,
                vgName: resObj.name,
                vgSciName: resObj.sci_name,
                vgSoil: resObj.soil,
                vgPosition: resObj.position,
                vgFt: resObj.frost_tolerant,
                vgFeeding: resObj.feeding,
                vgCompanions: resObj.companions,
                vgBadCompanions: resObj.bad_companions,
                vgSpacing: resObj.spacing,
                vgSandP: resObj.sow_and_plant,
                vgPm: resObj.planting_months,
                vgHm: resObj.harvest_months,
                vgNotes: resObj.notes,
                vgHarvest: resObj.harvesting,
                vgTs: resObj.troubleshooting,
                vgImg: resObj.url
            }
        )
    }

    if (added === true) {
        return (
            <Container className="d-flex">
                <div className="mx-auto d-flex" style={{ "height": "85vh" }}>
                    <Spinner className="my-auto" animation="grow" variant="primary"
                        style={{ "height": "15vh", "width": "15vh" }} />
                    <h1 className="my-auto text-primary" style={{ "fontSize": "15vh" }}>Adding...</h1>
                    <Spinner className="my-auto" animation="grow" variant="primary"
                        style={{ "height": "15vh", "width": "15vh" }} />
                </div>
            </Container>
        )
    } else if (deleted === true) {
        return (
            <Container className="d-flex">
                <div className="mx-auto d-flex" style={{ "height": "85vh" }}>
                    <Spinner className="my-auto" animation="grow" variant="danger"
                        style={{ "height": "15vh", "width": "15vh" }} />
                    <h1 className="my-auto text-danger" style={{ "fontSize": "15vh" }}>Deleting...</h1>
                    <Spinner className="my-auto" animation="grow" variant="danger"
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
                {inGarden}
                <div className="d-flex">
                    <Card className="mx-auto my-4" style={{ width: '40rem' }}>

                        <Card.Body className="d-flex">
                            <Card.Link as={Link} to="/userherbs" className="mx-auto btn btn-secondary col-sm-8"><h5 className="my-auto">Back to List</h5></Card.Link>
                        </Card.Body>

                        <Card.Title className="mx-auto">
                            <h1>{vgObj.vgName}</h1>
                            <p>{vgObj.vgSciName}</p>
                        </Card.Title>

                        <Card.Img className="mx-auto" variant="top" style={{ "width": '15em' }} src={vgObj.vgImg} />

                        <Card.Body className="mx-auto d-flex">
                            {btnType}
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
                                                    {vgObj.vgSoil}
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
                                            <Card.Body>{vgObj.vgPosition}</Card.Body>
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
                                            <Card.Body>{vgObj.vgFt}</Card.Body>
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
                                                {vgObj.vgFeeding}

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
                                            <Card.Body>{vgObj.vgCompanions}</Card.Body>
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
                                            <Card.Body>{vgObj.vgBadCompanions}</Card.Body>
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
                                                {vgObj.vgSpacing}

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
                                            <Card.Body>{vgObj.vgSandP}</Card.Body>
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
                                            <Card.Body>{vgObj.vgPm}</Card.Body>
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
                                                {vgObj.vgHm}

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
                                            <Card.Body>{vgObj.vgNotes}</Card.Body>
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
                                                {vgObj.vgHarvest}

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
                                                {vgObj.vgTs}

                                            </ListGroup> </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                </Accordion> </Col>

                        </Row>

                    </Card>
                </div>
            </React.Fragment>
        )
    }

}
export default Herb;
