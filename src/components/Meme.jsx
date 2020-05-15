import React, { Component } from 'react';
class Meme extends Component {
	constructor() {
		super();
		this.state = {
			topText: '',
			bottomText: '',
			randomImage: 'http://i.imgflip.com/1bij.jpg',
			allMemeImages: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		fetch('https://api.imgflip.com/get_memes').then((response) => {
			response.json().then((response) => {
				const { memes } = response.data;
				console.log(memes[0]);
				this.setState({ allMemeImages: memes });
			});
		});
	}
	handleChange(event) {
		console.log('im working');
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}
	handleSubmit(event) {
		event.preventDefault();
		const randNum = Math.floor(Math.random() * this.state.allMemeImages.length);
		const randMemeImg = this.state.allMemeImages[randNum].url;
		this.setState({ randomImage: randMemeImg });
	}

	render() {
		return (
			<div>
				<form className="form" onSubmit={this.handleSubmit}>
					<input
						placeholder="top text"
						name="topText"
						type="text"
						onChange={this.handleChange}
						value={this.state.topText}
					/>
					<input
						placeholder="bottom text"
						name="bottomText"
						type="text"
						onChange={this.handleChange}
						value={this.state.bottomText}
					/>
					<button>gen</button>
				</form>
				<div className="memeImage">
					<h2 className="topText">{this.state.topText}</h2>
					<img src={this.state.randomImage} alt="" />
					<h2 className="bottomText">{this.state.bottomText}</h2>
				</div>
			</div>
		);
	}
}

export default Meme;
