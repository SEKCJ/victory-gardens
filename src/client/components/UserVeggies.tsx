
import React, { useState, useEffect } from 'react';
import { Card, Container, Jumbotron, Row, Col, Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IAppProps } from '../App';

const Veggies: React.FC<IAppProps> = props => {

    const [apiArray, setApiArray] = useState([]);
    const [open, setOpen] = useState(false);

    let fetchAPI = async () => {
        let response: Response = await fetch(`/api/vegetables`)
        let resObj: any = await response.json()
        makeCards(resObj)
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
    }
    // useEffect [] same as componentDidMount()
    useEffect(() => {
        // Arrays start at index 0
        fetchAPI()


    }, [])


    return (


        <Container >

            <Jumbotron fluid>
                <Container >
                    <h1>Veggie Masterlist</h1>
                    <p>
                        Looking for something inparticular? Come choose from our masterlist of vegetables!
                        </p>
                </Container>
            </Jumbotron>
            {apiArray}

        </Container>
    )
}




export default Veggies;