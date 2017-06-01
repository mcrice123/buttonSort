// Action creator creates action with type "ADDED_ONE" and payload 'button'
export function incrementButton(buttons, i) {
	console.log("actions/index.js");
	console.log("buttons: " + buttons + ", i: " + i);
	return {
		type: 'ADDED_ONE',
		payload: { buttons: buttons, idnum: i }
	};
}

