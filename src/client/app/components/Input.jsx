import React from 'react';
import SVGcell from './SVGcell.jsx';
import Dot from './Dot.jsx'
const alphabet = require('json!../assets/alphabet.json');

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			letter: '',
			//code: ['small', 'small', 'small', 'small', 'small', 'small']
			code: [20, 20, 20, 20, 20, 20]
		};
		this.handleChange = this.handleChange.bind(this);
	}

	validate(input) {
	   if (input == "") {
	        return false;
	    }
	    if (!/^[a-zA-Z]*$/g.test(input)) {
	        return false;
	    }
	}

	handleChange(event) {
		let value = event.target.value;
		this.validate(value);
		const self = this;
		let letterArr = alphabet[value.slice(-1)].slice();

		letterArr.forEach(function(val, index, arr) {
			//arr[index] === 0 ? arr[index] = 20 : arr[index] = 35
			//arr[index] === 1 ? arr[index] = 'big' : arr[index] = 'small'
			if (arr[index] === 0) {
				arr[index] = 20;
			} else {
				var x = 20;
				while (x < 35) {
					arr[index] = x;
					x++;
				}
			}
			self.setState({letter:value.slice(-1), code: letterArr});			
		});

		// this.setState({letter:value.slice(-1), code: letterArr});
	}

	render() {
		const w = window.innerWidth;
		const l = w/2-50;
		const r = w/2+50;

		return (
			<div>
				<div className="top"></div>
				<SVGcell width={w} height="400" className="SVGcont">
					<Dot cx={l} cy="50" r={this.state.code[0]}/>
					<Dot cx={r} cy="50" r={this.state.code[1]}/>
					<Dot cx={l} cy="125" r={this.state.code[2]}/>
					<Dot cx={r} cy="125" r={this.state.code[3]}/>
					<Dot cx={l} cy="200" r={this.state.code[4]}/>
					<Dot cx={r} cy="200" r={this.state.code[5]}/>
				</SVGcell>
				<div className="currentLetter">
					<p> {this.state.letter} </p>
				</div>
				<div className="contain">
					<input type="text" onChange={this.handleChange} autoFocus="autofocus"></input>
				</div>
			</div>
		);
	}

}
					// <Dot cx={l} cy="50" r="20" size={this.state.code[0]}/>
					// <Dot cx={r} cy="50" r="20" size={this.state.code[1]}/>
					// <Dot cx={l} cy="125" r="20" size={this.state.code[2]}/>
					// <Dot cx={r} cy="125" r="20" size={this.state.code[3]}/>
					// <Dot cx={l} cy="200" r="20" size={this.state.code[4]}/>
					// <Dot cx={r} cy="200" r="20" size={this.state.code[5]}/>
export default Input;