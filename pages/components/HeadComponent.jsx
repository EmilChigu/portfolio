import Head from 'next/head';

function HeadComponent() {
	return (
		<Head>
			<meta charset="utf-8" />
			<title>Emil Chigu</title>
			{/* <link rel="icon" href="favicon.ico" type="image/x-icon" /> */}
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta
				name="keywords"
				content="web development, reactjs, python, javascript, django, wordpress, html, css, wix, full stack developer, mongodb, postgresql"
			/>
			<meta
				content="I am a full stack web-developer specialising in Javascript, python and web-app pen-testing."
				name="description"
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,100&family=Open+Sans:wght@300&display=swap"
				rel="stylesheet"
			/>
		</Head>
	);
}

export default HeadComponent;
