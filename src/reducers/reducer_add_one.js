export default function(state = null, action) {
	switch(action.type) {
		case 'ADDED_ONE':
			const newButtons = action.payload.newButtons;
			return newButtons.map((button, index) => {
				if(button.value === action.payload.buttons[index].value) {
					return button;
				}
				return {
					...action.buttons[index],
					...button
				};
			});
	}
	if (!state) {
				return [
				{ id: 4, label: 'btn4', value: 4 },
				{ id: 3, label: 'btn3', value: 3 },
				{ id: 2, label: 'btn2', value: 2 },
				{ id: 1, label: 'btn1', value: 1 },
			];}
			else {  
				return state; 
			};
} // function increments value of given button by 1 if 'ADDED_ONE'
  // returns the new button object with incremented value