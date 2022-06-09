import Link from 'next/link';
import { useState } from 'react';
import DayNightToggle from './DayNightToggle';
import { FaTimes, FaStream } from 'react-icons/fa';

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
			<h1 className="py-5  px-5 font-semibold text-3xl items-center flex w-full text-primary">Emil Chigu</h1>
			<div className="sm:hidden  py-5  px-5 flex space-x-3 items-center">
				<DayNightToggle lightMode={lightMode} setLightMode={setLightMode} />
				<div className="space-y-2" onClick={() => setOpen(!open)}>
					<span className={lightMode ? 'bg-dark text-2xl' : 'bg-white text-2xl'}>
						<FaStream />
					</span>
				</div>
			</div>
			<div className="hidden md:block w-full">
				<div className=" py-5  px-5 flex space-x-3 items-center justify-end">
					<div className="flex  space-x-3 ">
						<div className="font-semibold">
							<Link href="#home">
								<div className="cursor-pointer">
									<p className="text-lg">HOME</p>
								</div>
							</Link>
						</div>
						<div className="font-semibold">
							<Link href="#about">
								<div className="cursor-pointer">
									<p className="text-lg">ABOUT ME</p>
								</div>
							</Link>
						</div>
						<div className="font-semibold">
							<Link href="#builds">
								<div className="cursor-pointer">
									<p className="text-lg">PROJECTS</p>
								</div>
							</Link>
						</div>
						<div className="font-semibold">
							<Link href="#contact">
								<div className="cursor-pointer">
									<p className="text-lg">CONTACT</p>
								</div>
							</Link>
						</div>
					</div>
					<DayNightToggle lightMode={lightMode} setLightMode={setLightMode} />
				</div>
			</div>

			{open && (
				<div
					className={`fixed w-screen h-screen backdrop-blur-sm   ${open
						? 'translate-x-0 '
						: 'translate-x-full'} ease-in-out duration-300`}
				/>
			)}
			<div
				className={`fixed  w-full flex flex-col z-50 ${open
					? 'translate-x-0 '
					: 'translate-x-full'} ease-in-out duration-300`}
			>
				<div
					className={`space-y-8 py-5  px-5 ${lightMode
						? 'bg-white'
						: 'bg-light'} h-screen w-3/4 ml-auto text-center shadow-md flex flex-col justify-center `}
				>
					<div className="hover:cursor-pointer group m-5 fixed top-0 right-0  ">
						<h1 onClick={() => setOpen(!open)} className=" font-bold text-5xl ">
							<FaTimes />
						</h1>
					</div>
					<div className="font-semibold">
						<Link href="/#home">
							<div>
								<p className="text-lg">HOME</p>
							</div>
						</Link>
					</div>
					<div className="font-semibold">
						<Link href="/#about">
							<div>
								<p className="text-lg">ABOUT ME</p>
							</div>
						</Link>
					</div>
					<div className="font-semibold">
						<Link href="/#builds">
							<div>
								<p className="text-lg">Projects</p>
							</div>
						</Link>
					</div>
					<div className="font-semibold">
						<Link href="/#contact">
							<div>
								<p className="text-lg">CONTACT</p>
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
