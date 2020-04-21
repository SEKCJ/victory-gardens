import React, { useState } from 'react';
import { Form, Col, Card, Button, Jumbotron, Dropdown, Media, Collapse } from 'react-bootstrap';
import { FaLeaf } from 'react-icons/fa';
import { IAppProps } from '../App';

const CommGard: React.FC<IAppProps> = () => {
    const [open, setOpen] = useState(false);


    return (
        <React.Fragment>
            <Jumbotron fluid className="shadow rounded text-white ">
                <h1 className="text-light">Community Garden</h1><p className="text-light">Do you have questions for your fellow gardeners? Tips? Tricks? Post them here!</p>
            </Jumbotron>
            <Card className="col-md-6 mx-auto ">
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
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
    </p>
                        <h6 className="text-muted">2 days ago</h6>

                        <>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                View Responses
      </Button>
                            <Collapse in={open}>
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
                            </Collapse>
                        </>

                        {/* <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div> */}


                    </Media.Body >

                </Media>



                {/* <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="holder.js/64x64"
                    alt="Generic placeholder"
                />
                <Card.Body>
                    <h5 className="text-success">Username</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
    </p>

                </Card.Body>
                <Button variant="success">Reply</Button> */}
            </Card>


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
