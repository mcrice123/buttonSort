import React, { Component } from 'react';


import ButtonListComponent from './ButtonListComponent';

export default class App extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		array: [ 4, 3, 2, 1 ]
  	}
  }

  render() {
  	
    return (
      <div>
    	<h1>Button Sort</h1>
    	<ButtonListComponent array={this.state.array} />

      </div>
    );
  }
}
