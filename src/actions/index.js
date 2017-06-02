// Action creator creates action with type "ADDED_ONE" and payload 'button'
export function incrementButton(newButtons, buttons) {
	return {
		type: 'ADDED_ONE',
		payload: { newButtons: newButtons, buttons: buttons }
	};
}

