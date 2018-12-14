import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import MobileDetect from 'mobile-detect';
import styled from 'styled-components';
import Head from 'next/head';

import logo from 'assets/logo.png';
import world from 'assets/world.png';
import preorder from 'assets/preorder.png';

const Logo = styled.img`
	width: 326px;
	height: 251px;
`;

const GameWrap = styled.div`
	width: 960px;
	height: 600px;
	position: absolute;
	top: 115px;
	left: 50%;
`;

const Loading = styled.div`
	position: absolute;
	width: 64px;
	height: 64px;

	.lds-ring {
		display: ${p => (p.isLoading ? 'block' : 'none')};
		position: relative;
		left: 50%;
		/* top: 50%; */
		width: 64px;
		height: 64px;
		z-index: 500;
	}
	.lds-ring div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 51px;
		height: 51px;
		margin: 6px;
		border: 6px solid #fff;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: #fff transparent transparent transparent;
	}
	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}
	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}
	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}
`;

const GameContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	left: -50%;
	display: flex;
	justify-content: center;
	align-items: center;

	#__ReactUnityWebGL_1__ {
		display: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const Container = styled.div`
	--animation-duration: 0.25s;
	--animation-play-state: ${p => (p.isPlayingDemo ? 'running' : 'paused')};

	animation: worldOut ease-in var(--animation-duration) 1 forwards var(--animation-play-state);
	background-image: url(${world});
	background-repeat: no-repeat;
	bakground-size: 1219px 898px;
	flex: 1 0 898px;
	height: 898px;
	position: relative;
	width: 100%;

	@keyframes worldOut {
		0% {
			background-position: center top;
		}
		100% {
			background-position: center -1000px;
		}
	}

	@keyframes logoOut {
		0% {
			transform: initial;
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			transform: translateY(-1000px);
			opacity: 0;
		}
	}

	${Logo} {
		animation: logoOut ease-in var(--animation-duration) 1 forwards var(--animation-play-state);
	}

	button {
		animation: logoOut ease-in var(--animation-duration) 1 forwards var(--animation-play-state);
	}
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

const PlayTrailer = styled.button`
	appearance: none;
	background: none;
	border: none;
	cursor: pointer;
	color: ${p => p.theme.colors.yellow};
	font-family: ${p => p.theme.font.family.heading};
	font-size: ${p => p.theme.font.size.regular};
	margin-top: 10px;
	transition: 0.15s ease;

	&:hover {
		color: #fff;
	}
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

const Preload = styled.img`
	opacity: 0;
	width: 1px;
	height: 1px;
	position: absolute;
	left: -10000px;
	top: -10000px;
`;

class Header extends React.Component {
	static hasWebGL() {
		return 'WebGLRenderingContext' in window;
	}

	constructor(props) {
		super(props);

		this.state = { isPlayingDemo: false, isGameLoading: false, hasWebGL: false };
		this.startGame = this.startGame.bind(this);
		this.unityContent = new UnityContent(
			'static/Web/Build/Web.json',
			'static/Web/Build/UnityLoader.js',
		);
	}

	componentDidMount() {
		this.unityContent.on('loaded', () => {
			this.setState({ isGameLoading: false });
		});

		const md = new MobileDetect(window.navigator.userAgent);
		if (md.mobile() === null && Header.hasWebGL()) {
			this.setState({ hasWebGL: true });
		}
	}

	startGame() {
		const { isPlayingDemo } = this.state;
		if (isPlayingDemo) {
			return;
		}

		this.setState({ isPlayingDemo: true, isGameLoading: true });
	}

	render() {
		const { isPlayingDemo, isGameLoading, hasWebGL } = this.state;

		return (
			<Container isPlayingDemo={isPlayingDemo}>
				<Head>
					<link rel="preload" href="/static/Web/Build/Web.asm.code.unityweb" />
					<link rel="preload" href="/static/Web/Build/Web.asm.framework.unityweb" />
				</Head>
				{hasWebGL && (
					<GameWrap>
						<GameContainer id="gameContainer">
							<Loading isLoading={isGameLoading}>
								<div className="lds-ring">
									<div />
									<div />
									<div />
									<div />
								</div>
							</Loading>
							{isPlayingDemo && <Unity unityContent={this.unityContent} />}
						</GameContainer>
					</GameWrap>
				)}
				<Content>
					<CenterWrap>
						<Logo src={logo} alt="Fly THIS!" isPlayingDemo={isPlayingDemo} />
						{hasWebGL && (
							<PlayTrailer
								onClick={e => {
									e.preventDefault();
									this.startGame();
								}}>
								▶︎ Try Game in Browser
							</PlayTrailer>
						)}
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
	}
}

export default Header;
