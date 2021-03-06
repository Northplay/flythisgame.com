import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Page from 'components/Page';
import Header from 'components/Header';
import Video from 'components/Video';
import Screenshots from 'components/Screenshots';
import Social from 'components/Social';
import Community from 'components/Community';
import JoinTheClub from 'components/JoinTheClub';
import Northplay from 'components/Northplay';
import { appStoreLink, playStoreLink } from 'lib/links';

import preview1 from 'assets/screenshot-preview-1.png';
import preview2 from 'assets/screenshot-preview-2.png';
import preview3 from 'assets/screenshot-preview-3.png';
import preview4 from 'assets/screenshot-preview-4.png';
import preview5 from 'assets/screenshot-preview-5.png';

import full1 from 'assets/screenshot-1.jpg';
import full2 from 'assets/screenshot-2.jpg';
import full3 from 'assets/screenshot-3.jpg';
import full4 from 'assets/screenshot-4.jpg';
import full5 from 'assets/screenshot-5.jpg';

const Content = styled.div`
	max-width: ${p => p.theme.site.width};
	margin: 0 auto;
	flex: 1 0 auto;
`;

const ContentWrap = styled.div`
	background-color: rgb(31, 59, 105);
`;

const Description = styled.div`
	max-width: 645px;
	margin: 60px auto;
	text-align: center;

	h1 {
		margin-bottom: 40px;
	}

	p {
		color: ${p => p.theme.colors.babyBlue};
	}
`;

const Index = () => (
	<Page>
		<Head>
			<title>Fly THIS!</title>
			<meta property="og:image" content="/static/socialshare.png" />
			<meta property="og:title" content="Fly THIS!" />
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
		<Header />
		<ContentWrap>
		<Content>
			<Description>
				<h1>
					A Game of Explosive Airplane Action That Will Challenge Your Inner Air Traffic Controller
				</h1>
				<p>
					The sequel to the award winning <a href="https://conductthis.com/this">Conduct THIS!</a>{' '}
					takes players to the skies in a race against time to bring passengers safely to their
					destination by drawing flight paths and avoiding collisions in increasingly challenging
					action-puzzles.
				</p>
			</Description>
			<Video id="y6vURGqRMdg" />
			<Screenshots
				images={[
					{ preview: preview1, full: full1 },
					{ preview: preview2, full: full2 },
					{ preview: preview3, full: full3 },
					{ preview: preview4, full: full4 },
					{ preview: preview5, full: full5 },
				]}
			/>
			<Social />
			<Community />
			<JoinTheClub />
		</Content>
		<Northplay />
		</ContentWrap>
	</Page>
);

export default Index;
