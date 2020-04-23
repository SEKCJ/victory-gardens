import React, { useState, useEffect } from 'react';
import {
    Form, Col, Card, Button, Jumbotron, Dropdown,
    Media, Modal, Pagination, ProgressBar
} from 'react-bootstrap';
import { FaLeaf } from 'react-icons/fa';
import { api, Token } from '../Services/apiServices';
import { Link } from 'react-router-dom';
import { IResponse } from './Response';

const CommGard: React.FC<IResponse> = (props) => {

    const [apiResponse, setApiResponse] = useState<any>();
    const [posts, setPosts] = useState<JSX.Element[]>();
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [submit, setSubmit] = useState<boolean>();
    const [error, setError] = useState<boolean>();

    useEffect(() => {
        fetchAPI()
    }, [submit])

    let fetchAPI = async () => {
        let results = await api(`/api/posts`)
        setApiResponse(results);
        makePosts(results)
    }

    let makePosts = (resObj: any) => {
        let postCards = resObj.map((element: any, index: number) => {
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
                <Card className="col-sm-8 mx-auto my-4" bg="dark" key={element.id}>
                    <Card.Body className="px-0">
                        <Media className="col-sm-12 px-0">
                            <Col sm="3" className="mt-3 px-0 mr-3">
                                <div style={{ "backgroundImage": `url("${element.url}")` }}
                                    className="mainAvatar"></div>
                            </Col>
                            <Media.Body>
                                <h5 className="text-light">{element.username}</h5>
                                <h2 className="text-light">{element.title}</h2>
                                <p className="text-light">{element.content}</p>
                                <h6 className="text-muted">{days}</h6>

                                <Button variant="success" as={Link} to={`/communitygarden/post/${element.id}`}>
                                    View Responses
                                </Button>
                            </Media.Body >

                        </Media>
                    </Card.Body>
                </Card>
            )
        })

        setPosts(postCards)
    }

    let handleSubmit = async () => {
        setSubmit(true);
        if (title !== "" && content !== "") {
            let post = await api('/api/posts', "POST", { Token, title, content })
            console.log(post)
            if (post) {
                setSubmit(false);
                props.history.push(`/communitygarden/post/${post.insertId}`)
            } else {
                setSubmit(false)
            }
        }
    }

    return (
        <React.Fragment>
            <Modal autoFocus={true} restoreFocus={true} show={submit}>
                <Modal.Header>
                    <Modal.Title>Positing {title}!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProgressBar variant="success" animated now={100} />
                </Modal.Body>
            </Modal>
            <Modal autoFocus={true} restoreFocus={true} show={error} onHide={() => setError(!error)}>
                <Modal.Header className="bg-danger" closeButton>
                    <Modal.Title>Oh no! Failed to post!</Modal.Title>
                </Modal.Header>
            </Modal>

            <Jumbotron fluid className="shadow rounded text-white ">
                <h1 className="text-light">Community Garden</h1><p className="text-light">Do you have questions for your fellow gardeners? Tips? Tricks? Post them here!</p>
            </Jumbotron>

            {posts}


            {/* <div className="d-flex">
                <Pagination className="mx-auto">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div> */}

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"
                    style={{ "position": "fixed", "bottom": "1em", "right": "1em" }}>
                    <FaLeaf size="3.5em" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="col-lg-3 col-md-4 col-6 py-0">
                    <Card className="d-flex" bg="warning">
                        <Card.Header className="d-flex">
                            <Card.Title as="h5" className="mx-auto my-auto text-dark">A Seed of Thought</Card.Title>
                        </Card.Header>
                        <Card.Body className="bg-light text-dark rounded">
                            <Form className="mb-0">
                                <Form.Group controlId="title">
                                    <Form.Label>Plant a Title!</Form.Label>
                                    <Form.Control type="text" placeholder="I yam what I yam" value={title}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="content" className="mb-0">
                                    <Form.Label>Soy Something</Form.Label>
                                    <Form.Control as="textarea" rows="2"
                                        placeholder="the grass is always greener on the other side" value={content}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)} />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="py-0 d-flex px-0">
                            <Button variant="success" className="col-sm-12 mx-auto" onClick={handleSubmit}>Submit</Button>
                        </Card.Footer>
                    </Card>

                </Dropdown.Menu>
            </Dropdown>


        </React.Fragment>
    );

}


export default CommGard;
