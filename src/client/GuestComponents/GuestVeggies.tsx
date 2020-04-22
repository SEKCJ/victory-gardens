
import React, { useState, useEffect } from 'react';
import {
    Card, Container, Jumbotron, Row, Col, Button, Form, Alert,
    Spinner, ProgressBar, Modal
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { IVeggieProps } from '../Services/interfaces';

const GuestVeggies: React.FC<IVeggieProps> = props => {

    const [apiArray, setApiArray] = useState<JSX.Element[]>([]);
    const [results, setResults] = useState<JSX.Element>();
    const [added, setAdded] = useState<JSX.Element>();

    const [searchVal, setSearchVal] = useState<string>("");
    const [count, setCount] = useState<number>();
    const [btnState, setBtnState] = useState<boolean>(false);
    const [adding, setAdding] = useState<boolean>(false);

    const [apiResponse, setApiResponse] = useState<any>();

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

    useEffect(() => {
        if (searchVal !== "") {
            let matchCases: any = []
            apiResponse.forEach((element: any, index: number) => {
                if (element.name.toLowerCase().startsWith(searchVal.toLowerCase())) {
                    matchCases.push(element)
                }
            })
            setCount(matchCases.length)
            setResults(
                <Row className="d-flex">
                    <p className="mx-auto col-sm-8 mb-0">Showing {matchCases.length} results for "{searchVal}"...</p>
                </Row>
            )
            makeCards(matchCases)
        } else {
            if (apiResponse) {
                setCount(apiResponse.length)
                setResults(<div></div>)
                makeCards(apiResponse)
            }
        }
    }, [searchVal])

    useEffect(() => {
        fetchAPI()

    }, [adding])

    let fetchAPI = async () => {
        let response = await api(`/api/vegetables`)

        setApiResponse(response);

        makeCards(response)
    }

    let handleClick = async (e: React.MouseEvent<HTMLButtonElement>, vegetableid: number, veggieName: string) => {
        setAdded(
            <Modal show={true} animation={true} onHide={handleClose}
                autoFocus={true} restoreFocus={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Must be Signed In to Add Vegetables!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button as={Link} to="/guestsignup" variant="primary">Create An Account!</Button>
                </Modal.Body>
            </Modal>
        )

    }


    let makeCards = (resObj: any) => {
        let cardMemory = resObj.map((element: any, index: any) => {
            let veggieImg = element.url;
            let veggieName = element.name;
            let veggieId = element.id;
            let veggieSciName = element.sci_name;

            let btnType = (
                <Button className="px-3 py-0 bg-light border-light text-success" style={{ "borderRadius": "50%" }}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => { setAdding(true); handleClick(e, veggieId, veggieName) }}>
                    <small style={{ "fontSize": "2em" }} >+</small>
                </Button>
            )


            return (
                <Container className=" p-3 mb-5 rounded border-0 " key={veggieId}>
                    <Row className="d-flex ">
                        <Card className="mx-auto col-sm-8 px-0 p-3 mb-2 bg-success shadow p-3 mb-5 ">
                            <div className="d-flex flex-row p-3 mb-2 bg-success rounded">
                                <Card.Img className="rounded border border-light " variant="top" style={{ "width": "10em" }}
                                    src={veggieImg} />

                                <Card.ImgOverlay className="px-2 py-2" style={{ "width": "4em" }}>
                                    {btnType}
                                </Card.ImgOverlay>

                                <Card.Body className="p-3 mb-2 bg-success text-light">
                                    <Card.Title>{veggieName}</Card.Title>
                                    <Card.Text className="text-white">
                                        {veggieSciName}
                                    </Card.Text>
                                </Card.Body>

                                <Button className="shadow p-3 mb-5 text-center border-white" variant="primary" as={Link} to={`/guestveggies/${veggieId}`}>Read More</Button>
                            </div>
                        </Card>
                    </Row>
                </Container>
            )
        })
        setApiArray(cardMemory);
    }


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
            <Jumbotron fluid className="shadow rounded bg-success text-light">
                <h1>Veggie Masterlist</h1>
                <p> </p>
                <p>Looks like you haven't signed in yet!<Button className="text-dark" href="/guestlogin" variant="link" type="submit">Go to login page.</Button></p>
                <p className="text-white">Don't have an account yet? Click<Button className="text-dark" href="/guestsignup" variant="link" type="submit">here</Button>to join Victory Gardens!</p>
                <Button variant="primary" type="submit" disabled>Add a veggie!</Button>
                <Form.Text className="text-dark">Must be signed in to add a veggie.</Form.Text>
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
        </React.Fragment>
    )
}




export default GuestVeggies;


