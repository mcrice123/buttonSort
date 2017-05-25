import React, { Component } from 'react';

const ButtonComponent = ({button}) => {
	const buttonStyle = button.id;
			
	return (
		<button 
			className={buttonStyle} 
			type="button">
			{button.value}
		</button>
	);
}

