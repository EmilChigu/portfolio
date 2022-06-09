import React from 'react';
import TitleComponent from './TitleComponent';
import {
	FaReact,
	FaPython,
	FaNodeJs,
	FaGithub,
	FaGitHub,
	FaDigitalOcean,
	FaUbuntu,
	FaHtml5,
	FaCss3,
	FaExternalLinkSquareAlt
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiDjango } from 'react-icons/si';

function MyProjects({ light }) {
	return (
		<div
			id="builds"
			className={`scroll-mt-24 ${light ? 'text-dark' : 'text-white'} py-3 px-5 sm:w-3/4 space-y-10 text-center `}
		>
			<TitleComponent title={'My Builds'} light={light} />
			<div className="flex space-x-3 ">
				<div className="flex flex-col items-center justify-center space-y-3 text-3xl">
					<div data-tooltip-target="tooltip-default" className="hover:animate-bounce">
						<FaGithub />
					</div>
					<div className="hover:animate-bounce">
						<FaExternalLinkSquareAlt />
					</div>
				</div>
				<div>
					<div className="space-y-3">
						<h2 className="font-semibold text-xl">Compliance Aid v2.0</h2>
						<p>
							Majority of my coding time has been dedicated to perfecting my Saas project Compliance Aid,
							a web application for staff management in the health care supplier industry.
						</p>

						<p>
							Version 2 of Compliance Aid is built using the MERN stack, with JWT for authentication. The
							app is hosted on an ubuntu server on Digital Ocean, along with a managed triple cluster
							database.
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 text-3xl">
					<div>
						<FaReact />
					</div>
					<div>
						<SiMongodb />
					</div>
					<div>
						<SiTailwindcss />
					</div>
					<div>
						<FaUbuntu />
					</div>
				</div>
			</div>
			<div className="flex  space-x-3 mt-5 justify-between">
				<div className="flex flex-col items-center justify-center space-y-3 text-3xl">
					<div data-tooltip-target="tooltip-default">
						<FaGithub />
					</div>
					<div>
						<FaExternalLinkSquareAlt />
					</div>
				</div>
				<div>
					<div className="space-y-3">
						<h2 className="font-semibold text-xl">Tafara Care Services</h2>
						<p>
							This was s simple static website built for a UK business. The website very simple animations
							and contact form,
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-items-end justify-center space-y-3 text-3xl  ">
					<div>
						<FaHtml5 />
					</div>
					<div>
						<FaCss3 />
					</div>
					<div>
						<SiJavascript />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyProjects;
