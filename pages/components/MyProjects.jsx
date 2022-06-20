import React from 'react';
import TitleComponent from './TitleComponent';
import {
	FaReact,
	FaGithub,
	FaUbuntu,
	FaHtml5,
	FaCss3,
	FaExternalLinkSquareAlt,
	FaNodeJs,
	FaCpanel,
	FaDigitalOcean,
	FaAws
	
	
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiNetlify,SiNextdotjs  } from 'react-icons/si';

function MyProjects({ light }) {
	return (
		<div
			id="builds"
			className={`scroll-mt-24 ${light ? 'text-dark' : 'text-white'} py-3 px-5 sm:w-3/4 space-y-12 text-center `}
		>
			<TitleComponent title={'My Builds'} light={light} />
			<div className=" space-y-3 ">
				<div className="flex  items-center justify-center space-x-3  text-3xl">
					<div data-tooltip-target="tooltip-default" className="hover:animate-bounce cursor-pointer">
						<a href="http://" target="_blank" rel="noopener noreferrer">
							<FaGithub />
						</a>
					</div>
					<div className="hover:animate-bounce cursor-pointer">
						<a href="https://www.compliance-aid.co.uk" target="_blank" rel="noopener noreferrer">
							<FaExternalLinkSquareAlt />
						</a>
					</div>
				</div>
				<div>
					<div className="space-y-3">
						<h2 className="font-semibold text-xl">Compliance Aid v2.0</h2>
						<p>
							Majority of my coding time has been dedicated to perfecting a Saas project for a startapp called Compliance Aid. The application
							is for staff management in the health care supplier industry.
						</p>

						<p>
							Version 2 of Compliance Aid is built using the MERN stack, with JWT for authentication. The
							app is hosted on an ubuntu server on Digital Ocean, along with a managed triple cluster
							database.
						</p>
					</div>
				</div>
				<div className="flex  items-center justify-center space-x-3  text-3xl">
					<div>
						<FaReact />
					</div>
					<div>
						<SiMongodb />
					</div>
					<div>
						<FaNodeJs />
					</div>
					<div>
						<SiTailwindcss />
					</div>
					<div>
						<FaUbuntu />
					</div>
					<div>
						<FaDigitalOcean />
					</div>
				</div>
			</div>
			<div className="space-y-3 mt-5 justify-between">
				<div className="flex items-center justify-center space-x-3 text-3xl">
					<div data-tooltip-target="tooltip-default" className="hover:animate-bounce cursor-pointer">
						<a href="https://github.com/EmilChigu/portfolio" target="_blank" rel="noopener noreferrer" >
						<FaGithub />
						</a>
					</div>
					<div className="hover:animate-bounce cursor-pointer">
						<a href="https://www.emilchigu.com" target="_blank" rel="noopener noreferrer">
							<FaExternalLinkSquareAlt />
						</a>
					</div>
				</div>
				<div>
					<div className="space-y-3">
						<h2 className="font-semibold text-xl">My Portfolio</h2>
						<p>
							This portfolio was built using NextJS and i hosted on netlify. Majority of the styling was done using tailwind css with static resource hosted on AWS S3. I found NextJS a lot more friendly to work with that ReactJS and it allows for great SEO.
						</p>
					</div>
				</div>
				<div className="flex  items-center justify-items-end justify-center space-x-3 text-3xl  ">
					<div>
						<SiNetlify />
					</div>
					<div>
						<SiNextdotjs />
					</div>
					<div>
						<SiJavascript />
					</div>
					<div>
						<FaAws />
					</div>
				</div>
			</div>
			<div className="space-y-3 mt-5 justify-between">
				<div className="flex items-center justify-center space-x-3 text-3xl">
					<div data-tooltip-target="tooltip-default" className="hover:animate-bounce cursor-pointer">
						<a href="http://" target="_blank" rel="noopener noreferrer" />
						<FaGithub />
					</div>
					<div className="hover:animate-bounce cursor-pointer">
						<a href="https://www.tafaracareservices.com" target="_blank" rel="noopener noreferrer">
							<FaExternalLinkSquareAlt />
						</a>
					</div>
				</div>
				<div>
					<div className="space-y-3">
						<h2 className="font-semibold text-xl">Tafara Care Services</h2>
						<p>
							This was a simple static business website, The website features very simple animations and a
							contact form.
						</p>
					</div>
				</div>
				<div className="flex  items-center justify-items-end justify-center space-x-3 text-3xl  ">
					<div>
						<FaHtml5 />
					</div>
					<div>
						<FaCss3 />
					</div>
					<div>
						<SiJavascript />
					</div>
					<div>
						<FaCpanel />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyProjects;
