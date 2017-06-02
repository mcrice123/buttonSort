import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonComponent from '../ButtonComponent';
import { incrementButton } from '../../actions/index';

class ButtonListComponent extends Component {

	// Increment Value function calls action creator for incrementing button
	incrementValue(e, i) {
		//let array = this.props.buttons;
		console.log("increment:" + i);
		let array = this.props.buttons.map((button, index) => {
			if (index === i) {
				button.value += 1;
				return button;
			}
			return button;
		});
		console.log(array);

		this.props.incrementButton(array, i); 
		//this.props.updateButtons(this.props.)
	
		// call function to check preceding button
		//this.checkPrevious(i);
	}

	/*checkPrevious(i) {
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
	}*/

	insertionSort(buttons) { // I'm counting on this function working correctly...might need to check it
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

// renderList() function for rendering the list of buttons; calls insertion sort and returns map function displaying all Button components
	renderList() {
		// Insertion Sort is called
		//const sortedButtons = this.insertionSort(this.props.buttons);
		const sortedButtons = this.props.buttons;

		// Map function is called on each button of buttons in props
		return sortedButtons.map((button, i) => {
			console.log("in map function ");
			// change increment value function and pass button instance down to button component
			
			console.log("round: " + i);
			return (
				<li key={i}>
					<ButtonComponent button={button} onButtonClick={e => this.incrementValue(e, i)} />
				</li>
			);
		});
	}

// Render function where list of buttons appears; calls renderList() function
	render() {
		console.log(this.props.buttons);
		this.props.buttons.map((button, i) => { console.log("button value: " + button.value +", index: " + i )});
		return(
			<ul>
				{this.renderList()} 
			</ul>
		);
	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up as props inside ButtonListComponent
	console.log("state to props ");
	console.log(state.buttons); // returns an OBJECT, but should be an ARRAY!!!!
	return {
		buttons: state.buttons
	};
}

// Anything returned from this function will end up as props on the ButtonList container.
function mapDispatchToProps(dispatch) {
	// Whenever incrementButton is called, the result should be passed to all of our 
	// reducers
	console.log("dispatch HERE");
	return bindActionCreators({ incrementButton: incrementButton }, dispatch); // So anytime a button value changes, the state should update automatically
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonListComponent);