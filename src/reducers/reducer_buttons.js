export default function(state = null, action) {
	console.log("in reducer_buttons ");
			if (!state) {
				console.log("shouldn't be here ");
				return [
				{ id: 'btn4', value: 4 },
				{ id: 'btn3', value: 3 },
				{ id: 'btn2', value: 2 },
				{ id: 'btn1', value: 1 },
			];}
			else { 
				console.log("don't be here "); 
				return state; 
			}
}