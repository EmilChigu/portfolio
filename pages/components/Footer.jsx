import React from 'react';

function Footer({ light }) {
	return (
		<React.Fragment>
			<div className={` scroll-mt-24 ${light ? 'text-dark' : 'text-white'} py-3 px-5 text-center`}>
				Web Design inspired by <span className="text-primary">Brittany Chiang</span>
			</div>
		</React.Fragment>
	);
}

export default Footer;
