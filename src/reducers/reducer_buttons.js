export default function(state = null, action) {
	console.log("in reducer_buttons ");
			switch(action.type) {
				case 'UPDATED_BUTTONS': 
					console.log("updating buttons ");
					return action.payload;
			}
			if (!state) {
				console.log("now there's state ");
			return [
			{ id: 'btn4', value: 4 },
			{ id: 'btn3', value: 3 },
			{ id: 'btn2', value: 2 },
			{ id: 'btn1', value: 1 },
		];}
		else { console.log("there's still state "); return state; }
}