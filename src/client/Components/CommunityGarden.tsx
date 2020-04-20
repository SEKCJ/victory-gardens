import React, { } from 'react';
import { Form, Col, Card, Button, Jumbotron } from 'react-bootstrap';
import { FaLeaf } from 'react-icons/fa';
import { IAppProps } from '../App';

const CommGard: React.FC<IAppProps> = () => {
    return (
        <React.Fragment>
            <Jumbotron fluid className="shadow rounded text-white ">
      <h1 className="text-light">Community Garden</h1><p className="text-light">Do you have questions for your fellow gardeners? Tips? Tricks? Post them here!</p>
      </Jumbotron>
            <Card className="col-md-6 mx-auto ">
                <img
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
            </Card>

            <Button variant="success" style={{"position": "fixed", "bottom": "0px", "right":"0px"}}>
              <FaLeaf size="3.5em"  />
            </Button>
        </React.Fragment>
    );

}


export default CommGard;
