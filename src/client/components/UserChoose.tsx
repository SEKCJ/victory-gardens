
import React, { } from 'react';
import { IAppProps } from '../App';
import { Link } from 'react-router-dom';
import { Card, Container, Accordion, Button, Jumbotron, Image} from 'react-bootstrap';

const HelpChoose: React.FC<IAppProps> = props => {
    return (
    <Container className= "d-flex flex-column">
    <>
        <Jumbotron fluid>
                <h1>Let's find your inner green thumb!</h1>
                <p> </p>
        </Jumbotron>
    </>
<div className="mx-auto">     
<>
<Accordion>
<Card style={{ width: '18rem' }}>
  <Card.Header className="d-flex">
    <Accordion.Toggle className="mr-auto" as={Button} variant="link" eventKey="0">Pizza</Accordion.Toggle>
    <Image src= "https://freesvg.org/img/meltypizza.png" style={{"width":"3em"}}/>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
        <Card.Body>
            <Card.Title></Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Grow your own pizza toppings!</Card.Subtitle>
             <Card.Link href="/veggies">Chili Pepper</Card.Link><br></br>
             <Card.Link href="/veggies">Onions</Card.Link><br></br>
             <Card.Link href="/veggies">Onions (Fall planted)</Card.Link><br></br>
             <Card.Link href="/veggies">Tomato (Large)</Card.Link><br></br>
             <Card.Link href="/veggies">Tomato (Small)</Card.Link><br></br>
             <Card.Link href="/veggies">Spinach</Card.Link><br></br>
             <Card.Link href="/veggies">Pepper</Card.Link>
         </Card.Body>
    </Accordion.Collapse>
</Card>
</Accordion>
</>
<>
<Accordion>
<Card style={{ width: '18rem' }}>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">Salsa Essentials</Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
        <Card.Body>
            <Card.Title></Card.Title>
             <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
             <Card.Link href="/veggies">Tomato (Small)</Card.Link><br></br>
             <Card.Link href="/veggies">Tomato (Large)</Card.Link><br></br>
             <Card.Link href="/veggies">Pepper</Card.Link><br></br>
             <Card.Link href="/veggies">Onions (Fall planted)</Card.Link><br></br>
             <Card.Link href="/veggies">Chili Pepper</Card.Link><br></br>
             <Card.Link href="/veggies">Onions</Card.Link>
         </Card.Body>
    </Accordion.Collapse>
</Card>
</Accordion>
</>
<>
<Accordion>
<Card style={{ width: '18rem' }}>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">Salad</Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
        <Card.Body>
            <Card.Title></Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Check out these easy to grow salad greens!</Card.Subtitle>
             <Card.Link href="/veggies">Arugula</Card.Link><br></br>
             <Card.Link href="/veggies">Kale</Card.Link><br></br>
             <Card.Link href="/veggies">Crisphead Lettuce</Card.Link><br></br>
             <Card.Link href="/veggies">Leaf Lettuce</Card.Link><br></br>
             <Card.Link href="/veggies">Mustard</Card.Link><br></br>
             <Card.Link href="/veggies">Swiss Chard</Card.Link><br></br>
             <Card.Link href="/veggies">Miner's Lettuce</Card.Link>
         </Card.Body>
    </Accordion.Collapse>
</Card>
</Accordion>
</>
<>
<Accordion>
<Card style={{ width: '18rem' }}>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">Great on the Grill</Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
        <Card.Body>
            <Card.Title></Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Veggies that you can grill!</Card.Subtitle>
             <Card.Link href="/veggies">Asparagus</Card.Link><br></br>
             <Card.Link href="/veggies">Corn</Card.Link><br></br>
             <Card.Link href="/veggies">Eggplant</Card.Link><br></br>
             <Card.Link href="/veggies">Onions</Card.Link><br></br>
             <Card.Link href="/veggies">Squash (summer)</Card.Link><br></br>
             <Card.Link href="/veggies">Squash (winter)</Card.Link><br></br>
             <Card.Link href="/veggies">Tomato (Large)</Card.Link><br></br>
             <Card.Link href="/veggies">Onions (Fall planted)</Card.Link>
         </Card.Body>
    </Accordion.Collapse>
</Card>
</Accordion>
</>
<>
<Accordion>
<Card style={{ width: '18rem' }}>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">Beginner</Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
        <Card.Body>
            <Card.Title></Card.Title>
             <Card.Subtitle className="mb-2 text-muted"> Start out simple with these plants for beginner level gardeners!</Card.Subtitle>
             <Card.Link href="/veggies">Collards</Card.Link><br></br>
             <Card.Link href="/veggies">Pepper</Card.Link><br></br>
             <Card.Link href="/veggies">Chili Pepper</Card.Link><br></br>
             <Card.Link href="/veggies">Swiss Chard</Card.Link><br></br>
             <Card.Link href="/veggies">Veggie 5</Card.Link>
         </Card.Body>
    </Accordion.Collapse>
</Card>
</Accordion>
</>
<>
<Accordion>
<Card style={{ width: '18rem' }}>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">Immortal</Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
        <Card.Body>
            <Card.Title></Card.Title>
             <Card.Subtitle className="mb-2 text-muted">These plants keep for a month or longer after harvest!</Card.Subtitle>
             <Card.Link href="/veggies">Beet</Card.Link><br></br>
             <Card.Link href="/veggies">Carrot</Card.Link><br></br>
             <Card.Link href="/veggies">Chili Pepper</Card.Link><br></br>
             <Card.Link href="/veggies">Garlic</Card.Link><br></br>
             <Card.Link href="/veggies">Onions</Card.Link><br></br>
             <Card.Link href="/veggies">Onions (Fall planted)</Card.Link><br></br>
             <Card.Link href="/veggies">Potatoes (Early)</Card.Link><br></br>
             <Card.Link href="/veggies">Potatoes (Maincrop)</Card.Link><br></br>
             <Card.Link href="/veggies">Squash (summer)</Card.Link><br></br>
             <Card.Link href="/veggies">Squash (winter)</Card.Link>
         </Card.Body>
    </Accordion.Collapse>
</Card>
</Accordion>
</>
<>
<Accordion>
<Card style={{ width: '18rem' }}>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="0"> Save the Bees! </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
        <Card.Body>
            <Card.Title></Card.Title>
             <Card.Subtitle className="mb-2 text-muted">Have a look at these bee-friendly vegetables!</Card.Subtitle>
             <Card.Link href="/veggies">Cantaloupe</Card.Link><br></br>
             <Card.Link href="/veggies">Cucumber</Card.Link><br></br>
             <Card.Link href="/veggies">Eggplant</Card.Link><br></br>
             <Card.Link href="/veggies">Melon</Card.Link><br></br>
             <Card.Link href="/veggies">Pepper</Card.Link><br></br>
             <Card.Link href="/veggies">Pumpkin</Card.Link>
         </Card.Body>
    </Accordion.Collapse>
</Card>
</Accordion>
</>
<>
<Accordion>
<Card style={{ width: '18rem' }}>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">Large Harvest</Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
        <Card.Body>
            <Card.Title></Card.Title>
             <Card.Subtitle className="mb-2 text-muted">These plants yield a large harvest.</Card.Subtitle>
             <Card.Link href="/veggies">Bush Snap Beans</Card.Link><br></br>
             <Card.Link href="/veggies">Beans (Dry)</Card.Link><br></br>
             <Card.Link href="/veggies">Fava Beans</Card.Link><br></br>
             <Card.Link href="/veggies">Lima Beans</Card.Link><br></br>
             <Card.Link href="/veggies">Pole Beans</Card.Link><br></br>
             <Card.Link href="/veggies">Cucumber</Card.Link><br></br>
             <Card.Link href="/veggies">Okra</Card.Link><br></br>
             <Card.Link href="/veggies">Potatoes (Early)</Card.Link><br></br>
             <Card.Link href="/veggies">Potatoes (Maincrop)</Card.Link><br></br>
             <Card.Link href="/veggies">Tomato (Large)</Card.Link><br></br>
             <Card.Link href="/veggies">Tomato (Small)</Card.Link><br></br>
             <Card.Link href="/veggies">Zucchini</Card.Link>
         </Card.Body>
    </Accordion.Collapse>
</Card>
</Accordion>
</>   
</div>
</Container>
    )
}

export default HelpChoose;
