import React, { useState, useEffect } from 'react';
import { Card, Container, Jumbotron, Row, Col, Button, Collapse, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { IAppProps } from '../App';

const Herbs: React.FC<IAppProps> = props => {

    const [apiArray, setApiArray] = useState<JSX.Element[]>([]);
    const [results, setResults] = useState<JSX.Element>();
    const [searchVal, setSearchVal] = useState<string>("");
    const [btnState, setBtnState] = useState<boolean>(false);
    const [count, setCount] = useState<number>();

    let fetchAPI = async () => {
        if (searchVal !== "") {
            let response = await api(`/api/vegetables/name/${searchVal}`)
            findCards(response)
        } else {
            let response = await api(`/api/vegetables`)
            makeCards(response)
        }
    }

    let findCards = (resObj: any) => {
        let cardMemory = resObj.map((element: any, index: any) => {
            let veggieImg = element.url;
            let veggieName = element.name;
            let veggieId = element.id;
            let veggieSciName = element.sci_name

            return (
                <Row key={veggieId} className="d-flex">
                    <Card className="mx-auto col-sm-8 px-0">
                        <div className="d-flex flex-row">
                            <Card.Img variant="top" style={{ "width": "10em" }}
                                src={veggieImg} />
                            <Card.Body>
                                <Card.Title>{veggieName}</Card.Title>
                                <Card.Text>
                                    {veggieSciName}
                                </Card.Text>
                            </Card.Body>
                            <Button variant="primary" as={Link} to={`/veggies/${veggieId}`}>Read More</Button>
                        </div>

                        {/* <Collapse in={open}>
                            <div id={`collapse-content ${index}`}>VEGGIES</div>
                        </Collapse> */}

                    </Card>
                </Row>

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
                <Row key={veggieId} className="d-flex">
                    <Card className="mx-auto col-sm-8 px-0">
                        <div className="d-flex flex-row">
                            <Card.Img variant="top" style={{ "width": "10em" }}
                                src={veggieImg} />
                            <Card.Body>
                                <Card.Title>{veggieName}</Card.Title>
                                <Card.Text>
                                    {veggieSciName}
                                </Card.Text>
                            </Card.Body>
                            <Button variant="primary" as={Link} to={`/veggies/${veggieId}`}>Read More</Button>
                        </div>

                        {/* <Collapse in={open}>
                            <div id={`collapse-content ${index}`}>VEGGIES</div>
                        </Collapse> */}

                    </Card>
                </Row>

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
        <Container >

            <Jumbotron fluid>
                <Container >
                    <h1>Herb Masterlist</h1>
                    <p>
                        Looking for something inparticular? Come choose from our masterlist of herbs></p>
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




export default Herbs;