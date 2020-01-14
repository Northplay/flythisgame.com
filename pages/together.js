import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Page from 'components/Page';
import Video from 'components/Video';
import Social from 'components/Social';
import Community from 'components/Community';
import JoinTheClub from 'components/JoinTheClub';
import Northplay from 'components/Northplay';

const Content = styled.div`
	max-width: ${p => p.theme.site.width};
	margin: 0 auto;
	flex: 1 0 auto;
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

	.arrives {
		margin-top: 20px;
		padding: 10px 15px;
		border-radius: 30px;
		background-color: rgb(252, 18, 32);
		color: #fff;
		font-family: ${p => p.theme.font.family.heading};
		font-weight: ${p => p.theme.font.weight.regular};
		font-size: ${p => p.theme.font.weight.large};
		font-style: italic;
		display: inline-block;
	}
`;

const Index = () => (
	<Page title="Fly TOGETHER!" backgroundColor="#141519">
		<Head>
			<title>Conduct TOGETHER!</title>
			<meta property="og:image" content="/static/social-together.png" />
			<meta property="og:title" content="Conduct TOGETHER!" />
			<meta property="og:url" content="https://flythisgame.com/together" />
			<meta property="og:site_name" content="Fly TOGETHER!" />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="app" />
			<meta name="twitter:site" content="@heynorthplay" />
			<meta
				name="twitter:description"
				content="Get ready to take to the skies in local multiplayer mayhem"
			/>
		</Head>
		<Content>
			<Video id="DnEmCE4IsBg" />
			<Description>
				<h1>
					The award winning flight controller action puzzle
				</h1>
				<p>
					Get ready to take to the skies in local multiplayer mayhem. Co-pilot with friends or compete to transport the most passengers in up to 8-player battles.
				</p>
				<div className="arrives">Arriving in 2020</div>
			</Description>
			<Social />
			<Community />
			<JoinTheClub />
		</Content>
		<Northplay />
	</Page>
);

export default Index;
