import React, { useState, useEffect } from 'react';
import { Form, Col, Card, Button, Jumbotron, Dropdown, Media, Collapse, Pagination } from 'react-bootstrap';
import { FaLeaf } from 'react-icons/fa';
import { api, Token } from '../Services/apiServices';
import { Link } from 'react-router-dom';
import { IAppProps } from '../App';

const CommGard: React.FC<IAppProps> = () => {

    const [apiResponse, setApiResponse] = useState<any>();
    const [posts, setPosts] = useState<JSX.Element[]>();

    useEffect(() => {
        fetchAPI()
    }, [])

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

                                <Button variant="success" as={Link} to={`/communitygarden/${element.id}`}>
                                    View Responses
                                </Button>
                                {/* <Button
                                    onClick={() => handleOpen(index)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open1}
                                    variant="success"
                                >
                                    View Responses
                                </Button> 
                                <Collapse in={open1}>

                                    <Media>
                                        <img
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src="holder.js/64x64"
                                            alt="Generic placeholder"
                                        />

                                        <Media.Body>
                                            <h5 className="text-success">Username</h5>
                                            <h2>Title of Post</h2>
                                            <p>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
                                                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                            <h6 className="text-muted">2 days ago</h6>
                                        </Media.Body></Media>
                                </Collapse> */}



                            </Media.Body >

                        </Media>
                    </Card.Body>
                </Card>
            )
        })

        setPosts(postCards)
    }

    return (
        <React.Fragment>
            <Jumbotron fluid className="shadow rounded text-white ">
                <h1 className="text-light">Community Garden</h1><p className="text-light">Do you have questions for your fellow gardeners? Tips? Tricks? Post them here!</p>
            </Jumbotron>

            {posts}


            <div className="d-flex">
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
            </div>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ "position": "fixed", "bottom": "0px", "right": "0px" }}>
                    <FaLeaf size="3.5em" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>A Seed of Thought</Form.Label>
                        <Form.Control as="textarea" rows="5" />
                    </Form.Group>
                    <Button variant="success">Submit</Button>
                </Dropdown.Menu>
            </Dropdown>


        </React.Fragment>
    );

}


export default CommGard;
