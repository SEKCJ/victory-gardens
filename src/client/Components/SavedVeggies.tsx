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
                    <Container className=" p-3 mb-5 rounded border-0 " key={veggieId}>
                        <Row className="d-flex ">
                            <Card className="mx-auto col-sm-8 px-0 p-3 mb-2 bg-primary shadow p-3 mb-5 ">
                                <div className="d-flex flex-row p-3 mb-2 bg-primary rounded">
                                    <Card.Img className="rounded border border-dark " variant="top" style={{ "width": "10em" }}
                                        src={veggieImg} />

                                    <Card.ImgOverlay className="px-0 py-0" style={{ "width": "4em" }}>
                                        <Button className="px-0 py-0 bg-primary border-primary text-center" style={{ "borderRadius": "25%" }}
                                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => { handleClick(e, veggieId, veggieName) }}>
                                            <small className="text-dark" style={{ "fontSize": "1.8em" }}>&#128465;</small>
                                        </Button>
                                    </Card.ImgOverlay>

                                    <Card.Body className="p-3 mb-2 bg-primary border-dark text-dark">
                                        <Card.Title>{veggieName}</Card.Title>
                                        <Card.Text className="text-white">
                                            {veggieSciName}
                                        </Card.Text>
                                    </Card.Body>

                                    <Button className="shadow p-3 mb-5 text-white border-dark" variant="info" as={Link} to={`/veggies/${veggieId}`}>Read More</Button>
                                </div>
                            </Card>
                        </Row>
                    </Container>

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
        <>
            <Jumbotron fluid className="shadow rounded bg-info text-center">
                <h1 className="text-dark">My Garden</h1>
                <p className="text-white">Welcome back! Have a look at all the veggies you've added to your garden.</p>
            </Jumbotron>
            <Container fluid >
                {deleting}
                {apiArray}
            </Container>
        </>
    )
}




export default SavedVeggies;