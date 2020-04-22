
import React, { useState, useEffect } from 'react';
import { IAppProps } from '../App';
import { Link } from 'react-router-dom';
import { api, Token } from '../Services/apiServices';
import { Card, Container, Accordion, Button, Jumbotron, Image, Row, Col, Tabs, Tab, Fade } from 'react-bootstrap';

const HelpChoose: React.FC<IAppProps> = props => {
    const [linkObj, setLinkObj] = useState<any>({})
    const [key, setKey] = useState<string>('vegetables');
    const [vegContent, setVegContent] = useState<JSX.Element>();
    const [herbsContent, setHerbsContent] = useState<JSX.Element>();

    useEffect(() => {
        fetchAPI()
    }, [])

    let fetchAPI = async () => {
        let vegResponse: any = await api('/api/helpchoose');
        let herbResponse: any = await api('/api/chooseherbs');
        let response = [...vegResponse, ...herbResponse];
        makeLinks(response)
    }

    let makeLinks = (resObj: any) => {
        let pizzaLinks: JSX.Element[] = [];
        let salsaLinks: JSX.Element[] = [];
        let saladLinks: JSX.Element[] = [];
        let grillLinks: JSX.Element[] = [];
        let beginnerLinks: JSX.Element[] = [];
        let immortalLinks: JSX.Element[] = [];
        let beesLinks: JSX.Element[] = [];
        let largeLinks: JSX.Element[] = [];
        let teaLinks: JSX.Element[] = [];
        let aromaticLinks: JSX.Element[] = [];
        let cookingLinks: JSX.Element[] = [];
        resObj.forEach((element: any) => {
            switch (element.category) {
                case "pizza":
                    pizzaLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/veggies/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
                case "salsa":
                    salsaLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/veggies/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
                case "salad":
                    saladLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/veggies/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
                case "grill":
                    grillLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/veggies/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
                case "beginner":
                    beginnerLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/veggies/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
                case "immortal":
                    immortalLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/veggies/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
                case "bees":
                    beesLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/veggies/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
                case "largeharvest":
                    largeLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/veggies/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
                case "aromatic":
                    aromaticLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/userherbs/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
                case "cooking":
                    cookingLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/userherbs/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
                case "teatime":
                    teaLinks.push(
                        <Row key={element.id} className="d-flex">
                            <Col>
                                <Card.Link as={Link}
                                    to={`/userherbs/${element.id}`}>{element.name}</Card.Link>
                            </Col>
                        </Row>
                    );
                    break;
            }
        })

        let mountedLinks: any = {
            pizza: pizzaLinks,
            salsa: salsaLinks,
            salad: saladLinks,
            grill: grillLinks,
            beginner: beginnerLinks,
            immortal: immortalLinks,
            bees: beesLinks,
            harvest: largeLinks,
            tea: teaLinks,
            cooking: cookingLinks,
            aromatic: aromaticLinks,
        }

        setLinkObj(mountedLinks)
        handleTabSelect("vegetables", mountedLinks);
    }

    let handleTabSelect = (k: any, linkObj: any) => {
        setKey(k);
        if (k === "vegetables") {
            setVegContent(
                <Tab.Content className="my-2">
                    <Row className="mx-auto col-sm-12">
                        <Accordion className="col-sm-6">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white text-white" as={Button} variant="link" eventKey="0">Pizza</Accordion.Toggle>
                                    <Image src="https://freesvg.org/img/meltypizza.png" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Grow your own pizza toppings!</Card.Subtitle>
                                        {linkObj.pizza}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <Accordion className="col-sm-6">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Salsa Essentials</Accordion.Toggle>
                                    <Image src="https://freesvg.org/img/johnny_automatic_tomato_plant.png" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Make your own family salsa!</Card.Subtitle>
                                        {linkObj.salsa}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Row>

                    <Row className="mx-auto col-sm-12">
                        <Accordion className="col-sm-6">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Salad</Accordion.Toggle>
                                    <Image src="https://storage.needpix.com/rsynced_images/salad-29440_1280.png" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Check out these easy to grow salad greens!</Card.Subtitle>
                                        {linkObj.salad}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <Accordion className="col-sm-6">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Great on the Grill</Accordion.Toggle>
                                    <Image src="https://cdn.pixabay.com/photo/2012/04/12/20/43/tongs-30580_960_720.png" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Veggies that you can grill!</Card.Subtitle>
                                        {linkObj.grill}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Row>

                    <Row className="mx-auto col-sm-12">
                        <Accordion className="col-sm-6">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Beginner</Accordion.Toggle>
                                    <Image src="https://freesvg.org/img/guanti--e-pinze.png" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"> Start out simple with these plants for beginner level gardeners!</Card.Subtitle>
                                        {linkObj.beginner}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <Accordion className="col-sm-6">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Immortal</Accordion.Toggle>
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Euler%27s_infinity_sign.svg/2000px-Euler%27s_infinity_sign.svg.png" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">These plants keep for a month or longer after harvest!</Card.Subtitle>
                                        {linkObj.immortal}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Row>

                    <Row className="mx-auto col-sm-12">
                        <Accordion className="col-sm-6">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0"> Save the Bees! </Accordion.Toggle>
                                    <Image src="https://storage.needpix.com/rsynced_images/honey-bee-2881949_1280.png" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Have a look at these bee-friendly vegetables!</Card.Subtitle>
                                        {linkObj.bees}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <Accordion className="col-sm-6">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Large Harvest</Accordion.Toggle>
                                    <Image src="https://storage.needpix.com/rsynced_images/spade-24434_1280.png" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">These plants yield a large harvest.</Card.Subtitle>
                                        {linkObj.harvest}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Row >
                </Tab.Content>
            )
            setHerbsContent(<div></div>)
        } else if (k === "herbs") {
            setHerbsContent(
                <Tab.Content className="my-2">

                    <Row className="mx-auto col-sm-12">
                        <Accordion className="col-sm-6">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white text-white" as={Button} variant="link" eventKey="0">Tea Herbs</Accordion.Toggle>
                                    <Image src="https://image.flaticon.com/icons/svg/633/633652.svg" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Get your day started with a tea!</Card.Subtitle>
                                        {linkObj.tea}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <Accordion className="col-sm-6">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Aromatic Herbs</Accordion.Toggle>
                                    <Image src="https://storage.needpix.com/rsynced_images/flat-design-2307378_1280.png" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Relax with some fresh aromatic herbs!</Card.Subtitle>
                                        {linkObj.aromatic}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Row>
                    <Row className="d-flex">
                        <Accordion className="mx-auto col-sm-8">
                            <Card >
                                <Card.Header className="d-flex bg-success text-white" style={{ "height": "4.5em" }}>
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Cooking Herbs</Accordion.Toggle>
                                    <Image src="https://image.flaticon.com/icons/svg/2835/2835227.svg" style={{ "height": "100%" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Not sure how to spice things in the kitchen? Check out these cooking plants to add to your meals!</Card.Subtitle>
                                        {linkObj.cooking}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Row>
                </Tab.Content>
            )
            setVegContent(<div></div>)
        }
    }

    return (
        <>
            <Jumbotron fluid className="shadow rounded text-white bg-success">
                <h1 className="text-white" >'Lettuce' help you find your inner green thumb!</h1>
            </Jumbotron>

            <Container fluid className="flex-column d-flex col-sm-7 bg-success rounded">
                <Tabs id="makeCards" activeKey={key}
                    onSelect={(k: any) => handleTabSelect(k, linkObj)}
                    className="d-flex bg-light text-info rounded">
                    <Tab eventKey="vegetables" className="mx-auto d-flex flex-column bg-white text-dark" title="Veggies">

                        {vegContent}

                    </Tab>

                    <Tab eventKey="herbs" className="mx-auto d-flex flex-column bg-white" title="Herbs" >

                        {herbsContent}

                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}

export default HelpChoose;
