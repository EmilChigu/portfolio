import React from 'react';
import TitleComponent from './TitleComponent';
import { FaPython } from 'react-icons/fa';

function About({ light }) {
	return (
		<div id="about" className={`${light ? 'text-dark' : 'text-white'} py-3 px-5 flex-grow-1 space-y-3 `}>
			<TitleComponent title={'ABOUT ME'} light={light} />
			<div className="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero sit cupiditate nesciunt, minus
				incidunt, ea illum omnis similique vel voluptatum, rem ad consectetur qui error totam fugit tempora
				ipsum?
			</div>
			<div className="text-lg text-center">Here is a list of technologies i have been working with:</div>
			<div className="flex  space-x-3">
				<div className="w-1/2 space-y-2 text-center">
					<div>Javascript</div>

					<div>Wordpress</div>
					<div>Linux</div>
				</div>
				<div className="w-1/2 space-y-2 text-center">
					<div>MERN Stack</div>
					<div>HTML/CSS</div>

					<div>Git</div>
				</div>
				<div className="w-1/2 space-y-2 text-center">
					<div>Python</div>
					<div>Django</div>
					<div>NextJS</div>
				</div>
			</div>
		</div>
	);
}

export default About;
