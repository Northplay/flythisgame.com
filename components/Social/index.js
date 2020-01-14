import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Patreon from './patreon.svg';
import Twitter from './bird.svg';
import Facebook from './face.svg';
import Presskit from './box.svg';
import Email from './plane.svg';

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 60px 0 40px 0;

	@media (max-width: 420px) {
		margin: 40px 0;
	}
`;

const Row = styled.div`
	display: flex;
	justify-content: space-around;
	margin-bottom: 30px;
	width: 100%;

	@media (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (max-width: 420px) {
		margin: 0;
	}
`;

const StyledLink = styled.a`
	align-items: center;
	color: #fff;
	display: flex;
	font-size: 28px;
	font-weight: 500;
	line-height: 36px;
	text-decoration: none;
	padding: 0 10px;

	@media (max-width: 720px) {
		margin: 0 0 10px 0;
	}

	@media (max-width: 420px) {
		font-size: 24px;
	}

	&:hover {
		text-decoration: underline;
	}

	svg {
		margin-right: 10px;
	}
`;

const IconLink = ({ icon, text, url }) => (
	<StyledLink href={url} target="_blank">
		{icon}
		{/* <Icon src={icon.src} height={icon.height} width={icon.width} /> */}
		<span>{text}</span>
	</StyledLink>
);

IconLink.propTypes = {
	icon: PropTypes.node.isRequired,
	text: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

const Social = () => (
	<Container>
		<Row>
			<IconLink icon={<Patreon />} url="https://patreon.com/northplay" text="patreon" />
			<IconLink icon={<Twitter />} url="https://twitter.com/heynorthplay" text="@heynorthplay" />
			<IconLink icon={<Facebook />} url="https://facebook.com/northplay" text="/northplay" />
			{/* <IconLink
				icon={<`Press`kit />}
				url="https://www.dropbox.com/sh/b2gnx6img4hazbt/AAC2Lzh6rXEDMfUDOPTLHnmTa?dl=1"
				text="presskit"
			/> */}
			<IconLink
				icon={<Email />}
				url="mailto:hey@northplay.co?subject=Fly%20THIS"
				text="hey@northplay.co"
			/>
		</Row>
	</Container>
);

export default Social;
