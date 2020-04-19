
import React, { useState, useEffect } from 'react';
import {
    Card, Container, Jumbotron, Row, Col, Modal, ProgressBar,
    Button, Collapse, Form, Alert, Tabs, Tab, Image
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api, Token } from '../Services/apiServices';
import { IAppProps } from '../App';

const Herbs: React.FC<IAppProps> = props => {

    const [apiArray, setApiArray] = useState<JSX.Element[]>([]);
    const [results, setResults] = useState<JSX.Element>();
    const [added, setAdded] = useState<JSX.Element>();

    const [searchVal, setSearchVal] = useState<string>("");
    const [count, setCount] = useState<number>();
    const [btnState, setBtnState] = useState<boolean>(false);
    const [adding, setAdding] = useState<boolean>();

    const handleClose = () => {
        setAdded(<div></div>)
        setAdding(false)
    };

    let fetchAPI = async () => {
        if (searchVal !== "") {
            let response = await api(`/api/herbs/name/${searchVal}`)
            findCards(response)
        } else {
            let response = await api(`/api/herbs`)
            makeCards(response)
        }
    }

    let handleClick = async (e: React.MouseEvent<HTMLButtonElement>, herbsId: number, herbsName: string) => {
        setAdded(
            <Modal show={true} animation={true} size="sm"
                autoFocus={true} restoreFocus={true}>
                <Modal.Header>
                    <Modal.Title>Adding {herbsName} to your garden...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProgressBar animated now={100} variant="success" />
                </Modal.Body>
            </Modal>
        )
        let response = await api('/api/savedherbs', "POST", { Token, herbsId })
        setAdded(
            <Modal show={true} onHide={handleClose} animation={true} keyboard={true}
                autoFocus={true} restoreFocus={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Successfully Added to Your Garden!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex">
                    <div className="mx-auto">
                        <Button variant="info" className="mx-2" as={Link} to={`/herbs/${herbsId}`}>
                            View Details
                        </Button>
                        <Button variant="success" className="mx-2" as={Link} to="/savedveggies">
                            View In Garden
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }


    let findCards = async (resObj: any) => {
        let savedHerbs: any = await herbCheck();
        let cardMemory = resObj.map((element: any, index: any) => {
            let herbsImg = element.url;
            let herbsName = element.name;
            let herbsId = element.id;
            let herbsSciName = element.sci_name;
            let btnType: JSX.Element = (<div></div>);
            if (savedHerbs[herbsId]) {
                btnType = (
                    <Button className="px-3 py-1" variant="warning"
                        style={{ "borderRadius": "50%" }}>
                        <small className="text-light" style={{ "fontSize": "1.8em" }}>&#10003;</small>
                    </Button>
                )
            } else {
                btnType = (
                    <Button className="px-3 py-0 bg-light border-light text-success" style={{ "borderRadius": "50%" }}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { setAdding(true); handleClick(e, herbsId, herbsName) }}>
                        <small style={{ "fontSize": "2em" }}>+</small>
                    </Button>
                )
            }

            return (
                <Container key={herbsId} className=" p-3 mb-5 rounded border-0 ">
                    <Row className="d-flex ">
                        <Card className="mx-auto col-sm-8 px-0 p-3 mb-2 bg-success shadow p-3 mb-5 h-50">
                            <div className="d-flex flex-row p-3 mb-2 bg-success rounded">
                                <Card.Img className="rounded border border-light " variant="top" style={{ "width": "10em" }}
                                    src={herbsImg} />
                                <Card.ImgOverlay className="px-2 py-2" style={{ "width": "4em" }}>
                                    {btnType}
                                </Card.ImgOverlay>

                                <Card.Body className="p-3 mb-2 bg-success text-white ">
                                    <Card.Title>{herbsName}</Card.Title>
                                    <Card.Text className="text-white">
                                        {herbsSciName}
                                    </Card.Text>
                                </Card.Body>

                                <Button className="shadow p-3 mb-5 text-center" variant="primary" as={Link} to={`/veggies/${herbsId}`}>Read More</Button>
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

    let herbCheck = async () => {
        let check = await api(`/api/savedherbs/${Token}`);
        let savedHerbs: any = {};
        check.forEach((element: any) => {
            savedHerbs[element.id] = true;
        })
        return savedHerbs
    }

    let makeCards = async (resObj: any) => {
        let savedHerbs: any = await herbCheck();
        let cardMemory = resObj.map((element: any, index: any) => {
            let herbsImg = element.url;
            let herbsName = element.name;
            let herbsId = element.id;
            let herbsSciName = element.sci_name
            let btnType: JSX.Element = (<div></div>);
            if (savedHerbs[herbsId]) {
                btnType = (
                    <Button className="px-3 py-1" variant="warning"
                        style={{ "borderRadius": "50%" }}>
                        <small className="text-light" style={{ "fontSize": "1.8em" }}>&#10003;</small>
                    </Button>
                )
            } else {
                btnType = (
                    <Button className="px-3 py-0 bg-light border-light text-success" style={{ "borderRadius": "50%" }}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { setAdding(true); handleClick(e, herbsId, herbsName) }}>
                        <small style={{ "fontSize": "2em" }}>+</small>
                    </Button>
                )
            }
            return (
                <Container key={herbsId} className=" p-3 mb-5 rounded border-0 ">
                    <Row className="d-flex ">
                        <Card className="mx-auto col-sm-8 px-0 p-3 mb-2 bg-success shadow p-3 mb-5 h-50">
                            <div className="d-flex flex-row p-3 mb-2 bg-success rounded">
                                <Card.Img className="rounded border border-light " variant="top" style={{ "width": "10em" }}
                                    src={herbsImg} />
                                <Card.ImgOverlay className="px-2 py-2" style={{ "width": "4em" }}>
                                    {btnType}
                                </Card.ImgOverlay>

                                <Card.Body className="p-3 mb-2 bg-success text-white ">
                                    <Card.Title>{herbsName}</Card.Title>
                                    <Card.Text className="text-white">
                                        {herbsSciName}
                                    </Card.Text>
                                </Card.Body>

                                <Button className="shadow p-3 mb-5 text-center" variant="primary" as={Link} to={`/veggies/${herbsId}`}>Read More</Button>
                            </div>
                        </Card>
                    </Row>
                </Container>
            )
        })
        setApiArray(cardMemory)
        setResults(<div></div>)
    }
    useEffect(() => {
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
        <>
            <Jumbotron fluid className="shadow rounded text-secondary bg-success text-light">
                <Container >
                    <h1>Herb Masterlist</h1>
                    <p>
                        Looking for something inparticular? Come choose from our masterlist of Herbs!
                    </p>
                </Container>
            </Jumbotron>
            <Container fluid>
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
                {added}
            </Container>
        </>
    )
}




export default Herbs;