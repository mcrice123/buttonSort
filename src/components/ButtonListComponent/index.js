import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonComponent from '../ButtonComponent';
import { updateButtons, incrementButton } from '../../actions/index';

class ButtonListComponent extends Component {

	constructor(props) {
		super(props);

		this.incrementButton = this.incrementButton.bind(this);
	}

	incrementValue(i) {
		//let array = this.props.buttons;
		this.props.incrementButton(this.props.buttons, i); 
	
		// call function to check preceding button
		this.checkPrevious(i);
	}

	checkPrevious(i) {
		const array0 = this.props.buttons;
		let object = array0[i-1];
		if (array0[i-1]) {
			if (array0[i].value > array0[i-1].value) {
				array0[i-1] = array0[i];
				array0[i] = object; // swaps two elements
				this.props.updateButtons(array0); // seems to be setting both elements to same value and incrementing both when one is clicked
				this.checkPrevious(i-1);
			}
		}
	}

	insertionSort(buttons) {
		let sortedButtons = buttons;
		sortedButtons.map((button, i) => {
			let j = i - 1;
			let object = sortedButtons[i];
			for (; j>=0 && sortedButtons[j].value > object.value; --j) {
				sortedButtons[j+1] = sortedButtons[j];
			}
			sortedButtons[j+1] = object;
		});
		return sortedButtons;
	}

	renderList() {
		// insertion sort heere
		const sortedButtons = this.insertionSort(this.props.buttons);
		
		return sortedButtons.map((button, i) => {
			console.log("in map funciton ");
			// change increment value function and pass button instance down to button component
			

			return (
				<li key={i}>
					<ButtonComponent button={button} onClick={this.incrementButton.bind(button)}/>
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
	console.log("state to props ");
	return {
		buttons: state.buttons
	};
}

function mapDispatchToProps(dispatch) {
	console.log("HERE");
	return bindActionCreators({ incrementButton: incrementButton }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonListComponent);