import React, { Component } from 'react';

import ButtonComponent from '../ButtonComponent';

export default class ButtonListComponent extends Component {
	constructor(props) {
		super(props);

		this.state = { array: this.props.array }
	}

	incrementValue(i) {
		let array2 = this.state.array; 
		array2[i] = this.state.array[i] + 1;
		this.setState({ array: array2 });
	}

	renderList() {
		return this.state.array.map((index, i) => {
			return (
				<li 
					key={i}>
					<ButtonComponent value={index} onButtonClick={ () => this.incrementValue(i) }/>
				</li>
			);
		});
	}

	render() {
		return(
			<ul>
				{this.renderList()}
			

			</ul>
		);
	}
}