import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonComponent from '../ButtonComponent';
import { incrementButton } from '../../actions/index';

class ButtonListComponent extends Component {

	// Increment Value function calls action creator for incrementing button
	incrementValue(e, i, sortedButtons) {
		let newButtons = sortedButtons.map((button, index) => {
			if (index === i) {
				button.value += 1;
				return button;
			}
			return button;
		});
		this.props.incrementButton(newButtons, this.props.buttons); 
	}

	insertionSort(buttons) { 
		let sortedButtons = buttons;
		sortedButtons.map((button, i) => {
			let j = i - 1;
			let object = sortedButtons[i];
			for (; j>=0 && sortedButtons[j].value < object.value; --j) {
				sortedButtons[j+1] = sortedButtons[j];
			}
			sortedButtons[j+1] = object;
		});
		return sortedButtons;
	}

// renderList() function for rendering the list of buttons; calls insertion sort and returns map function displaying all Button components
	renderList() {
		// Insertion Sort is called
		const sortedButtons = this.insertionSort(this.props.buttons);

		// Map function is called on each button of buttons in props
		return sortedButtons.map((button, i) => {
			return (
				<li key={i}>
					<ButtonComponent button={button} onButtonClick={e => this.incrementValue(e, i, sortedButtons)} />
				</li>
			);
		});
	}

// Render function where list of buttons appears; calls renderList() function
	render() {
		return(
			<ul>
				{this.renderList()} 
			</ul>
		);
	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up as props inside ButtonListComponent
	return {
		buttons: state.buttons
	};
}

// Anything returned from this function will end up as props on the ButtonList container.
function mapDispatchToProps(dispatch) {
	// Whenever incrementButton is called, the result should be passed to all of our 
	// reducers
	return bindActionCreators({ incrementButton: incrementButton }, dispatch); // So anytime a button value changes, the state should update automatically
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonListComponent);