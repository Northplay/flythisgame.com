import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { appStoreLink, playStoreLink } from 'lib/links';
import Navigation from './Navigation';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Page = ({ title, children, backgroundColor }) => (
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
			<title>{title}</title>
			<meta property="og:image" content="/static/socialshare.png" />
			<meta property="og:title" content={title} />
			<meta property="og:url" content="https://flythisgame.com" />
			<meta property="og:site_name" content="Fly THIS!" />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="app" />
			<meta name="twitter:site" content="@heynorthplay" />
			<meta
				name="twitter:description"
				content="A Game of Explosive Airplane Action That Will Challenge Your Inner Air Traffic Controller"
			/>
			<meta name="twitter:app:id:iphone" content="1414444873" />
			<meta name="twitter:app:url:iphone" content={appStoreLink} />
			<meta name="twitter:app:id:ipad" content="1414444873" />
			<meta name="twitter:app:url:iphone" content={appStoreLink} />
			<meta name="twitter:app:id:googleplay" content="co.northplay.FlyTHIS" />
			<meta name="twitter:app:url:googleplay" content={playStoreLink} />
		</Head>
		<Navigation />
		{children}
	</Container>
);

Page.propTypes = {
	title: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
};

export default Page;
