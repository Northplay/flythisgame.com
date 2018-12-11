import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from 'assets/logo.png';
import world from 'assets/world.png';
import preorder from 'assets/preorder.png';

const Container = styled.div`
	background-image: url(${world});
	bakground-size: 1219px 898px;
	background-repeat: no-repeat;
	background-position: top center;
	width: 100%;
	height: 898px;
	flex: 1 0 898px;
`;

const Content = styled.div`
	max-width: ${p => p.theme.site.width};
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const Logo = styled.img`
	width: 326px;
	height: 251px;
`;

const PlayTrailer = styled.button`
	appearance: none;
	background: transparent;
	border: none;
	color: ${p => p.theme.colors.yellow};
	font-family: ${p => p.theme.font.family.heading};
	font-size: ${p => p.theme.font.size.regular};
	margin-top: 10px;
`;

const CenterWrap = styled.div`
	flex: 1 1 65%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: column;
`;

const BottomWrap = styled.div`
	flex: 1 1 35%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const AppStoreLink = styled.a`
	img {
		width: 240px;
		height: 80px;
	}
	margin-bottom: 65px;
`;

const Header = () => (
	<Container>
		<Content>
			<CenterWrap>
				<Logo src={logo} alt="Fly THIS!" />
				<PlayTrailer
					onClick={e => {
						e.preventDefault();
					}}>
					▶︎ Watch Trailer
				</PlayTrailer>
			</CenterWrap>
			<BottomWrap>
				<AppStoreLink
					href="https://itunes.apple.com/us/app/conduct-ar/id1414444873?ls=1&mt=8&at=1010lwVg&ct=flythis-site"
					alt="Pre-order on the App Store">
					<img src={preorder} alt="Pre-order" />
				</AppStoreLink>
			</BottomWrap>
		</Content>
	</Container>
);

export default Header;
