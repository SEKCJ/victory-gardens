import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { api } from '../Services/apiServices';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Button, Accordion } from 'react-bootstrap';

interface IVeggieProps extends RouteComponentProps<{ id: string }> { }
const GSingleVeg: React.FC<IVeggieProps> = ({ match: { params: { id } } }) => {
    const[GSingleVeg, setVeggie] = useState<any>()

    let fetchAPI = async () => {
        let [response] = await api(`/api/vegetables/${id}`)
        makeGuestVeggie(response);
    }
    let makeGuestVeggie =(resObj: any) => { 
        let vgId=resObj.id;
        let vgName=resObj.name;
        let vgSciName=resObj.sci_name;
        let vgSoil=resObj.soil;
        let vgPosition=resObj.position;
        let vgFt=resObj.frost_tolerant;
        let vgFeeding=resObj.feeding;
        let vgCompanions=resObj.companions;
        let vgBadCompanions=resObj.bad_companions;
        let vgSpacing=resObj.spacing;
        let vgSandP=resObj.sow_and_plant;
        let vgPm=resObj.planting_months;
        let vgHm=resObj.harvest_months;
        let vgNotes=resObj.notes;
        let vgHarvest=resObj.harvesting;
        let vgTs=resObj.troubleshooting;
        let vgImg=resObj.url;


        setVeggie(
            <div className="d-flex">

            <Card className="mx-auto" style={{ width: '40rem' }}>

                <Card.Body>
                    <Card.Link href='/guestveggies'>Back to List</Card.Link>
                </Card.Body>
        <Card.Title className="mx-auto">
            <h1>{vgName}</h1>
        <p>{vgSciName}</p>
            </Card.Title>

                <Card.Img className="mx-auto" variant="top" style={{ "width": '15em' }} src={vgImg} />


                <Card.Body className="mx-auto">
                    <Button variant="success" disabled>Add to My Garden</Button>{' '}

                   
                </Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <ListGroup className="list-group-flush">
        <ListGroupItem>Must be singed in to view details.</ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
                            </ListGroup>
                        </Col>

                        <Col>

                            <ListGroup className="list-group-flush">
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
        <ListGroupItem></ListGroupItem>
                                
                            </ListGroup>  </Col></Row> </Container>


            </Card>
        </div>
        )
    }
    useEffect(() => {
        fetchAPI()
    }, [])

    return (
       <React.Fragment>
           {GSingleVeg}
       </React.Fragment>
    )

}
export default GSingleVeg;