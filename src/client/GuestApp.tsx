import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GuestNavigate from './GuestComponents/GuestNavbar';
import GuestHomeCard from './GuestComponents/GuestHomeCard';
import GuestVeggies from './GuestComponents/GuestVeggies';
import GuestChoose from './GuestComponents/GuestGhoose';
import GuestSignUp from './GuestComponents/GuestSignUp';
//import GuestLogin from './GuestComponents/GuestLogin';
import GuestAbout from './GuestComponents/GuestAbout';

const GuestApp: React.FC<IAppProps> = props => {

    return (
        <Router>
            <GuestNavigate />
            <Switch>
                <Route exact path="/guestveggies" component={GuestVeggies} />
                <Route exact path="/guestchoose" component={GuestChoose} />
                {/* <Route exact path= "/joingarden" component={UserSignUp}/> */}
                <Route exact path="/guestsignup" component={GuestSignUp} />
                <Route exact path="/guestabout" component={GuestAbout} />
                <Route path="/" component={GuestHomeCard} />

            </Switch>
        </Router >
    )
}

export interface IAppProps { }



export default GuestApp;