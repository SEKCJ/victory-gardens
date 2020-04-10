import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigate from './components/Navbar';
import UserHome from './components/UserHome';
import Veggies from './components/UserVeggies';
import Choose from './components/UserChoose';
import Veggie from './components/Veggie';
import MyProfile from './components/UserProfile';
import SavedVeggies from './components/SavedVeggies';
import Settings from './components/Settings';
import UserSignUp from './components/UserSignUp';
import AboutUs from './components/AboutUs';
import UserLogin from './components/Login';




const App: React.FC<IAppProps> = props => {

	return (
		<Router>
			<Navigate />
			<Switch>
				<Route exact path="/veggies" component={Veggies} />
				<Route exact path="/choose" component={Choose} />
				<Route exact path="/veggies/:id" component={Veggie} />
				<Route exact path="/myprofile" component={MyProfile} />
				<Route exact path="/savedveggies" component={SavedVeggies} />
				<Route exact path="/settings" component={Settings} />
				<Route exact path= "/joingarden" component={UserSignUp}/>
				<Route exact path="/login" component={UserLogin} />
				<Route exact path="/aboutus" component={AboutUs}/>
				<Route path = '/' component={UserHome} />
			</Switch>
		</Router >
	)
}

export interface IAppProps { }



export default App;
