import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigate from './components/Navbar';
import HomeCard from './Components/HomeCard';
import Veggies from './Components/Veggies';
import Choose from './components/Choose';

const App: React.FC<IAppProps> = props => {

	return (
		<Router>
			<Navigate />
			<Switch>
				<Route exact path="/veggies" component={Veggies} />
				<Route exact path="/choose" component={Choose} />
				<Route path="/" component={HomeCard} />
				
			</Switch>
		</Router >
	)
}

export interface IAppProps { }



export default App;
