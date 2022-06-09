import { useState } from 'react';
import About from './components/About';
import ContactMe from './components/ContactMe';
import HeadComponent from './components/HeadComponent';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import OtherProjects from './components/OtherProjects';

export default function Home() {
	const [ light, setLight ] = useState(false);

	const changeMode = () => {
		setLight(!light);
	};
	return (
		<div className="scroll-smooth">
			<HeadComponent />
			<NavBar lightMode={light} setLightMode={changeMode} />
			<div className={`${light ? 'bg-white' : 'bg-dark'} h-screen flex  items-center sm:px-6    `}>
				<div className=" scroll-mt-24 py-3 px-5 grow space-y-2  " id="home">
					<p className="text-primary font-semibold text-lg sm:text-xl">My name is</p>
					<h1 className={`${light ? 'text-dark' : 'text-white'} text-5xl sm:text-8xl font-black`}>
						Emil Chigu
					</h1>
					<p className={`${light ? 'text-dark' : 'text-white'} text-3xl opacity-80 sm:text-5xl`}>
						Full stack web developer
					</p>
					<p className={`${light ? 'text-dark' : 'text-white'} text-2xl opacity-80 sm:text-4xl`}>
						Cyber security enthusiast
					</p>
					<p className={`${light ? 'text-dark' : 'text-white'}  text-lg sm:w-1/2`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga velit non qui deserunt odit
						quas beatae alias nesciunt eum consequuntur doloribus atque, minima ullam rem corporis
						praesentium! Ipsam, consectetur?
					</p>
				</div>
			</div>
			<div className={`${light ? 'bg-white' : 'bg-dark'} h-full  flex flex-col  items-center space-y-5`}>
				<About light={light} />
				<MyProjects light={light} />
				<OtherProjects light={light} />
				<ContactMe light={light} />
				<Footer light={light} />
			</div>
		</div>
	);
}
