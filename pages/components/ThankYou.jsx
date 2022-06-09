import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';

function ThankYou({ light }) {
	return (
		<div className="p-3 ">
			<div className="space-y-4">
				<div className="animate-bounce text-4xl flex justify-center">
					<FaEnvelopeOpenText />
				</div>
				<h1 className="p3 text-4xl">THANK YOU!</h1>
				<p>I will get back to you as soon as i can.</p>
			</div>
		</div>
	);
}

export default ThankYou;
