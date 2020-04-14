import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { IVegetables } from "../../server/Models/index";

interface IGardenProps extends RouteComponentProps<{ id: string }> { }
const Garden: React.FC<IGardenProps> = ({
    match: {
        params: { id },
    },
}) => {
    const [Garden, setGarden] = useState<any>();

    let fetchAPI = async () => {
        let [response] = await api(`/api/vegetables/${id}`);
        makeVeggie(response);
    };
    let makeVeggie = (resObj: any) => {
        let vgId = resObj.id;
        let vgName = resObj.name;
        let vgPosition = resObj.position;
        let vgSpacing = resObj.spacing;
        let vgSandP = resObj.sow_and_plant;
        let vgImg = resObj.url;

        setGarden(
            <section id="view">
                <Container fluid="md">
                    <div id="board">
                        <div id="overlay">
                            <Row>
                                {/* <span className="plot"></span> */}
                                <Col className="">1</Col>
                                <Col className="">2</Col>
                                <Col className="">3</Col>
                                <Col className="">4</Col>
                                <Col className="">5</Col>
                                <Col className="">6</Col>
                                <Col className="">7</Col>
                                <Col className="">8</Col>
                                <Col className="">9</Col>
                                <Col className="">10</Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
        )
    };
    useEffect(() => {
        fetchAPI();
    }, []);

    return <React.Fragment>{Garden}</React.Fragment>;
}
export default Garden;