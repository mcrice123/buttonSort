export default function(state, action) {
	switch(action.type) {
		case 'ADDED_ONE':
			action.payload.value += 1;
			return action.payload;
	}
	return state;
}