
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

        let mountedLinks: any = {
            pizza: pizzaLinks,
            salsa: salsaLinks,
            salad: saladLinks,
            grill: grillLinks,
            beginner: beginnerLinks,
            immortal: immortalLinks,
            bees: beesLinks,
            harvest: largeLinks
        }

        setLinkObj(mountedLinks)
        setVegContent(
            <React.Fragment>
                <br></br>
                <Row className="mx-auto">

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-white">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Pizza</Accordion.Toggle>
                                <Image src="https://freesvg.org/img/meltypizza.png" style={{ "width": "2.9em" }} />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="text-white">
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Grow your own pizza toppings!</Card.Subtitle>
                                    {mountedLinks.pizza}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>


                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-white">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Salsa Essentials</Accordion.Toggle>
                                <Image src="https://freesvg.org/img/johnny_automatic_tomato_plant.png" style={{ "width": "1.7em" }} />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                    {mountedLinks.salsa}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </Row>
                <br></br>
                <Row className="mx-auto">

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-white">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Salad</Accordion.Toggle>
                                <Image src="https://storage.needpix.com/rsynced_images/salad-29440_1280.png" style={{ "width": "2.89em" }} />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Check out these easy to grow salad greens!</Card.Subtitle>
                                   {mountedLinks.salad}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-white">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Great on the Grill</Accordion.Toggle>
                                <Image src="https://cdn.pixabay.com/photo/2012/04/12/20/43/tongs-30580_960_720.png" style={{ "width": "5.81em" }} />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Veggies that you can grill!</Card.Subtitle>
                                    {mountedLinks.grill}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </Row>
                <br></br>
                <Row className="mx-auto">

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-white">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Beginner</Accordion.Toggle>
                                <Image src="https://freesvg.org/img/guanti--e-pinze.png" style={{ "width": "3em" }} />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> Start out simple with these plants for beginner level gardeners!</Card.Subtitle>
                                    {mountedLinks.beginner}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-white">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Immortal</Accordion.Toggle>
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Euler%27s_infinity_sign.svg/2000px-Euler%27s_infinity_sign.svg.png" style={{ "width": "5.19em" }} />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">These plants keep for a month or longer after harvest!</Card.Subtitle>
                                    {mountedLinks.immortal}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </Row>
                <br></br>
                <Row className="mx-auto">

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-white">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0"> Save the Bees! </Accordion.Toggle>
                                <Image src="https://storage.needpix.com/rsynced_images/honey-bee-2881949_1280.png" style={{ "width": "3.74em" }} />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Have a look at these bee-friendly vegetables!</Card.Subtitle>
                                    {mountedLinks.bees}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <Accordion>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className="d-flex bg-success text-white">
                                <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Large Harvest</Accordion.Toggle>
                                <Image src="https://storage.needpix.com/rsynced_images/spade-24434_1280.png" style={{ "width": "2.38em" }} />
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">These plants yield a large harvest.</Card.Subtitle>
                                    {mountedLinks.harvest}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </Row>
                <br></br>
            </React.Fragment>
        )
        setHerbsContent(<div></div>)
    }

    let handleTabSelect = (k: any) => {
        setKey(k);
        if (k === "vegetables") {
            setVegContent(
                <React.Fragment>
                    <br></br>
                    <Row className="mx-auto">
                    <br></br>
                    <Col>
                    <br></br>
                        <Accordion>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header className="d-flex bg-success text-white">
                                    <Accordion.Toggle className="mr-auto text-white text-white" as={Button} variant="link" eventKey="0">Pizza</Accordion.Toggle>
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
                                <Card.Header className="d-flex bg-success text-white">
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Salsa Essentials</Accordion.Toggle>
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
                                <Card.Header className="d-flex bg-success text-white">
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Salad</Accordion.Toggle>
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
                                <Card.Header className="d-flex bg-success text-white">
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Great on the Grill</Accordion.Toggle>
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
                                <Card.Header className="d-flex bg-success text-white">
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Beginner</Accordion.Toggle>
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
                                <Card.Header className="d-flex bg-success text-white">
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Immortal</Accordion.Toggle>
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
                                <Card.Header className="d-flex bg-success text-white">
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0"> Save the Bees! </Accordion.Toggle>
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
                                <Card.Header className="d-flex bg-success text-white">
                                    <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Large Harvest</Accordion.Toggle>
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
                                    <Card.Header className="d-flex bg-success text-white">
                                        <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Pizza</Accordion.Toggle>
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
                                    <Card.Header className="d-flex bg-success text-white">
                                        <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Salsa Essentials</Accordion.Toggle>
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
                                    <Card.Header className="d-flex bg-success text-white">
                                        <Accordion.Toggle className="mr-auto text-white" as={Button} variant="link" eventKey="0">Salad</Accordion.Toggle>
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
            <Jumbotron fluid className="shadow rounded text-white bg-success">
                <h1 className="text-white" >'Lettuce' help you find your inner green thumb!</h1>
            </Jumbotron>

            <Container fluid className="flex-column d-flex col-sm-7 bg-success rounded">
                <Tabs id="makeCards" activeKey={key}
                    onSelect={(k: any) => handleTabSelect(k)}
                    className="d-flex bg-light text-success rounded">
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






//   import React, { useState, useEffect } from 'react';
// import { Card, Container, Jumbotron, Row, Col, Button, Collapse, Form, Accordion, Image} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { api } from '../Services/apiServices';
// import { IAppProps } from '../GuestApp';

// const GuestChoose: React.FC<IAppProps> = props => {

//     const [apiArray, setApiArray] = useState([]);
//     const [open, setOpen] = useState(false);

//     let fetchAPI = async () => {
//         let response = await api(`/api/vegetables`)
//         makeGuestChoose(response)
//     }

//     let makeGuestChoose = (resObj: any) => {
//         let Memory = resObj.map((element: any, index: any) => {
//             let veggieId = element.id;
//     return (
// <Container className= "d-flex flex-column">
//   <div className="mx-auto">     
// <Row className="d-flex">

// <Accordion>
// <Card style={{ width: '18rem' }}>
//   <Card.Header className="d-flex">
//     <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Pizza</Accordion.Toggle>
//     <Image src= "https://freesvg.org/img/meltypizza.png" style={{"width":"3em"}}/>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//         <Card.Body>
//             <Card.Title></Card.Title>
//              <Card.Subtitle className="mb-2 text-muted">Grow your own pizza toppings!</Card.Subtitle>
//              <Card.Link as={Link} to={`/veggies/${veggieId}`}>Chili Pepper</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Onions</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Onions (Fall planted)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Tomato (Large)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Tomato (Small)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Spinach</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Pepper</Card.Link>
//          </Card.Body>
//     </Accordion.Collapse>
// </Card>
// </Accordion>

// <Accordion>
// <Card style={{ width: '18rem' }}>
//   <Card.Header className="d-flex">
//     <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Salsa Essentials</Accordion.Toggle>
//     <Image src= "https://freesvg.org/img/johnny_automatic_tomato_plant.png" style={{"width":"1.73em"}}/>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//         <Card.Body>
//             <Card.Title></Card.Title>
//              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
//              <Card.Link href="/guestsingleveg">Tomato (Small)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Tomato (Large)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Pepper</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Onions (Fall planted)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Chili Pepper</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Onions</Card.Link>
//          </Card.Body>
//     </Accordion.Collapse>
// </Card>
// </Accordion>

// </Row>
// <br></br>
// <Row> 

// <Accordion>
// <Card style={{ width: '18rem' }}>
//   <Card.Header className="d-flex">
//     <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Salad</Accordion.Toggle>
//     <Image src= "https://storage.needpix.com/rsynced_images/salad-29440_1280.png" style={{"width":"2.92em"}}/>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//         <Card.Body>
//             <Card.Title></Card.Title>
//              <Card.Subtitle className="mb-2 text-muted">Check out these easy to grow salad greens!</Card.Subtitle>
//              <Card.Link href="/guestsingleveg">Arugula</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Kale</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Crisphead Lettuce</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Leaf Lettuce</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Mustard</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Swiss Chard</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Miner's Lettuce</Card.Link>
//          </Card.Body>
//     </Accordion.Collapse>
// </Card>
// </Accordion>


// <Accordion>
// <Card style={{ width: '18rem' }}>
//   <Card.Header className="d-flex">
//     <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Great on the Grill</Accordion.Toggle>
//     <Image src= "https://cdn.pixabay.com/photo/2012/04/12/20/43/tongs-30580_960_720.png" style={{"width":"5.81em"}}/>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//         <Card.Body>
//             <Card.Title></Card.Title>
//              <Card.Subtitle className="mb-2 text-muted">Veggies that you can grill!</Card.Subtitle>
//              <Card.Link href="/guestsingleveg">Asparagus</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Corn</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Eggplant</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Onions</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Squash (summer)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Squash (winter)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Tomato (Large)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Onions (Fall planted)</Card.Link>
//          </Card.Body>
//     </Accordion.Collapse>
// </Card>
// </Accordion>

// </Row>
// <br></br>
// <Row>

// <Accordion>
// <Card style={{ width: '18rem' }}>
//   <Card.Header className="d-flex">
//     <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Beginner</Accordion.Toggle>
//     <Image src= "https://freesvg.org/img/guanti--e-pinze.png" style={{"width":"3em"}}/>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//         <Card.Body>
//             <Card.Title></Card.Title>
//              <Card.Subtitle className="mb-2 text-muted"> Start out simple with these plants for beginner level gardeners!</Card.Subtitle>
//              <Card.Link href="/guestsingleveg">Collards</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Pepper</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Chili Pepper</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Swiss Chard</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg"></Card.Link>
//          </Card.Body>
//     </Accordion.Collapse>
// </Card>
// </Accordion>

// <Accordion>
// <Card style={{ width: '18rem' }}>
//   <Card.Header className="d-flex">
//     <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Immortal</Accordion.Toggle>
//     <Image src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Euler%27s_infinity_sign.svg/2000px-Euler%27s_infinity_sign.svg.png" style={{"width":"5.25em"}}/>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//         <Card.Body>
//             <Card.Title></Card.Title>
//              <Card.Subtitle className="mb-2 text-muted">These plants keep for a month or longer after harvest!</Card.Subtitle>
//              <Card.Link href="/guestsingleveg">Beet</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Carrot</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Chili Pepper</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Garlic</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Onions</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Onions (Fall planted)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Potatoes (Early)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Potatoes (Maincrop)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Squash (summer)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Squash (winter)</Card.Link>
//          </Card.Body>
//     </Accordion.Collapse>
// </Card>
// </Accordion>

// </Row>
// <br></br>
// <Row>

// <Accordion>
// <Card style={{ width: '18rem' }}>
//   <Card.Header className="d-flex">
//     <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0"> Save the Bees! </Accordion.Toggle>
//     <Image src= "https://storage.needpix.com/rsynced_images/honey-bee-2881949_1280.png" style={{"width":"3.59em"}}/>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//         <Card.Body>
//             <Card.Title></Card.Title>
//              <Card.Subtitle className="mb-2 text-muted">Have a look at these bee-friendly vegetables!</Card.Subtitle>
//              <Card.Link href="/guestsingleveg">Cantaloupe</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Cucumber</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Eggplant</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Melon</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Pepper</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Pumpkin</Card.Link>
//          </Card.Body>
//     </Accordion.Collapse>
// </Card>
// </Accordion>

// <Accordion>
// <Card style={{ width: '18rem' }}>
//   <Card.Header className="d-flex">
//     <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Large Harvest</Accordion.Toggle>
//     <Image src= "https://storage.needpix.com/rsynced_images/spade-24434_1280.png" style={{"width":"2.36em"}}/>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//         <Card.Body>
//             <Card.Title></Card.Title>
//              <Card.Subtitle className="mb-2 text-muted">These plants yield a large harvest.</Card.Subtitle>
//              <Card.Link href="/guestsingleveg">Bush Snap Beans</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Beans (Dry)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Fava Beans</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Lima Beans</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Pole Beans</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Cucumber</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Okra</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Potatoes (Early)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Potatoes (Maincrop)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Tomato (Large)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Tomato (Small)</Card.Link><br></br>
//              <Card.Link href="/guestsingleveg">Zucchini</Card.Link>
//          </Card.Body>
//     </Accordion.Collapse>
// </Card>
// </Accordion>
// </Row> 
// <br></br>
// </div>
// </Container>
//     )
//  }
// )
// setApiArray(cardMemory)
// }
// // useEffect [] same as componentDidMount()
// useEffect(() => {
// // Arrays start at index 0
// fetchAPI()


// }, [])
// return (
// <Container className= "d-flex flex-column">
// <Jumbotron fluid>
//     <Container>
//     <h1>'Lettuce' help you decide what to start planting!</h1>
//     <p></p>
//     <p>Looks like you haven't signed in yet!<Button href="/guestlogin"variant="link" type="submit">Go to login page.</Button></p>
//     <p className="text-muted">Don't have an account yet? Click<Button href="/guestsignup"variant="link"type="submit">here</Button>to join Victory Gardens!</p>
//  </Container>
// </Jumbotron>
// {/* <Button variant="primary" type="submit" disabled>Add a veggie!</Button>  */}
// <Form.Text className="text-muted">Must be signed in to view veggie details.</Form.Text>
// {GuestChoose}
// </Container>
// )
// }

// export default GuestChoose;