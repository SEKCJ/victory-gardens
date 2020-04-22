import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Media } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import { api, Token } from '../Services/apiServices';

interface IResponse extends RouteComponentProps<{ id: string }> { }

const Response: React.FC<IResponse> = props => {

    const [apiResponse, setApiResponse] = useState<any>();
    const [post, setPost] = useState<JSX.Element>();
    let postid = props.match.params.id;

    useEffect(() => {
        fetchAPI()
    }, [])

    let fetchAPI = async () => {
        let posts = await api(`/api/posts/${postid}`)
        makeResponse(posts);
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
                        <Col sm="3" className="mt-3 px-0 mr-3">
                            <div style={{ "backgroundImage": `url("${posts.url}")` }}
                                className="mainAvatar"></div>
                        </Col>
                        <Media.Body>
                            <h5 className="text-light">{posts.username}</h5>
                            <h2 className="text-light">{posts.title}</h2>
                            <p className="text-light">{posts.content}</p>
                            <h6 className="text-muted">{days}</h6>
                        </Media.Body>
                    </Media>
                </Card.Header>
            </React.Fragment>
        )


    }

    return (
        <Container>
            <Card className="col-sm-10 mx-auto my-4" bg="dark">
                {post}
            </Card>
        </Container>
    )

}

export default Response