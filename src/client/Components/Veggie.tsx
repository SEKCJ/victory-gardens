import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { api, Token } from '../Services/apiServices';
import { Card, ListGroup, Row, Col, Button, Accordion, Container, Spinner, Alert, Image } from 'react-bootstrap';
import { IVeggieProps, IVeggieState, IResObj } from '../Services/interfaces';

const Veggie: React.FC<IVeggieProps> = (props: any) => {
    const [inGarden, setInGarden] = useState<JSX.Element>();
    const [btnType, setBtnType] = useState<JSX.Element>();

    const [added, setAdded] = useState<boolean>(false);
    const [deleted, setDeleted] = useState<boolean>(false);
    const [pageState, setPageState] = useState<boolean>(true);
    const [vgObj, setVgObj] = useState<IVeggieState>()

    let vegetableid = props.match.params.id; 

    useEffect(() => {
        vgCheck();
        fetchAPI();
    }, []);

    let vgCheck = async () => {
        let check = await api('/api/savedvegetables/vegetableCheck', "POST", { Token, vegetableid });
        if (check) {

            setInGarden(
                <Container className="d-flex mt-4">
                    <Alert variant="warning" className="mx-auto col-sm-6 d-flex flex-column">
                        <p className="mb-0">Looks like this vegetable has already been added to your garden!</p>
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
                <Button className="btn btn-outline-dark shadow-lg border-primary mb-3 text-white bg-success rounded"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e, "add")}>Add to My Garden</Button>
            )

        }
    }

    let fetchAPI = async () => {
        let [response]: IResObj[] = await api(`/api/vegetables/${vegetableid}`)
        makeVeggie(response);
        setPageState(false);
    }

    let handleClick = async (e: React.MouseEvent<HTMLButtonElement>, method: string) => {
        if (method === "add") {
            setAdded(true);
            let response = await api('/api/savedvegetables', "POST", { Token, vegetableid })
            if (response) {
                props.history.push("/savedveggies")
            } else {
                setAdded(false);
            }
        } else if (method === "delete") {
            setDeleted(true);
            let response = await api(`/api/savedvegetables/${vegetableid}`, "DELETE", { Token })
            if (response) {
                props.history.push("/savedveggies")
            } else {
                setDeleted(false);
            }
        }
    }

    let makeVeggie = (resObj: IResObj) => {
        setVgObj(
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
                    <Card className="mx-auto my-4 bg-white shadow-lg p-3 mb-5  mb-3 text-success" style={{ width: '50rem' }}>
                        <div className="shadow-lg rounded-pill text-white text-center bg-success">
                            <Card.Title className="mx-auto">
                                <br></br>
                                <h1>{vgObj.vgName}</h1>
                                <p>{vgObj.vgSciName}</p>
                            </Card.Title>
                        </div>
                        <br></br>
                        <Image className="mx-auto border-success mb-3 rounded-pill shadow-lg" style={{ "width": '20em' }} src={vgObj.vgImg} />

                        <Card.Body className="mx-auto d-flex">
                            {btnType}
                        </Card.Body>
                        <br></br>
                        <Row>
                            <Col>
                            <br></br>
                                <Accordion >
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="0">
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
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="1">
                                                Position
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>{vgObj.vgPosition}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="2">
                                                Frost Tolerance
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>{vgObj.vgFt}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="3">
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
                                <br></br>
                            </Col>

                            <Col>
                                <Accordion>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="4">
                                                Companions
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>{vgObj.vgCompanions}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="5">
                                                Bad Companions
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>{vgObj.vgBadCompanions}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="6">
                                                Spacing
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="6">
                                            <Card.Body> <ListGroup className="list-group-flush">
                                                {vgObj.vgSpacing}

                                            </ListGroup> </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="7">
                                                Sow and Plant
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body>{vgObj.vgSandP}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="8">
                                                Planting Months
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="8">
                                            <Card.Body>{vgObj.vgPm}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                </Accordion>
                            </Col>

                            <Col>
                                <Accordion>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="9">
                                                Harvesting Months
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="9">
                                            <Card.Body> <ListGroup className="list-group-flush">
                                                {vgObj.vgHm}

                                            </ListGroup> </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="10">
                                                Notes
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="10">
                                            <Card.Body>{vgObj.vgNotes}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="11">
                                                Harvesting
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="11">
                                            <Card.Body> <ListGroup className="list-group-flush">
                                                {vgObj.vgHarvest}

                                            </ListGroup> </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                    <Card className="rounded-lg">
                                        <Card.Header className="bg-success text-white d-flex">
                                            <Accordion.Toggle as={Button} variant="link"
                                                className="mx-auto text-white" eventKey="12">
                                                Troubleshooting
                                        </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="12">
                                            <Card.Body> <ListGroup className="list-group-flush">
                                                {vgObj.vgTs}
                                            </ListGroup> </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <br></br>
                                </Accordion> 
                            </Col>
                        </Row>
                        <Row>
                            <Button className="text-success" as={Link} to="/veggies" variant="link">
                                Go Back To List
                            </Button>
                        </Row>
                    </Card>
                </div>
            </React.Fragment>
        )
    }

}
export default Veggie;
