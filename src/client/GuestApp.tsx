import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GuestNavigate from './GuestComponents/GuestNavbar';
import GuestHome from './GuestComponents/GuestHomeCard';
import GuestVeggies from './GuestComponents/GuestVeggies';
// import GuestChoose from './GuestComponents/GuestGhoose';
import GuestSignUp from './GuestComponents/GuestSignUp';
//import GuestLogin from './GuestComponents/GuestLogin';
import GuestAbout from './GuestComponents/GuestAbout';
// import GSingleVeg from './GuestComponents/GuestSingleVeg';
import HelpChoose from './Components/UserChoose';

const GuestApp: React.FC<IAppProps> = props => {

    return (
        <Router>
            <GuestNavigate />
            <Switch>
                 <Route exact path="/guestchoose" component={HelpChoose} /> 
                {/* <Route exact path= "/joingarden" component={UserSignUp}/> */}
                <Route exact path="/guestsignup" component={GuestSignUp} />
                <Route exact path="/guestabout" component={GuestAbout} />
                {/* <Route exact path="/guestsingleveg/:id" component={GSingleVeg} />  */}
                 <Route path="/" component={GuestHome} />
            </Switch>
        </Router >
    )
}

export interface IAppProps { }



export default GuestApp;