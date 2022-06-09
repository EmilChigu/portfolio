import React from 'react';
import TitleComponent from './TitleComponent';
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

function OtherProjects({ light }) {
	return (
		<React.Fragment>
			<div
				id="other"
				className={` scroll-mt-24 ${light ? 'text-dark' : 'text-white'} py-3 px-5 sm:w-3/4 space-y-3 w-3/4 `}
			>
				<TitleComponent title={'Other Builds'} light={light} />
				<div className="space-y-3">
					<p className="text-center">Other projects i have worked n can be found on my github</p>
					<div className="flex sm:justify-center space-x-3">
						<div className="bg-white rounded-lg shadow-sm text-dark w-1/2 sm:w-1/6 p-3 space-y-3">
							<div className="text-4xl flex justify-end">
								<a href="" target="_blank" rel="noopener noreferrer" className="hover:animate-bounce">
									<FaGithub />
								</a>
							</div>
							<div>
								<h2 className="font-semibold txt-xl">PHP calculator</h2>
								<p>A simple PHP calculator</p>
							</div>
						</div>
						<div className="bg-white rounded-lg shadow-sm text-dark w-1/2 sm:w-1/6 p-3 space-y-3 ">
							<div className="text-4xl flex justify-end">
								<a href="" target="_blank" rel="noopener noreferrer" className="hover:animate-bounce">
									<FaGithub />
								</a>
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
