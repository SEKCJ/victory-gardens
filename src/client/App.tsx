import * as React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import UserSignUp from './Components/UserSignUp';
import AbVicGard from './Components/AboutVictoryGardens';
import './scss/app';

//import {IAppProps} from 'react-router-dom';

const App: React.FC<IAppProps> = props => {
	return (
		<Router>
		  <Switch>
			   <Route exact path = "/home" component= { AbVicGard }/> 
			  <Route exact path = "/joingarden" component= { UserSignUp }/>
			  </Switch>	
		</Router>
		);
}

export interface IAppProps { } 


export default App;
