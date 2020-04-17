
import React, { useState, useEffect } from 'react';
import {
    Card, Container, Jumbotron, Row, Col, Button, Form, Alert,
    Popover, OverlayTrigger, Spinner
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api, Token } from '../Services/apiServices';
import { IAppProps } from '../App';
import { IVeggieProps } from '../Services/interfaces';

const Veggies: React.FC<IVeggieProps> = props => {

    const [apiArray, setApiArray] = useState<JSX.Element[]>([]);
    const [results, setResults] = useState<JSX.Element>();
    const [searchVal, setSearchVal] = useState<string>("");
    const [btnState, setBtnState] = useState<boolean>(false);
    const [count, setCount] = useState<number>();
    const [added, setAdded] = useState<JSX.Element>();
    const [adding, setAdding] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>();


    let fetchAPI = async () => {
        if (searchVal !== "") {
            let response = await api(`/api/vegetables/name/${searchVal}`)
            findCards(response)
        } else {
            let response = await api(`/api/vegetables`)
            setApiArray([
                <Row className="d-flex">
                    <Col sm="6" className="mx-auto">
                        
                    </Col>
                </Row>
            ])
            // makeCards(response)
        }
    }

    let handleClick = async (e: React.MouseEvent<HTMLButtonElement>, vegetableid: number) => {
        setAdding(true);
        let response = await api('/api/savedvegetables', "POST", { Token, vegetableid })
        // if (response) {

        // } else {
        setAdding(false);
        // }
    }

    let findCards = async (resObj: any) => {
        let savedVegs: any = await vgCheck();
        let cardMemory = resObj.map((element: any, index: any) => {
            let veggieImg = element.url;
            let veggieName = element.name;
            let veggieId = element.id;
            let veggieSciName = element.sci_name
            let btnType: JSX.Element = (<div></div>);
            if (savedVegs[veggieId]) {
                btnType = (
                    <Button variant="success" className="px-3 py-1 border border-dark" style={{ "borderRadius": "50%" }}>
                        <small style={{ "fontSize": "1.8em" }}>&#10003;</small>
                    </Button>
                )
            } else {
                btnType = (
                    <Button variant="info" className="px-3 py-0" style={{ "borderRadius": "50%" }}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(e, veggieId) }}>
                        <small style={{ "fontSize": "2em" }}>+</small>
                    </Button>
                )
            }

            return (
                <Container className=" p-3 mb-5 rounded border-0 " key={veggieId}>
                    <Row className="d-flex">
                        <Card className="mx-auto col-sm-8 px-0 p-3 mb-2 bg-success shadow p-3">
                            <div className="d-flex flex-row p-3 mb-2 bg-success rounded">
                                <Card.Img className="rounded border border-info " variant="top" style={{ "width": "10em" }}
                                    src={veggieImg} />
                                <Card.ImgOverlay className="px-2 py-2" style={{ "width": "5em" }}>
                                    {/* <Button variant="info" className="px-3 py-0" style={{ "borderRadius": "50%" }}
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(e, veggieId) }}>
                                        <small style={{ "fontSize": "2em" }}>+</small>
                                    </Button> */}
                                    {btnType}
                                </Card.ImgOverlay>
                                <Card.Body className="p-3 mb-2 bg-success text-white">
                                    <Card.Title>{veggieName}</Card.Title>
                                    <Card.Text>
                                        {veggieSciName}
                                    </Card.Text>
                                </Card.Body>

                                <Button className="shadow p-3 mb-5" variant="primary" as={Link} to={`/veggies/${veggieId}`}>Read More</Button>
                            </div>
                        </Card>
                    </Row>
                </Container>
            )
        })
        setApiArray(cardMemory)
        setCount(cardMemory.length)
        setResults(
            <Row className="d-flex">
                <p className="mx-auto col-sm-8 mb-0">Showing {cardMemory.length} results for "{searchVal}"...</p>
            </Row>
        )
    }

    let vgCheck = async () => {
        let check = await api(`/api/savedvegetables/${Token}`);
        let savedVegs: any = {};
        check.forEach((element: any) => {
            savedVegs[element.id] = true;
        })
        return savedVegs
    }

    let makeCards = async (resObj: any) => {
        let savedVegs: any = await vgCheck()
        let cardMemory = resObj.map((element: any, index: any) => {
            let veggieImg = element.url;
            let veggieName = element.name;
            let veggieId = element.id;
            let veggieSciName = element.sci_name;
            let btnType: JSX.Element = (<div></div>);
            if (savedVegs[veggieId]) {
                btnType = (
                    <Button variant="success" className="px-3 py-1 border border-dark" style={{ "borderRadius": "50%" }}>
                        <small style={{ "fontSize": "1.8em" }}>&#10003;</small>
                    </Button>
                )
            } else {
                btnType = (
                    <Button variant="info" className="px-3 py-0" style={{ "borderRadius": "50%" }}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(e, veggieId) }}>
                        <small style={{ "fontSize": "2em" }}>+</small>
                    </Button>
                )
            }

            // console.log(savedVegs[veggieId])
            return (
                <Container className=" p-3 mb-5 rounded border-0 " key={veggieId}>
                    <Row className="d-flex">
                        <Card className="mx-auto col-sm-8 px-0 p-3 mb-2 bg-success shadow p-3">
                            <div className="d-flex flex-row p-3 mb-2 bg-success rounded">
                                <Card.Img className="rounded border border-info " variant="top" style={{ "width": "10em" }}
                                    src={veggieImg} />
                                <Card.ImgOverlay className="px-2 py-2" style={{ "width": "5em" }}>
                                    {/* <Button variant="info" className="px-3 py-0" style={{ "borderRadius": "50%" }}
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(e, veggieId) }}>
                                        <small style={{ "fontSize": "2em" }}>+</small>
                                    </Button> */}
                                    {btnType}
                                </Card.ImgOverlay>
                                <Card.Body className="p-3 mb-2 bg-success text-white">
                                    <Card.Title>{veggieName}</Card.Title>
                                    <Card.Text>
                                        {veggieSciName}
                                    </Card.Text>
                                </Card.Body>

                                <Button className="shadow p-3 mb-5" variant="primary" as={Link} to={`/veggies/${veggieId}`}>Read More</Button>
                            </div>

                            {/* <Collapse in={open}>
                            <div id={`collapse-content ${index}`}>VEGGIES</div>
                        </Collapse> */}
                        </Card>
                    </Row>
                </Container>
            )
        })
        setApiArray(cardMemory)
        setResults(<div></div>)
    }

    useEffect(() => {
        // Arrays start at index 0
        fetchAPI()

    }, [searchVal, adding])

    useEffect(() => {
        if (count === 0) {
            setApiArray([(
                <Container className="d-flex mt-4" key="0">
                    <Alert variant="warning" className="mx-auto col-sm-6 d-flex flex-column">
                        Nothing was found for "{searchVal}"
                    </Alert>
                </Container>
            )])
            setBtnState(false);
        }
    }, [btnState])

    return (

        <React.Fragment>
            {added}
            <Container>

                <Jumbotron fluid className="shadow rounded">
                    <Container >
                        <h1>Veggie Masterlist</h1>
                        <p>
                            Looking for something inparticular? Come choose from our masterlist of vegetables!
                        </p>
                    </Container>
                </Jumbotron>
                <Form className="d-flex">
                    <Form.Group controlId="search-bar" className="mx-auto d-flex col-sm-8">
                        <Form.Control className="mr-4" type="text" placeholder="Search..." value={searchVal}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchVal(e.target.value)} />
                        <Button variant="success" className="my-auto"
                            onClick={() => setBtnState(true)}>Search</Button>
                    </Form.Group>
                </Form>
                {results}
                {apiArray}

            </Container>

        </React.Fragment>
    )
}




export default Veggies;