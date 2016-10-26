import React from 'react';
import {render} from 'react-dom';
import Input from './Input.jsx'

class App extends React.Component {
	render() {
		return (
			<Input />
			)
	}
};


render(<App />, document.getElementById('app'));