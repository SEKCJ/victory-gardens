import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigate from './Components/Navbar';
import UserHome from './Components/UserHome';
import Veggies from './Components/UserVeggies';
import HelpChoose from './Components/UserChoose';
import Veggie from './Components/Veggie';
import MyProfile from './Components/UserProfile';
import SavedVeggies from './Components/SavedVeggies';
import Settings from './Components/Settings';
import AboutUs from './Components/AboutUs';
import UserLogin from './Components/Login';
//import UserSignUp from './Components/UserSignUp';
//import ControlledTabs from './Components/MyProfile';
// import Garden from './Components/Garden';
import GardenVis from './Components/GardenVis';
import Herbs from './Components/UserHerbs';
import SingleHerb from './Components/Herb';
import CommGard from './Components/CommunityGarden';
import Response from './Components/Response';


const App: React.FC<IAppProps> = props => {

	return (
		<Router>
			<Navigate />
			<Switch>
				<Route exact path="/veggies" component={Veggies} />
				<Route exact path="/veggies/:id" component={Veggie} />
				<Route exact path="/myprofile" component={MyProfile} />
				<Route exact path="/savedveggies" component={SavedVeggies} />
				<Route exact path="/settings" component={Settings} />
				<Route exact path="/login" component={UserLogin} />
				<Route exact path="/aboutus" component={AboutUs} />
				<Route exact path="/choose" component={HelpChoose} />
				<Route exact path="/garden" component={GardenVis} />
				<Route exact path="/userherbs" component={Herbs} />
				<Route exact path="/userherbs/:herbid" component={SingleHerb} />
				<Route exact path="/communitygarden" component={CommGard} />
				<Route exact path="/communitygarden/post/:id" component={Response} />
				<Route path='/' component={UserHome} />
				{/* <Route exact path="/myprofile" component={ControlledTabs} /> */}
				{/* <Route exact path="/joingarden" component={UserSignUp} /> */}
			</Switch>
		</Router >
	)
}

export interface IAppProps { }



export default App;
