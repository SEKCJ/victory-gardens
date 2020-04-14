import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button, Image } from 'react-bootstrap';
// import styles from '../scss/app.scss';
// import '../styles.css';
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
        makeGarden(response);
    };
    let makeGarden = (resObj: any) => {
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
                        <div id="plants"></div>
                        <div id="soil">
                            {/* need a top row for things to start insde (CM) */}
                            <Row>
                                {/* <span className="plot"></span> */}
                                <Col className="plot"><Image src={window.location.origin + '/assets/dirt.jpg'} style={{ 'width': '100%' }}></Image></Col>
                                <Col className="plot"><Image src={window.location.origin + '/assets/dirt.jpg'} style={{ 'width': '100%' }}></Image></Col>
                                <Col className="plot"><Image src={window.location.origin + '/assets/dirt.jpg'} style={{ 'width': '100%' }}></Image></Col>
                                <Col className="plot"><Image src={window.location.origin + '/assets/dirt.jpg'} style={{ 'width': '100%' }}></Image></Col>
                                <Col className="plot"><Image src={window.location.origin + '/assets/dirt.jpg'} style={{ 'width': '100%' }}></Image></Col>
                                <Col className="plot"><Image src={window.location.origin + '/assets/dirt.jpg'} style={{ 'width': '100%' }}></Image></Col>
                                <Col className="plot"><Image src={window.location.origin + '/assets/dirt.jpg'} style={{ 'width': '100%' }}></Image></Col>
                                <Col className="plot"><Image src={window.location.origin + '/assets/dirt.jpg'} style={{ 'width': '100%' }}></Image></Col>
                                <Col className="plot"><Image src={window.location.origin + '/assets/dirt.jpg'} style={{ 'width': '100%' }}></Image></Col>
                                <Col className="plot"><Image src={window.location.origin + '/assets/dirt.jpg'} style={{ 'width': '100%' }}></Image></Col>
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