
import React, { useState, useEffect } from 'react';
import { Card, Container, Jumbotron, Row, Col, Button, Collapse } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { IAppProps } from '../App';

const Veggies: React.FC<IAppProps> = props => {

    const [basicArray, setBasicArray] = useState([]);
    const [open, setOpen] = useState(false);


    // useEffect [] same as componentDidMount()
    useEffect(() => {
        // Arrays start at index 0
        const infoArray = ['rachel', 'cesar', 'madelyn', 'cheyenne', 'aaron', 'josh', 'jake', 'garrett'];

        let cardArray = infoArray.map((element, index) => {
            return (
                <Row>
                    <Card>
                        <div className="d-flex flex-row mx-auto">

                            <Card.Img variant="top" style={{ "width": "10em" }}
                                src="https://c7.uihere.com/files/396/838/483/cabbage-vector.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                            </Card.Body>
                            <Button variant="primary" as={Link} to={`/veggies/${index}`}>Read More</Button>
                        </div>

                        {/* <Collapse in={open}>
                            <div id={`collapse-content ${index}`}>VEGGIES</div>
                        </Collapse> */}

                    </Card>
                </Row>
            )

        });

        setBasicArray(cardArray)

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
            
            {basicArray}

        </Container>
    )
}




export default Veggies;