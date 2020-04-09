import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigate from './components/Navbar';
import Home from './Components/HomeCard';
import Veggies from './Components/Veggies';
import Choose from './components/Choose';
import UserSignUp from './Components/UserSignUp';
import UserLogin from './Components/Login';
import AboutUs from './Components/AboutUs';
import Settings from './Components/UserSettings';

const App: React.FC<IAppProps> = props => {

	return (
		<Router>
			<Navigate />
			<Switch>
				<Route exact path="/veggies" component={Veggies} />
				<Route exact path="/choose" component={Choose} />
				<Route exact path= "/joingarden" component={UserSignUp}/>
				<Route exact path="/login" component={UserLogin} />
				<Route exact path="/aboutus" component={AboutUs}/>
				<Route path="/home" component={Home} />
				
			</Switch>
		</Router >
	)
}

export interface IAppProps { }



export default App;
