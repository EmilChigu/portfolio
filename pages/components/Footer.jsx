import React from 'react';

function Footer({ light }) {
	return (
		<React.Fragment>
			<div className={` scroll-mt-24 ${light ? 'text-dark' : 'text-white'} py-3 px-5 text-center`}>
				By <span className="text-primary">Emil Chigu</span>
			</div>
		</React.Fragment>
	);
}

export default Footer;
