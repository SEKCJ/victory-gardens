
import React, { useState, useEffect } from 'react';
import { Card, Container, Jumbotron, Row, Col, Button, Collapse, Form, Alert, Tabs, Tab, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { IAppProps } from '../App';

const Veggies: React.FC<IAppProps> = props => {

    const [apiArray, setApiArray] = useState<JSX.Element[]>([]);
    const [results, setResults] = useState<JSX.Element>();
    const [searchVal, setSearchVal] = useState<string>("");
    const [btnState, setBtnState] = useState<boolean>(false);
    const [count, setCount] = useState<number>();
    const [added, setAdded] = useState<JSX.Element>();
    const [adding, setAdding] = useState<boolean>();


    let fetchAPI = async () => {
        if (searchVal !== "") {
            let response = await api(`/api/vegetables/name/${searchVal}`)
            findCards(response)
        } else {
            let response = await api(`/api/vegetables`)
            makeCards(response)
        }
    }
    let handleClick = async (e: React.MouseEvent<HTMLButtonElement>, vegId: number) => {
        setAdded(
            <Container className="d-flex mt-4">
                <Alert variant="warning" className="mx-auto col-sm-6 d-flex flex-column">
                    Deleting Vegetable...
                </Alert>
            </Container>
        )
        // let response = await api(`/api/savedvegetables/${vegId}`, "DELETE", { Token })
        setAdding(true)
    }

    let findCards = (resObj: any) => {
        let cardMemory = resObj.map((element: any, index: any) => {
            let veggieImg = element.url;
            let veggieName = element.name;
            let veggieId = element.id;
            let veggieSciName = element.sci_name

            return (
                <Container key={veggieId} className=" p-3 mb-5 rounded border-0 ">
                    <Row className="d-flex ">
                        <Card className="mx-auto col-sm-8 px-0 p-3 mb-2 bg-success shadow p-3 mb-5">
                            <div className="d-flex flex-row p-3 mb-2 bg-success rounded">
                                <Card.Img className="rounded border border-info " variant="top" style={{ "width": "10em" }}
                                    src={veggieImg} />
                                <Card.ImgOverlay className="px-0 py-0" style={{ "width": "5em" }}>
                                    <Button variant="info" className="px-1 py-1 bg-info"
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(e, veggieId) }}>
                                        <small style={{ "fontSize": "2em" }}>+</small>
                                    </Button>
                                </Card.ImgOverlay>
                                <Card.Body className="p-3 mb-2 bg-success text-white ">
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
        setCount(cardMemory.length)
        setResults(
            <Row className="d-flex">
                <p className="mx-auto col-sm-8 mb-0">Showing {cardMemory.length} results for "{searchVal}"...</p>
            </Row>
        )
    }

    let makeCards = (resObj: any) => {
        let cardMemory = resObj.map((element: any, index: any) => {
            let veggieImg = element.url;
            let veggieName = element.name;
            let veggieId = element.id;
            let veggieSciName = element.sci_name
            return (
                <Container className=" p-3 mb-5 rounded border-0 " key={veggieId}>
                    <Row className="d-flex ">
                        <Card className="mx-auto col-sm-8 px-0 p-3 mb-2 bg-success shadow p-3 mb-5">
                            <div className="d-flex flex-row p-3 mb-2 bg-success rounded">
                                <Card.Img className="rounded border border-info " variant="top" style={{ "width": "10em" }}
                                    src={veggieImg} />
                                <Card.ImgOverlay className="px-2 py-2" style={{ "width": "5em" }}>
                                    <Button variant="info" className="px-3 py-0" style={{"borderRadius" : "50%"}}
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(e, veggieId) }}>
                                        <small style={{ "fontSize": "2em" }}>+</small>
                                    </Button>
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
    // useEffect [] same as componentDidMount()
    useEffect(() => {
        // Arrays start at index 0
        fetchAPI()

    }, [searchVal])

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
    )
}




export default Veggies;