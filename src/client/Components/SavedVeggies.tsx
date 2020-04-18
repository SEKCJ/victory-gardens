import React, { useState, useEffect } from 'react';
import {
    Card, Container, Jumbotron, Row, Col, Button,
    Collapse, Alert, Modal, ProgressBar
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IAppProps } from '../App';
import { api, Token } from '../Services/apiServices';

const SavedVeggies: React.FC<IAppProps> = props => {

    const [apiArray, setApiArray] = useState([]);
    const [deleted, setDeleted] = useState<boolean>(false);
    const [deleting, setDeleting] = useState<JSX.Element>()

    let fetchAPI = async () => {
        let response = await api(`/api/savedvegetables/${Token}`);
        makeCards(response)
        setDeleted(false)
        setDeleting(<div></div>)
    }

    let handleClick = async (e: React.MouseEvent<HTMLButtonElement>, vegId: number, veggieName: string) => {
        setDeleting(
            <Modal show={true} animation={true} size="sm"
                autoFocus={true} restoreFocus={true}>
                <Modal.Header>
                    <Modal.Title>Deleting {veggieName}...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProgressBar animated now={100} variant="danger" />
                </Modal.Body>
            </Modal>
        )
        let response = await api(`/api/savedvegetables/${vegId}`, "DELETE", { Token })
        setDeleted(true)
    }

    let makeCards = (resObj: any) => {
        if (resObj.length === 0) {
            setApiArray([(
                <Row key="0">
                    <Alert variant="warning" className="mx-auto col-sm-8 d-flex flex-column">
                        <h6 className="mx-auto">Looks like no vegetables have been added yet...</h6>
                        <p className="mx-auto mb-1">Click For{" "}
                            <Alert.Link as={Link} to="/choose">Help</Alert.Link>
                            {" "}on How To Choose!</p>
                        <p className="mx-auto mb-0">
                            Click To{" "}
                            <Alert.Link className="mx-auto" as={Link} to="/veggies">View</Alert.Link>
                            {" "}All Vegetables
                        </p>

                    </Alert>
                </Row>
            )])
        } else {
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
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(e, veggieId, veggieName) }}>
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
    }
    // useEffect [] same as componentDidMount()
    useEffect(() => {
        fetchAPI()
    }, [deleted])


    return (
        <Container >

            <Jumbotron fluid className="shadow rounded">
                <Container >
                    <h1>My Garden</h1>
                </Container>
            </Jumbotron>
            {deleting}
            {apiArray}

        </Container>
    )
}




export default SavedVeggies;