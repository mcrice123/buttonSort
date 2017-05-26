export default function(state = null, action) {
	switch(action.type) {
		case 'ADDED_ONE':
			console.log("added one reducer");
			console.log("value: " + action.payload.buttons[action.payload.id].value);
			action.payload.buttons[action.payload.id].value += 1;
			return action.payload.buttons;
	}
	if (!state) {
				console.log("now there's state ");
				return [
				{ id: 'btn4', value: 4 },
				{ id: 'btn3', value: 3 },
				{ id: 'btn2', value: 2 },
				{ id: 'btn1', value: 1 },
			];}
			else { 
				console.log("there's still state "); 
				return state; 
			};
} // function increments value of given button by 1 if 'ADDED_ONE'
  // returns the new button object with incremented value