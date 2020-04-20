
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
        setVegContent(
            <React.Fragment>
                <br></br>
                <Row className="mx-auto">

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-info text-primary">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Pizza</Accordion.Toggle>
                                <Image src="https://freesvg.org/img/meltypizza.png" style={{ "width": "2.9em" }} />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="text-dark">
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Grow your own pizza toppings!</Card.Subtitle>
                                    {linkObj.pizza}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>


                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-primary">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Salsa Essentials</Accordion.Toggle>
                                <Image src="https://freesvg.org/img/johnny_automatic_tomato_plant.png" style={{ "width": "1.7em" }} />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                    {linkObj.salsa}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </Row>
                <br></br>
                <Row className="mx-auto">

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-primary">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Salad</Accordion.Toggle>
                                <Image src="https://storage.needpix.com/rsynced_images/salad-29440_1280.png" style={{ "width": "2.89em" }} />
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

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-primary">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Great on the Grill</Accordion.Toggle>
                                <Image src="https://cdn.pixabay.com/photo/2012/04/12/20/43/tongs-30580_960_720.png" style={{ "width": "5.81em" }} />
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
                <br></br>
                <Row className="mx-auto">

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-primary">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Beginner</Accordion.Toggle>
                                <Image src="https://freesvg.org/img/guanti--e-pinze.png" style={{ "width": "3em" }} />
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

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-primary">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Immortal</Accordion.Toggle>
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Euler%27s_infinity_sign.svg/2000px-Euler%27s_infinity_sign.svg.png" style={{ "width": "5.19em" }} />
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
                <br></br>
                <Row className="mx-auto">

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-primary">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0"> Save the Bees! </Accordion.Toggle>
                                <Image src="https://storage.needpix.com/rsynced_images/honey-bee-2881949_1280.png" style={{ "width": "3.74em" }} />
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

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-primary">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Large Harvest</Accordion.Toggle>
                                <Image src="https://storage.needpix.com/rsynced_images/spade-24434_1280.png" style={{ "width": "2.38em" }} />
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

                </Row>
                <br></br>
            </React.Fragment>
        )
        setHerbsContent(<div></div>)
    }, [])

    let fetchAPI = async () => {
        let response: any = await api('/api/helpchoose');
        makeLinks(response)
    }

    let makeLinks = (resObj: any) => {
        let pizzaLinks: JSX.Element[] = []
        let salsaLinks: JSX.Element[] = []
        let saladLinks: JSX.Element[] = []
        let grillLinks: JSX.Element[] = []
        let beginnerLinks: JSX.Element[] = []
        let immortalLinks: JSX.Element[] = []
        let beesLinks: JSX.Element[] = []
        let largeLinks: JSX.Element[] = []
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
            }
        })

        setLinkObj(
            {
                pizza: pizzaLinks,
                salsa: salsaLinks,
                salad: saladLinks,
                grill: grillLinks,
                beginner: beginnerLinks,
                immortal: immortalLinks,
                bees: beesLinks,
                harvest: largeLinks
            }
        )
    }

    let handleTabSelect = (k:any) => {
        setKey(k);
        if( k==="vegetables" ) {
            setVegContent(
                <React.Fragment>
                    <br></br>
                    <Row className="mx-auto">
                    <br></br>
                    <Col>
                    <br></br>
                        <Accordion>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="d-flex bg-primary text-dark">
                                    <Accordion.Toggle className="mr-auto text-dark text-dark" as={Button} variant="link" eventKey="0">Pizza</Accordion.Toggle>
                                    <Image src="https://freesvg.org/img/meltypizza.png" style={{ "width": "2.9em" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="text-dark">
                                        <Card.Title className="text-dark"></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Grow your own pizza toppings!</Card.Subtitle>
                                        {linkObj.pizza}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <br></br>
                        </Col>
                        <br></br>
                        <Col>
                        <br></br>
                        <Accordion>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="d-flex bg-primary text-dark">
                                    <Accordion.Toggle className="mr-auto text-dark" as={Button} variant="link" eventKey="0">Salsa Essentials</Accordion.Toggle>
                                    <Image src="https://freesvg.org/img/johnny_automatic_tomato_plant.png" style={{ "width": "1.7em" }} />
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                        {linkObj.salsa}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <br></br>
                    </Col>
                    <br></br>
                        <Col>
                        <br></br>
                        <Accordion>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="d-flex bg-primary text-dark">
                                    <Accordion.Toggle className="mr-auto text-dark" as={Button} variant="link" eventKey="0">Salad</Accordion.Toggle>
                                    <Image src="https://storage.needpix.com/rsynced_images/salad-29440_1280.png" style={{ "width": "2.89em" }} />
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
                        <br></br>
                     </Col>
                     <br></br>
                     <Col>
                     <br></br>
                        <Accordion>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="d-flex bg-primary text-dark">
                                    <Accordion.Toggle className="mr-auto text-dark" as={Button} variant="link" eventKey="0">Great on the Grill</Accordion.Toggle>
                                    <Image src="https://cdn.pixabay.com/photo/2012/04/12/20/43/tongs-30580_960_720.png" style={{ "width": "5.81em" }} />
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
                        <br></br>
                        </Col>
                        <br></br>
                        </Row>

                        <Row className="mx-auto">
                        <br></br>
                        <Col>
                        <br></br>
                        <Accordion>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="d-flex bg-primary text-dark">
                                    <Accordion.Toggle className="mr-auto text-dark" as={Button} variant="link" eventKey="0">Beginner</Accordion.Toggle>
                                    <Image src="https://freesvg.org/img/guanti--e-pinze.png" style={{ "width": "3em" }} />
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
                         <br></br>
                        </Col>
                        <br></br>
                        <Col>
                        <br></br>
                        <Accordion>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="d-flex bg-primary text-dark">
                                    <Accordion.Toggle className="mr-auto text-dark" as={Button} variant="link" eventKey="0">Immortal</Accordion.Toggle>
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Euler%27s_infinity_sign.svg/2000px-Euler%27s_infinity_sign.svg.png" style={{ "width": "5.19em" }} />
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
                        <br></br>
                        </Col>
                        <br></br>
                        <Col>
                        <br></br>
                        <Accordion>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="d-flex bg-primary text-dark">
                                    <Accordion.Toggle className="mr-auto text-dark" as={Button} variant="link" eventKey="0"> Save the Bees! </Accordion.Toggle>
                                    <Image src="https://storage.needpix.com/rsynced_images/honey-bee-2881949_1280.png" style={{ "width": "4.3em" }} />
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
                        <br></br>
                        </Col>
                        <br></br>
                        <Col>
                        <br></br>
                        <Accordion>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="d-flex bg-primary text-dark">
                                    <Accordion.Toggle className="mr-auto text-dark" as={Button} variant="link" eventKey="0">Large Harvest</Accordion.Toggle>
                                    <Image src="https://storage.needpix.com/rsynced_images/spade-24434_1280.png" style={{ "width": "2.38em" }} />
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
                        <br></br>
                        </Col>
                        <br></br>
                    </Row>
                    <br></br>
                </React.Fragment>
            )

            setHerbsContent(<div></div>)
        } else if (k === "herbs") {
            setHerbsContent(
                <React.Fragment>
                     <br></br>
                        <Row className="mx-auto">
                            <br></br>
                            <Col>
                            <br></br>
                            <Accordion>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header className="d-flex bg-secondary text-dark">
                                        <Accordion.Toggle className="mr-auto text-dark" as={Button} variant="link" eventKey="0">Pizza</Accordion.Toggle>
                                        <Image src="https://freesvg.org/img/meltypizza.png" style={{ "width": "2.9em" }} />
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
                            <br></br>
                           </Col>
                           <br></br>
                           <Col>
                           <br></br>
                            <Accordion>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header className="d-flex bg-secondary text-dark">
                                        <Accordion.Toggle className="mr-auto text-dark" as={Button} variant="link" eventKey="0">Salsa Essentials</Accordion.Toggle>
                                        <Image src="https://freesvg.org/img/johnny_automatic_tomato_plant.png" style={{ "width": "1.7em" }} />
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                            {linkObj.salsa}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <br></br>
                            </Col>
                            <br></br>
                            <Col>
                            <br></br>
                            <Accordion>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header className="d-flex bg-secondary text-dark">
                                        <Accordion.Toggle className="mr-auto text-dark" as={Button} variant="link" eventKey="0">Salad</Accordion.Toggle>
                                        <Image src="https://storage.needpix.com/rsynced_images/salad-29440_1280.png" style={{ "width": "2.89em" }} />
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
                            <br></br>
                            </Col>
                            <br></br>
                        </Row>
                        <br></br>
                </React.Fragment>
            )
            setVegContent(<div></div>)
        } 
    } 

    return (
        <>
            <Jumbotron fluid className="shadow rounded text-white bg-primary">
                <h1 className="text-dark" >'Lettuce' help you find your inner green thumb!</h1>
            </Jumbotron>

            <Container fluid className="flex-column d-flex col-sm-7 bg-info rounded">
                <Tabs id="makeCards" activeKey={key}
                    onSelect={(k: any) => handleTabSelect(k)}
                    className="d-flex bg-light text-info rounded">
                    <Tab eventKey="vegetables" className="mx-auto d-flex flex-column bg-info text-dark" title="Veggies">
                        {vegContent}
                    </Tab>

                    <Tab eventKey="herbs" className="mx-auto d-flex flex-column" title="Herbs" >
                       {herbsContent}
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}

export default HelpChoose;
