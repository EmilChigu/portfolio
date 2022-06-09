import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DayNightToggle({ lightMode, setLightMode }) {
	return (
		<div>
			<div className="flex items-center justify-center w-full space-x-1 ">
				<FaMoon />
				<label htmlFor="toggleB" className="flex items-center cursor-pointer">
					<div className="relative">
						<input type="checkbox" id="toggleB" className="sr-only" />

						<div
							className={`block ${lightMode ? 'bg-dark' : 'bg-white'} opacity-10 w-14 h-8 rounded-full`}
						/>

						<div
							onClick={setLightMode}
							className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition duration-300 ease-in-out"
						/>
					</div>
				</label>
				<FaSun />
			</div>{' '}
		</div>
	);
}

export default DayNightToggle;
