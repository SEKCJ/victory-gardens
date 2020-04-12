import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigate from './components/Navbar';
import UserHome from './components/UserHome';
import Veggies from './components/UserVeggies';
import HelpChoose from './components/UserChoose';
import Veggie from './components/Veggie';
import MyProfile from './components/UserProfile';
import SavedVeggies from './components/SavedVeggies';
import Settings from './components/Settings';
import UserSignUp from './components/UserSignUp';
import AboutUs from './components/AboutUs';
import UserLogin from './components/Login';
import ControlledTabs from './Components/MyProfile';

const App: React.FC<IAppProps> = props => {

	return (
		<Router>
			<Navigate />
			<Switch>
				<Route exact path="/veggies" component={Veggies} />
				<Route exact path="/veggies/:id" component={Veggie} />
				<Route exact path="/myprofile/:token?" component={MyProfile} />
				<Route exact path="/savedveggies/:token?" component={SavedVeggies} />
				<Route exact path="/settings/:token?" component={Settings} />
				<Route exact path="/joingarden/:token?" component={UserSignUp} />
				<Route exact path="/login" component={UserLogin} />
				<Route exact path="/aboutus" component={AboutUs} />
				{/* <Route exact path="/myprofile/:token?" component={ControlledTabs} /> */}
				<Route exact path="/choose" component={HelpChoose} />
				<Route path='/:token?' component={UserHome} />
			</Switch>
		</Router >
	)
}

export interface IAppProps { }



export default App;
