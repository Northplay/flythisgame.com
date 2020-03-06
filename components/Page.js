import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Navigation from './Navigation';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Page = ({ children, backgroundColor }) => (
	<Container backgroundColor={backgroundColor}>
		<Head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<link rel="manifest" href="/static/manifest.json" />
			<meta name="msapplication-TileImage" content="/static/mstile-310x310.png" />
			<meta name="msapplication-TileColor" content="#1d396a" />
			<link rel="shortcut icon" href="/static/favicon.ico" />
			<link rel="icon" type="image/png" href="/static/favicon-64x64.png" />
			<link
				rel="apple-touch-icon-precomposed"
				sizes="144x144"
				href="/static/apple-touch-icon-precomposed-144x144.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="114x114"
				href="/static/apple-touch-icon-precomposed-114x114.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				sizes="72x72"
				href="/static/apple-touch-icon-precomposed-72x72.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				href="/static/apple-touch-icon-precomposed-57x57.png"
			/>
		</Head>
		{/* <Navigation /> */}
		{children}
	</Container>
);

export default Page;
