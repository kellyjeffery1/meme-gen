import React, { Component } from 'react';
import Header from './components/Header';
import Meme from './components/Meme';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div>
				<Header />
				<Meme />
			</div>
		);
	}
}

export default App;
