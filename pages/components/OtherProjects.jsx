import React from 'react';
import TitleComponent from './TitleComponent';
import {
	FaReact,
	FaPython,
	FaNodeJs,
	FaGithub,
	FaDigitalOcean,
	FaUbuntu,
	FaHtml5,
	FaCss3,
	FaExternalLinkSquareAlt
} from 'react-icons/fa';

function OtherProjects({ light }) {
	return (
		<React.Fragment>
			<div id="other" className={`${light ? 'text-dark' : 'text-white'} py-3 px-5 flex-grow-1 space-y-3 `}>
				<TitleComponent title={'Other Builds'} light={light} />
				<div className="space-y-3">
					<p>Other projects i have worked n can be found on my github</p>
					<div className="flex space-x-3">
						<div className="bg-white rounded-lg shadow-sm text-dark w-1/2 p-2 space-y-3">
							<div className="text-4xl flex justify-end">
								<FaGithub />
							</div>
							<div>
								<h2 className="font-semibold txt-xl">PHP calculator</h2>
								<p>A simple PHP calculator</p>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow-sm text-dark w-1/2 p-2 space-y-3">
							<div className="text-4xl flex justify-end">
								<FaGithub />
							</div>
							<div>
								<h2 className="font-semibold txt-xl">Port Scanner</h2>
								<p>A simple PHP calculator</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default OtherProjects;
