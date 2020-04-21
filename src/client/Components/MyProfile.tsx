
import React, { useState, useEffect } from 'react';
import { IAppProps } from '../App';
import { Container, Row, Col, Card, Image, Button, Modal, ListGroup } from 'react-bootstrap';
import { FaInfoCircle, FaPen } from 'react-icons/fa';
import { api, Token } from '../Services/apiServices';


const Profile: React.FC<IAppProps> = props => {

    const [apiResponse, setApiResponse] = useState<any>({});
    const [avatarsResponse, setAvatarsResponse] = useState<any>([]);
    const [avatarRows, setAvatarRows] = useState<JSX.Element[]>([]);
    const [avatarId, setAvatarId] = useState<number>();
    const [submit, setSubmit] = useState<boolean>(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetchAPI();
    }, [submit])

    let fetchAPI = async () => {
        let [response]: any = await api(`/api/avatar/myavatar/${Token}`)
        setApiResponse(response);
        let avatars = await api('/api/avatar/')
        setAvatarsResponse(avatars)
        makeModalRows(avatars)
    }

    let handleClick = (index: number, element: any, array: string[]) => {
        let savedArray = [...array];
        let avatarOptions = savedArray.map((element: any, index: number, array: string[]) => {
            return (
                <Col sm="3" key={index}>
                    <div style={{ "backgroundImage": `url("${element.url}")`, "backgroundColor": "#FAF8D9" }}
                        className="avatars" onClick={() => handleClick(index, element, array)}>
                    </div>
                </Col>
            )
        })
        avatarOptions[index] = (
            <Col sm="3" key={index}>
                <div style={{ "backgroundImage": `url("${element.url}")`, "backgroundColor": "#FAF8D9" }}
                    className="avatarselect" onClick={() => handleClick(index, element, array)}>
                </div>
            </Col>
        )
        let rows: any = [];
        let tempArr: any = [];
        avatarOptions.forEach((column: any, index: number) => {
            if ((index + 1) % 4 !== 0) {
                tempArr.push(column)
            } else {
                tempArr.push(column)
                rows.push(
                    <Row key={index} className="mb-2">
                        {tempArr}
                    </Row>
                )
                tempArr = [];
            }
        })
        setAvatarRows(rows)
        setAvatarId(element.id);
    }

    let makeModalRows = async (avatars: string[]) => {
        let avatarOptions = avatars.map((element: any, index: number, array: string[]) => {
            return (
                <Col sm="3" key={element.url}>
                    <div style={{ "backgroundImage": `url("${element.url}")`, "backgroundColor": "#FAF8D9" }}
                        className="avatars" onClick={() => handleClick(index, element, array)}>
                    </div>
                </Col>
            )
        })
        let rows: any = [];
        let tempArr: any = [];
        avatarOptions.forEach((column: any, index: number) => {
            

        })
        setAvatarRows(rows)
    }

    let handleAvatarSelect = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setSubmit(true)
        let avatarSubmit = await api('/api/avatar/select', "PUT", { avatarId, Token })
        if (avatarSubmit) {
            setSubmit(false);
            handleClose();
        }
    }

    return (
        <React.Fragment>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pick a New Avatar!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {avatarRows}
                </Modal.Body>
                <Modal.Footer className="py-0">
                    <Button variant="info" className="mx-auto my-0" size="lg"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleAvatarSelect(e)}>
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
                            "backgroundPosition": "center", "border": "1px solid #191A1C",
                            "backgroundColor": "#FAF8D9"
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

