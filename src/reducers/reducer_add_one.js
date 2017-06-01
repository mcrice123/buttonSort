export default function(state = null, action) {
	switch(action.type) {
		case 'ADDED_ONE':
			console.log("added one reducer");
			console.log("value: " + action.payload.buttons[action.payload.idnum].value);
			let array = action.payload.buttons;
			console.log("array: " + array[action.payload.idnum].value);
			console.log(array);
			array[action.payload.idnum].value += 1;
			return Object.assign({}, state, { 
				buttons: array
			});
	}
	if (!state) {
				console.log("now there's state ");
				return [
				{ id: 4, label: 'btn4', value: 4 },
				{ id: 3, label: 'btn3', value: 3 },
				{ id: 2, label: 'btn2', value: 2 },
				{ id: 1, label: 'btn1', value: 1 },
			];}
			else { 
				console.log("there's still state "); 
				return state; 
			};
} // function increments value of given button by 1 if 'ADDED_ONE'
  // returns the new button object with incremented value