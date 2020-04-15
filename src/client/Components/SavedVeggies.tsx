import React, { useState, useEffect } from 'react';
import { Card, Container, Jumbotron, Row, Col, Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IAppProps } from '../App';
import { api, Token } from '../Services/apiServices';

const SavedVeggies: React.FC<IAppProps> = props => {

    const [apiArray, setApiArray] = useState([]);

    let fetchAPI = async () => {
        let response = await api(`/api/savedvegetables/${Token}`);
        makeCards(response)
    }

    let handleClick = async (e: React.MouseEvent<HTMLButtonElement>, vegId: number) => {
        let response = await api(`/api/savedvegetables/${vegId}`, "DELETE", {Token})
        console.log(response)
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
                            <Card.ImgOverlay className="px-0 py-0" style={{ "width": "5em" }}>
                                <Button variant="danger" className="px-1 py-1"
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(e, veggieId) }}>
                                    <small style={{ "fontSize": "0.75em" }}>X</small>
                                </Button>
                            </Card.ImgOverlay>
                            <Card.Body>
                                <Card.Title>{veggieName}</Card.Title>
                                <Card.Text>
                                    {veggieSciName}
                                </Card.Text>
                            </Card.Body>

                            <Button variant="primary" as={Link} to={`/veggies/${veggieId}`}>Read More</Button>
                        </div>
                    </Card>
                </Row>

            )
        })

        setApiArray(cardMemory)
    }
    // useEffect [] same as componentDidMount()
    useEffect(() => {
        fetchAPI()
    }, [])


    return (
        <Container >

            <Jumbotron fluid>
                <Container >
                    <h1>My Garden</h1>
                </Container>
            </Jumbotron>
            {apiArray}

        </Container>
    )
}




export default SavedVeggies;