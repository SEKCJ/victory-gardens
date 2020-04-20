
import React, { useState, useEffect } from 'react';
import {
    Card, Container, Jumbotron, Row, Col, Button, Form, Alert,
    Spinner, ProgressBar, Modal
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api, Token } from '../Services/apiServices';
import { IVeggieProps } from '../Services/interfaces';

const Veggies: React.FC<IVeggieProps> = props => {

    const [apiArray, setApiArray] = useState<JSX.Element[]>([]);
    const [results, setResults] = useState<JSX.Element>();
    const [added, setAdded] = useState<JSX.Element>();

    const [searchVal, setSearchVal] = useState<string>("");
    const [count, setCount] = useState<number>();
    const [btnState, setBtnState] = useState<boolean>(false);
    const [adding, setAdding] = useState<boolean>(false);

    const handleClose = () => {
        setAdded(<div></div>)
        setAdding(false)
    };

    useEffect(() => {
        setApiArray([
            <Row className="d-flex mx-auto" key={"0"}>
                <Col sm="8" className="mx-auto d-flex justify-content-between">
                    <Spinner animation="grow" variant="dark" />
                    <h4 className="text-center">Loading...</h4>
                    <Spinner animation="grow" variant="dark" />
                </Col>
            </Row>
        ])

    }, [])

    let fetchAPI = async () => {
        if (searchVal !== "") {
            let response = await api(`/api/vegetables/name/${searchVal}`)
            findCards(response)
        } else {
            let response = await api(`/api/vegetables`)
            makeCards(response)
        }
    }

    let handleClick = async (e: React.MouseEvent<HTMLButtonElement>, vegetableid: number, veggieName: string) => {
        setAdded(
            <Modal show={true} animation={true} size="sm"
                autoFocus={true} restoreFocus={true}>
                <Modal.Header>
                    <Modal.Title>Adding {veggieName} to your garden...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProgressBar animated now={100} variant="success" />
                </Modal.Body>
            </Modal>
        )
        let response = await api('/api/savedvegetables', "POST", { Token, vegetableid })
        setAdded(
            <Modal show={true} onHide={handleClose} animation={true} keyboard={true}
                autoFocus={true} restoreFocus={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Successfully Added {veggieName} to Your Garden!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex">
                    <div className="mx-auto">
                        <Button variant="info" className="mx-2" as={Link} to={`/veggies/${vegetableid}`}>
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
        let savedVegs: any = await vgCheck();
        let cardMemory = resObj.map((element: any, index: any) => {
            let veggieImg = element.url;
            let veggieName = element.name;
            let veggieId = element.id;
            let veggieSciName = element.sci_name
            let btnType: JSX.Element = (<div></div>);
            if (savedVegs[veggieId]) {
                btnType = (
                    <Button className="px-2.5 py-0 bg-warning text-center border-dark"
                        style={{ "borderRadius": "100%"}}>
                        <small className="text-dark"style={{ "fontSize": "2em"}}>✔</small>
                    </Button>
                )
            } else {
                btnType = (
               <Button className="px-3 py-0 bg-warning text-dark border-dark" style={{ "borderRadius": "50%" }}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(e, veggieId, veggieName) }}>
                    <small className="text-dark" style={{ "fontSize": "2em" }}>+</small>
                </Button> 
                )
            }

            return (
                <Container key={veggieId} className=" p-3 mb-5 rounded border-0 ">
                    <Row className="d-flex ">
                        <Card className="mx-auto col-sm-8 px-0 p-3 mb-2 bg-info shadow p-3 mb-5 h-50">
                            <div className="d-flex flex-row p-3 mb-2 bg-info rounded">
                                <Card.Img className="rounded border border-dark " variant="top" style={{ "width": "10em" }}
                                    src={veggieImg} />
                                <Card.ImgOverlay className="px-2 py-2" style={{ "width": "4em" }}>
                                    {btnType}
                                </Card.ImgOverlay>

                                <Card.Body className="p-3 mb-2 bg-info text-white ">
                                    <Card.Title>{veggieName}</Card.Title>
                                    <Card.Text className="text-white">
                                        {veggieSciName}
                                    </Card.Text>
                                </Card.Body>

                                <Button className="shadow p-3 mb-5 text-center bg-warning text-dark border-dark" variant="primary" as={Link} to={`/veggies/${veggieId}`}>Read More</Button>
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
                    <Button className="px-2.5 py-0 bg-warning text-center border-dark"
                        style={{ "borderRadius": "100%"}}>
                        <small className="text-dark"style={{ "fontSize": "2em"}}>✔</small>
                    </Button>
                )
            } else {
                btnType = (
                    <Button className="px-3 py-0 bg-warning border-dark" style={{ "borderRadius": "100%" }}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { setAdding(true); handleClick(e, veggieId, veggieName) }}>
                        <small className="text-dark" style={{ "fontSize": "2em" }}>+</small>
                    </Button>
                )
            }

            // console.log(savedVegs[veggieId])
            return (
                <Container className=" p-3 mb-5 rounded border-0 " key={veggieId}>
                    <Row className="d-flex ">
                        <Card className="mx-auto col-sm-8 px-0 p-3 mb-2 bg-info shadow p-3 mb-5 ">
                            <div className="d-flex flex-row p-3 mb-2 bg-info rounded">
                                <Card.Img className="rounded border border-dark " variant="top" style={{ "width": "10em" }}
                                    src={veggieImg} />

                                <Card.ImgOverlay className="px-2 py-2" style={{ "width": "4em" }}>
                                    {btnType}
                                </Card.ImgOverlay>

                                <Card.Body className="p-3 mb-2 bg-info text-light">
                                    <Card.Title>{veggieName}</Card.Title>
                                    <Card.Text className="text-light">
                                        {veggieSciName}
                                    </Card.Text>
                                </Card.Body>

                                <Button className="shadow p-3 mb-5 text-center bg-warning text-dark border-dark" variant="primary" as={Link} to={`/veggies/${veggieId}`}>Read More</Button>
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
<Jumbotron fluid className="shadow rounded text-light bg-info text-center border-dark"> 
                <Container >
                    <h1 className="text-dark" >Veggie Masterlist</h1>
                    <p>
                        Looking for something inparticular? Come choose from our masterlist of vegetables! 
                        </p>
                </Container>
            </Jumbotron>
            <Container fluid>
            <Form className="d-flex">
                <Form.Group controlId="search-bar" className="mx-auto d-flex col-sm-8">
                    <Form.Control className="mr-4" type="text" placeholder="Search..." value={searchVal}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchVal(e.target.value)} />
                    <Button variant="warning" className="my-auto border-dark"
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




export default Veggies;