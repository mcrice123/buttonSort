import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonComponent from '../ButtonComponent';

class ButtonListComponent extends Component {

	incrementValue(i) {
		let array2 = this.props.buttons; 
		array2[i].value = this.props.buttons[i].value + 1;
		this.setState({ buttons: array2 }); // component state! Need it to affect app state
	
		// call function to check preceding button
		this.checkPrevious(i);
	}

	checkPrevious(i) {
		const array0 = this.props.buttons;
		let object = array0[i-1];
		if (array0[i-1]) {
			if (array0[i].value > array0[i-1].value) {
				array0[i-1] = array0[i];
				console.log("array0[i-1]: " + array0[i-1].value);
				console.log("object: " + object.value);
				console.log("array0[i]: " + array0[i].value);
				array0[i] = object; // swaps two elements
				console.log("array0[i]: " + array0[i].value);
				console.log("object: " + object.value);
				this.setState({ buttons: array0 }); // seems to be setting both elements to same value and incrementing both when one is clicked
				this.checkPrevious(i-1);
			}
		}
	}

	renderList() {
		return this.props.buttons.map((button, i) => {
			return (
				<li 
					key={i}>
					<ButtonComponent startValue={button.startValue} value={button.value} onButtonClick={ () => this.incrementValue(i) }/>
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

function mapStateToProps(state) {
	return {
		buttons: state.buttons
	};
}

export default connect(mapStateToProps)(ButtonListComponent);