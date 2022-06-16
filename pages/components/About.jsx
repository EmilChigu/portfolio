import React from 'react';
import TitleComponent from './TitleComponent';


function About({ light }) {
	return (
		<div id="about" className={`scroll-mt-24 ${light ? 'text-dark' : 'text-white'} py-3 px-5 sm:w-3/4 space-y-3 `}>
			<TitleComponent title={'ABOUT ME'} light={light} />
			<div className="text-lg space-y-3">
								<p>Hi, my name is Emil Chigu and i&apos;m looking forward to working with you. I first became acquainted with wed development 
									when i was a product developer for a nutritional supplement company in 
									<span className='text-primary'>2018</span>. After playing around with 
									wordpress, wix and other drag and drop website builders, I realised I wanted 
									to be able to build more custom and unique websites, and that led me to signing up for a course on <span className='text-primary'>Udemy and FreeCodeCamp</span> to learn web development.</p>
								<p>Since then, I have worked on a number of personal and freelance projects. My main goal 
									currently is to advance my skill as a <span className='text-primary'>full stack 
									developer</span> and continue to learn about <span className='text-primary'>web 
									app pen-testing and security.</span> </p>
								<p>Recently I have started working on my personal blog that will focus on teaching 
									the core concepts of web app development and web app security. I found that it is difficult to teach something that you do not understand.</p>

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
