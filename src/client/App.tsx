import * as React from 'react';

const App: React.FC<IAppProps> = props => {
	return(
		<h1>Hello World!</h1>
	)
}

export interface IAppProps {}

export interface IAppState {
	name: string;
}

export default App;
