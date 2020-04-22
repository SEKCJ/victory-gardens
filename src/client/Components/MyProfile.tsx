
import React, { useState, useEffect } from 'react';
import { IAppProps } from '../App';
import { Container, Row, Col, Card, Image, Button, Modal, ListGroup } from 'react-bootstrap';
import { FaInfoCircle, FaPen } from 'react-icons/fa';
import { api, Token } from '../Services/apiServices';

interface IAvatars { id: number, url: string }

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

    let handleClick = (element: IAvatars, index: number, avatars: IAvatars[]) => {
        setAvatarId(element.id)

        let columns = avatars.map((element, index, array) => {
            return (
                <Col sm="3" key={element.url} >
                    <div style={{ "backgroundImage": `url("${element.url}")` }}
                        className="avatars" onClick={() => handleClick(element, index, array)}></div>
                </Col>
            )
        })

        columns[index] = (
            <Col sm="3" key={element.url} >
                <div style={{ "backgroundImage": `url("${element.url}")` }}
                    className="avatarselect" onClick={() => handleClick(element, index, avatars)}></div>
            </Col>
        )

        let rows: JSX.Element[] = []
        let tempArr: JSX.Element[] = [];
        let count = 1;
        columns.forEach((element: any, index: number) => {
            if (count !== 4) {
                tempArr.push(element)
                if ((index + 1) === columns.length) {
                    rows.push(
                        <Row key={index} className="mb-3">
                            {tempArr}
                        </Row>
                    )
                    tempArr = []
                }
                count += 1;
            } else if (count === 4) {
                tempArr.push(element);
                rows.push(
                    <Row key={index} className="mb-3">
                        {tempArr}
                    </Row>
                )
                tempArr = []
                count = 1;
            }
        })

        setAvatarRows(rows)
    }

    let makeModalRows = async (avatars: IAvatars[]) => {
        let columns = avatars.map((element, index, array) => {
            return (
                <Col sm="3" key={element.url} >
                    <div style={{ "backgroundImage": `url("${element.url}")` }}
                        className="avatars" onClick={() => handleClick(element, index, array)}></div>
                </Col>
            )
        })

        let rows: JSX.Element[] = []
        let tempArr: JSX.Element[] = [];
        let count = 1;
        columns.forEach((element: any, index: number) => {
            if (count !== 4) {
                tempArr.push(element)
                if ((index + 1) === columns.length) {
                    rows.push(
                        <Row key={index} className="mb-3">
                            {tempArr}
                        </Row>
                    )
                    tempArr = []
                }
                count += 1;
            } else if (count === 4) {
                tempArr.push(element);
                rows.push(
                    <Row key={index} className="mb-3">
                        {tempArr}
                    </Row>
                )
                tempArr = []
                count = 1;
            }
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

            <Modal show={show} onHide={handleClose} scrollable={true}
                autoFocus={true} restoreFocus={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Pick a New Avatar!</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{"maxHeight": "20em"}}>
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
                        <div style={{ "backgroundImage": `url("${apiResponse.url}")` }}
                            className="mainAvatar">
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

