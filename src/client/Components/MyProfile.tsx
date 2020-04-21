
import React, { useState, useEffect } from 'react';
import { IAppProps } from '../App';
import { Container, Row, Col, Card, Image, Button, Modal, ListGroup} from 'react-bootstrap';
import { FaInfoCircle, FaPen } from 'react-icons/fa';
import { api, Token } from '../Services/apiServices';


const Profile: React.FC<IAppProps> = props => {

    const [apiResponse, setApiResponse] = useState<any>({});
    const [avatarsResponse, setAvatarsResponse] = useState<any>([]);
    const [avatarRows, setAvatarRows] = useState<JSX.Element[]>([]);
    const [avatarId, setAvatarId] = useState<number>();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetchAPI();
    }, [])

    let fetchAPI = async () => {
        let [response]: any = await api(`/api/avatar/myavatar/${Token}`)
        response.url = "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        let avatars = ["https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://i.kym-cdn.com/entries/icons/facebook/000/032/280/meme1.jpg",
            "https://www.petguide.com/wp-content/uploads/2015/02/chug.jpg"]
        setApiResponse(response);
        setAvatarsResponse(avatars)
        makeModalRows(avatars)
    }

    let handleClick = (index: number, element: string, array: string[]) => {
        let savedArray = [...array];
        let avatarOptions = savedArray.map((element: string, index: number, array: string[]) => {
            return (
                <Col sm="3" key={index}>
                    <div style={{
                        "backgroundImage": `url("${element}")`, "backgroundSize": "cover",
                        "borderRadius": "50%", "width": "100%", "paddingTop": "100%",
                        "backgroundPosition": "center"
                    }} className="avatars" onClick={() => handleClick(index, element, array)}>
                    </div>
                </Col>
            )
        })
        avatarOptions[index] = (
            <Col sm="3" key={index}>
                <div style={{
                    "backgroundImage": `url("${element}")`, "backgroundSize": "cover",
                    "borderRadius": "50%", "width": "100%", "paddingTop": "100%",
                    "backgroundPosition": "center"
                }} className="avatarselect" onClick={() => handleClick(index, element, array)}>
                </div>
            </Col>
        )
        setAvatarRows(avatarOptions)
    }

    let makeModalRows = async (avatars: string[]) => {
        let avatarOptions = avatars.map((element: string, index: number, array: string[]) => {
            return (
                <Col sm="3" key={index}>
                    <div style={{
                        "backgroundImage": `url("${element}")`, "backgroundSize": "cover",
                        "borderRadius": "50%", "width": "100%", "paddingTop": "100%",
                        "backgroundPosition": "center"
                    }} className="avatars" onClick={() => handleClick(index, element, array)}>
                    </div>
                </Col>
            )
        })
        setAvatarRows(avatarOptions)
    }

    return (
        <React.Fragment>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pick a New Avatar!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        {avatarRows.slice(0, 4)}
                    </Row>
                </Modal.Body>
                <Modal.Footer className="py-0">
                    <Button variant="info" className="mx-auto my-0" size="lg" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card.Header>
                <Card.Title className="my-auto">Profile</Card.Title>
            </Card.Header>
            <Card.Body className="mx-3">
                <Row className="mb-3">
                    <Col sm="3">
                        <div style={{
                            "backgroundImage": `url("${apiResponse.url}")`, "backgroundSize": "cover",
                            "borderRadius": "50%", "width": "100%", "paddingTop": "100%",
                            "backgroundPosition": "center"
                        }}>
                            <Button variant="dark" style={{
                                "position": "absolute",
                                "top": "0em", "right": "10%"
                            }} onClick={handleShow}>
                                <FaPen />
                            </Button>
                        </div>
                    </Col>
                    <Col sm="9">
                        <Card>
                            <Card.Header>
                                <Card.Title className="my-auto">{apiResponse.firstname} {apiResponse.lastname}</Card.Title>
                            </Card.Header>
                        </Card>
                    </Col>
                </Row>
                <Card>
                    <Card.Header className="bg-info text-light px-2 py-2">
                        <Card.Title className="my-auto"><FaInfoCircle className="mr-2" /> About</Card.Title>
                    </Card.Header>
                    <Card.Body className="px-0 pb-0">
                        <ListGroup>
                            <ListGroup.Item>
                                <h6>User Name</h6>
                                <h5>{apiResponse.username}</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h6>Email</h6>
                                <h5>{apiResponse.email}</h5>
                            </ListGroup.Item>
                            
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Card.Body>
        </React.Fragment>
    );
}

export default Profile;

