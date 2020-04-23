import React, { useState, useEffect } from 'react';
import {
    Container, Row, Col, Card, Media, ListGroup,
    Accordion, Button, Spinner, Form, Modal
} from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import { api, Token } from '../Services/apiServices';
import { IoIosText, IoMdArrowBack } from 'react-icons/io';
import { FaTimesCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export interface IResponse extends RouteComponentProps<{ id: string }> { }

const Response: React.FC<IResponse> = props => {

    const [apiResponse, setApiResponse] = useState<any>();
    const [btnState, setBtnState] = useState<boolean>(false);
    const [reply, setReply] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);
    const [pageState, setPageState] = useState<boolean>(true);
    const [mode, setMode] = useState<string>("Load More Responses");
    const [replyBody, setReplyBody] = useState<string>("");
    const [userAvatar, setUserAvatar] = useState<String>("");

    const [post, setPost] = useState<JSX.Element>();
    const [responses, setResponses] = useState<JSX.Element[]>();
    const [lastResponse, setLastResponse] = useState<JSX.Element[]>();
    const [canDelete, setCanDelete] = useState<JSX.Element>();

    let postid = props.match.params.id;

    useEffect(() => {
        fetchAPI()
    }, [submit])

    let fetchAPI = async () => {
        let posts = await api(`/api/posts/${postid}`)
        makeResponse(posts);
        findAccess(posts);
    }

    let findAccess = async (posts: any) => {
        let access: any = await api('/auth/emailCheck/user', "POST", { Token })
        setUserAvatar(access.url);
        if (posts.userid === access.id) {
            setCanDelete(
                <Button variant="danger"><FaTimesCircle size="3em" onClick={handleDelete} /></Button>
            )
        }
    }

    let handleDelete = async () => {
        let deletePost = await api(`/api/posts/${postid}`, "DELETE", { Token })
        if (deletePost) {
            props.history.push('/communitygarden')
        }
    }

    let makeResponse = (posts: any) => {
        setApiResponse(posts);
        let mysqldate: any = new Date(posts.created_at);
        let currentDate: any = new Date();
        let diffTime = Math.abs(currentDate - mysqldate);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        let days = "";
        if (diffDays === 1) {
            days = `${diffDays} day ago`;
        } else {
            days = `${diffDays} days ago`
        }
        setPost(
            <React.Fragment>
                <Card.Header className="px-0">
                    <Media className="col-sm-12 px-0">
                        <Col sm="2" className="my-auto px-0 mr-3">
                            <div style={{ "backgroundImage": `url("${posts.url}")` }}
                                className="mainAvatar"></div>
                        </Col>
                        <Media.Body>
                            <h5 className="text-light">{posts.username}</h5>
                            <h4 className="text-light">{posts.title}</h4>
                            <p className="text-light">{posts.content}</p>
                            <h6 className="text-muted">{days}</h6>
                        </Media.Body>
                    </Media>
                </Card.Header>
            </React.Fragment>
        )
        let responsesArr = posts.comments;
        if (responsesArr) {
            let responses = responsesArr.map((element: any) => {
                let mysqldate: any = new Date(element.created_at);
                let currentDate: any = new Date();
                let diffTime = Math.abs(currentDate - mysqldate);
                let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                let days = "";
                if (diffDays === 1) {
                    days = `${diffDays} day ago`;
                } else {
                    days = `${diffDays} days ago`
                }
                return (
                    <ListGroup.Item key={`responses ${element.id}`} style={{ "borderRadius": "1em" }} className="mt-2">
                        <Media className="bg-light" >
                            <Col sm="2" className="my-auto px-0 mr-3">
                                <div style={{ "backgroundImage": `url("${element.url}")` }} className="mainAvatar"></div>
                            </Col>
                            <Media.Body>
                                <h6 className="text-success d-flex mb-0">{element.username} <span className="ml-auto text-muted"><p>{days}</p></span></h6>
                                <h6>{element.response}</h6>
                            </Media.Body>
                        </Media >
                    </ListGroup.Item>
                )
            })

            console.log()
            let lastResponse = responses.slice(-1);
            responses.splice(-1, 1)
            setResponses(responses)
            setLastResponse(lastResponse)
            setPageState(false);
        }
    }

    let handleClick = () => {
        if (btnState === true) {
            setMode("Load More Responses");
            setBtnState(false)
        } else {
            setMode("Show Less");
            setBtnState(true)
        }
    }

    let handleSubmit = async () => {
        if (replyBody !== "") {
            setSubmit(true)
            let submitResult = await api('/api/response', "POST", { Token, postid, replyBody })
            setReplyBody("");
            if (submitResult) {
                setSubmit(false)
                setReply(false);
            } else {
                setReply(false);
                setSubmit(false)
            }
        } 
    }

    if (pageState) {
        return (
            <Container>
                <Card className="col-sm-10 mx-auto my-4 d-flex" bg="dark">
                    <Spinner animation="border" className="mx-auto" variant="light" style={{ "width": "50%", "paddingTop": "50%" }} />
                </Card>
            </Container>
        )
    } else {
        return (
            <React.Fragment>
                <Modal onHide={() => setReply(!reply)} show={reply} autoFocus={true}
                    restoreFocus={true}>
                    <Modal.Header closeButton className="bg-dark">
                        <Media className="col-sm-10 px-0">
                            <Col sm="2" className="my-auto px-0 mr-3">
                                <div style={{ "backgroundImage": `url("${apiResponse.url}")` }}
                                    className="mainAvatar"></div>
                            </Col>
                            <Media.Body>
                                <h5 className="text-light">{apiResponse.username}</h5>
                                <h4 className="text-light">{apiResponse.title}</h4>
                                <p className="text-light">{apiResponse.content}</p>
                            </Media.Body>
                        </Media>
                    </Modal.Header>
                    <Modal.Body className="px-0 py-0">
                        <Card>
                            <Card.Body className="py-0">
                                <Form>
                                    <Media className="px-0 py-0">
                                        <Col sm="2" className="my-auto px-0 mr-3">
                                            <div style={{ "backgroundImage": `url("${userAvatar}")` }}
                                                className="mainAvatar"></div>
                                        </Col>
                                        <Media.Body>
                                            <Form.Group controlId="response">
                                                <Form.Label>What do you want to say!</Form.Label>
                                                <Form.Control type="text-area" value={replyBody}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReplyBody(e.target.value)} />
                                            </Form.Group>
                                        </Media.Body>
                                    </Media>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="py-0 d-flex">
                                <Button variant="info" className="col-sm-6 mx-auto" onClick={handleSubmit}>Let's Go!</Button>
                            </Card.Footer>
                        </Card>
                    </Modal.Body>
                </Modal>
                <Container>
                    <Card className="col-sm-10 mx-auto my-4" bg="dark">
                        {post}
                        <Card.Body className="d-flex flex-column px-0">
                            <ListGroup className="col-sm-8 mx-auto">
                                <Accordion className="d-flex flex-column">
                                    <Accordion.Toggle as={Button} variant="secondary" eventKey="0" className="mx-auto" onClick={handleClick}>
                                        {mode}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <div>
                                            {responses}
                                        </div>
                                    </Accordion.Collapse>
                                    {lastResponse}
                                </Accordion >
                            </ListGroup >
                        </Card.Body >
                        <Card.Footer className="d-flex justify-content-around">
                            <Button variant="light" onClick={() => setReply(true)}><IoIosText size="3em" /></Button>
                            <Button variant="success" as={Link} to="/communitygarden"><IoMdArrowBack size="3em" /></Button>
                            {canDelete}
                        </Card.Footer>
                    </Card>
                </Container>
            </React.Fragment>
        )
    }

}

export default Response