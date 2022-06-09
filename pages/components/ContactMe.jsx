import React, { useState } from 'react';
import ThankYou from './ThankYou';
import TitleComponent from './TitleComponent';

function ContactMe({ light }) {
	const [ sent, setSent ] = useState(false);
	const [ formData, setFormData ] = useState({ surname: '', subject: '', message: '' });

	const handleInput = (input) => (e) => {
		setFormData({ ...formData, [input]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		setSent(true);
	};

	return (
		<React.Fragment>
			<div id="contact" className={` scroll-mt-24 text-white text-lg w-full px-5 sm:w-3/4 space-y-10 `}>
				<TitleComponent title={'Get in touch'} light={light} />
				{sent ? (
					<div className="flex justify-center text-center bg-dark rounded-md py-10">
						<ThankYou light={light} />
					</div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-3 bg-dark rounded-md p-3">
						<div className="flex space-x-3">
							<div className="space-y-1 w-1/2">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									className={`w-full border-primary text-dark`}
									onChange={handleInput('name')}
									required
								/>
							</div>
							<div className="space-y-1 w-1/2">
								<label htmlFor="surname">Surname</label>
								<input
									type="text"
									name="surname"
									id="surname"
									className="w-full border-primary text-dark"
									onChange={handleInput('surname')}
									required
								/>
							</div>
						</div>

						<div className="space-y-1">
							<label htmlFor="subject">Subject</label>
							<br />
							<input
								type="text"
								name="subject"
								id="subject"
								className={`w-full border-primary text-dark`}
								onChange={handleInput('subject')}
								required
							/>
						</div>
						<div className="space-y-1">
							<label htmlFor="subject">Message</label>
							<br />
							<textarea
								rows="6"
								className="w-full border-primary text-dark"
								id="subject"
								name="message"
								onChange={handleInput('message')}
								required
							/>
						</div>
						<div>
							<button
								type="submit"
								className="w-full px-3 py-4 bg-primary text-white font-semibold rounded-lg text-xl"
							>
								Send Message
							</button>
						</div>
					</form>
				)}
			</div>
		</React.Fragment>
	);
}

export default ContactMe;
