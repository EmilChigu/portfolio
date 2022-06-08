import React from 'react';

function TitleComponent({ title, light }) {
	return (
		<div className="flex items-center justify-center  space-between space-x-3 ">
			<div className={light ? 'block w-24 h-0.5 bg-primary opacity-90' : 'block w-24 h-0.5 bg-primary'} />
			<h1 className={`${light ? 'text-dark opacity-90' : 'text-white'} text-2xl front-bold text-center`}>
				{title}
			</h1>
			<div className={light ? 'block w-24 h-0.5 bg-primary opacity-90' : 'block w-24 h-0.5 bg-primary'} />
		</div>
	);
}

export default TitleComponent;
