import Link from 'next/link';
import { useState } from 'react';
import DayNightToggle from './DayNightToggle';

function NavBar({ lightMode, setLightMode }) {
	const [ open, setOpen ] = useState(false);

	return (
		<nav
			className={
				lightMode ? (
					' z-50 flex justify-between text-dark sticky top-0 bg-white'
				) : (
					' z-50 sticky top-0  flex justify-between text-white bg-dark'
				)
			}
		>
			<h1 className="py-5  px-5 font-semibold text-xl items-center flex w-full">Emil Chigu</h1>
			<div className="sm:hidden  py-5  px-5 flex space-x-3 items-center">
				<DayNightToggle lightMode={lightMode} setLightMode={setLightMode} />
				<div className="space-y-2" onClick={() => setOpen(!open)}>
					<span className={lightMode ? 'block w-8 h-0.5 bg-dark' : 'block w-8 h-0.5 bg-white'} />
					<span className={lightMode ? 'block w-8 h-0.5 bg-dark' : 'block w-8 h-0.5 bg-white'} />
					<span className={lightMode ? 'block w-8 h-0.5 bg-dark' : 'block w-8 h-0.5 bg-white'} />
				</div>
			</div>
			<div className="hidden md:block w-full">
				<div className=" py-5  px-5 flex space-x-3 items-center justify-end">
					<div className="flex  space-x-3">
						<div className="font-semibold">
							<Link href="#home">
								<div className="cursor-pointer">
									<p className="font-light">HOME</p>
								</div>
							</Link>
						</div>
						<div className="font-semibold">
							<Link href="#about">
								<div className="cursor-pointer">
									<p className="font-light">ABOUT ME</p>
								</div>
							</Link>
						</div>
						<div className="font-semibold">
							<Link href="#builds">
								<div className="cursor-pointer">
									<p className="font-light">PROJECTS</p>
								</div>
							</Link>
						</div>
						<div className="font-semibold">
							<Link href="#contact">
								<div className="cursor-pointer">
									<p className="font-light">CONTACT</p>
								</div>
							</Link>
						</div>
					</div>
					<DayNightToggle lightMode={lightMode} setLightMode={setLightMode} />
				</div>
			</div>

			{open && (
				<div
					className={`fixed w-screen h-screen ${lightMode ? 'bg-dark' : 'bg-white'} opacity-40 blur-sm ${open
						? 'translate-x-0 '
						: 'translate-x-full'} ease-in-out duration-300`}
				>
					1234
				</div>
			)}
			<div
				className={`fixed  w-full flex flex-col z-50 ${open
					? 'translate-x-0 '
					: 'translate-x-full'} ease-in-out duration-300`}
			>
				<div
					className={`space-y-3 py-5  px-5 ${lightMode
						? 'bg-white'
						: 'bg-dark'} h-screen w-1/2 ml-auto text-center`}
				>
					<div className="text-right hover:cursor-pointer group ">
						<h1 onClick={() => setOpen(!open)} className=" font-bold text-2xl ">
							&#88;
						</h1>
					</div>
					<div className="font-semibold">
						<Link href="/#home">
							<div>
								<p className="text-highlight font-extrabold">&#8544;</p>
								<p className="font-light">HOME</p>
							</div>
						</Link>
					</div>
					<div className="font-semibold">
						<Link href="/#about">
							<div>
								<p className="text-highlight font-extrabold">&#8545;</p>
								<p className="font-light">ABOUT ME</p>
							</div>
						</Link>
					</div>
					<div className="font-semibold">
						<Link href="/#home">
							<div>
								<p className="text-highlight font-extrabold">&#8546;</p>
								<p className="font-light">EXPERIENCE</p>
							</div>
						</Link>
					</div>
					<div className="font-semibold">
						<Link href="/#home">
							<div>
								<p className="text-highlight font-extrabold">&#8547;</p>
								<p className="font-light">CONTACT</p>
							</div>
						</Link>
					</div>

					<div>CV</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
