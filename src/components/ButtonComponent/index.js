import React from 'react';

const ButtonComponent = ({startValue, value, onButtonClick}) => {
	let buttonStyle = "none";
			switch(startValue) {
				case 1: 
					buttonStyle = "btn1";
					break;
				case 2: 
					buttonStyle = "btn2";
					break;
				case 3:
					buttonStyle = "btn3";
					break;
				case 4:
					buttonStyle = "btn4";
					break;
			}
	return (
		<button 
			className={buttonStyle} 
			onClick={onButtonClick} 
			type="button">
			{value}
		</button>
	);
}

export default ButtonComponent;