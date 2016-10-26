import React from 'react';

class Dot extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			size: 'small'
		};
	}

	componentDidUpdate(newProps) {
		this.setState({size: newProps.size});
	}

	render() {
		var classes = `dot ${this.state.size}`

		return (
			<circle {...this.props} className={classes}></circle>
		);
	}
};


export default Dot;
