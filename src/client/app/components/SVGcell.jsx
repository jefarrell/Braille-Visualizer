import React from 'react';
import {render} from 'react-dom';



class SVGcell extends React.Component {
	render() {
		return (
			<svg {...this.props}>{this.props.children}></svg>
		);
	}
};

export default SVGcell;