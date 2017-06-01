import React from 'react';

const ButtonComponent = ({button, onButtonClick}) => {
	const buttonStyle = button.label;
			
	return (
		<button 
			className={buttonStyle} 
			type="button"
			onClick={onButtonClick}>
			{button.value}
		</button>
	);
}
export default ButtonComponent;

