import React from 'react';

const ButtonComponent = ({value, onButtonClick}) => {
	return <button onClick={onButtonClick}>{value}</button>;
}

export default ButtonComponent;