import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';
import MobileDetect from 'mobile-detect';
import styled from 'styled-components';

import { appStoreLink, playStoreLink } from 'lib/links';
import logo from 'assets/logo.png';
import world from 'assets/world.png';
import appstore from 'assets/appstore.png';
import playstore from 'assets/playstore.png';
import firstframe from 'assets/firstframe.png';

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
	z-index: ${p => (p.isPlayingDemo ? '700' : '100')};

	@media (max-width: 400px) {
		display: none;
	}
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

const containerAnimationState = (isMobile, isPlayingDemo) => {
	if (isMobile) {
		return 'unset';
	}

	return isPlayingDemo ? 'running' : 'paused';
};

const Container = styled.div`
	--animation-duration: 0.25s;
	--animation-play-state: ${p => containerAnimationState(p.isMobile, p.isPlayingDemo)};

	animation: ${p =>
		p.isMobile
			? 'worldOut ease-in var(--animation-duration) 1 forwards var(--animation-play-state)'
			: 'none'};
	background-image: ${p => (!p.isMobile ? `none` : `url(${world})`)};
	background-repeat: no-repeat;
	background-position: top center;
	background-size: ${p => (!p.isMobile ? `cover` : `contain`)};
	flex: 1 0 898px;
	height: 1000px;
	margin-top: -20px;
	position: relative;
	width: 100%;
	overflow: hidden;

	@media (max-width: 768px) {
		height: auto;
		flex-basis: 700px;
	}

	@media (max-width: 420px) {
		margin-top: auto;
		flex-basis: 520px;
		background-image: none;
	}

	video {
		display: ${p => (p.isMobile ? 'none' : 'block')};
	}

	@keyframes worldOut {
		0% {
			background-image: url(${firstframe});
		}
		100% {
			background-image: unset;
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

const HeaderVideoContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 5;
	pointer-events: none;
	display: flex;
	justify-content: center;
	overflow: hidden;

	video {
		transition: opacity 0.25s ease-in-out;
		opacity: 0;
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
	position: relative;
	z-index: 500;
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
	position: relative;
	z-index: 550;

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

	@media (max-width: 420px) {
		flex: 1 1 auto;
		padding-top: 50px;
	}
`;

const BottomWrap = styled.div`
	flex: 1 1 35%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	@media (max-width: 420px) {
		flex: 1 1 auto;
	}
`;

const StoreLinks = styled.div`
	display: flex;
	margin-bottom: 160px;

	@media (max-width: 768px) {
		margin-bottom: 0;
	}

	@media (max-width: 420px) {
		align-items: center;
		flex-direction: column;
		justify-content: center;
		margin-top: 50px;

		a {
			margin: 5px 0 !important;
		}
	}

	a {
		margin: 0 10px;
		transition: all 0.15s ease-in-out;
	}

	a:hover {
		transform: scale(1.08, 1.08);
	}
`;

const AppStoreLink = styled.a`
	img {
		width: 240px;
		height: 80px;
	}
`;

const PlayStoreLink = styled.a`
	img {
		width: 270px;
		height: 80px;
	}
`;

class Header extends React.Component {
	static hasWebGL() {
		return process.browser && 'WebGLRenderingContext' in window;
	}

	constructor(props) {
		super(props);

		this.state = { isPlayingDemo: false, isGameLoading: false, hasWebGL: false, isMobile: false };
		this.startGame = this.startGame.bind(this);
		this.playHeaderLoop = this.playHeaderLoop.bind(this);
		
		if (Header.hasWebGL()) {
			this.unityContent = new UnityContent(
				'static/Web/Build/Web.json',
				'static/Web/Build/UnityLoader.js',
			);
		}
		
		this.videoRef = React.createRef();
	}

	componentDidMount() {
		this.unityContent.on('loaded', () => {
			this.setState({ isGameLoading: false });
		});

		const md = new MobileDetect(window.navigator.userAgent);
		if (md.mobile() === null && Header.hasWebGL()) {
			this.setState({ hasWebGL: true });
		}

		if (md.mobile() !== null) {
			this.setState({ isMobile: true });
		}

		this.videoRef.addEventListener('canplay', this.playHeaderLoop);
	}

	componentWillUnmount() {
		this.videoRef.addEventListener('canplay', this.playHeaderLoop);
	}

	startGame() {
		const { isPlayingDemo, isMobile } = this.state;
		if (isPlayingDemo || isMobile) {
			return;
		}

		this.videoRef.style.opacity = 0;
		this.videoRef.pause();

		this.setState({ isPlayingDemo: true, isGameLoading: true });
	}

	playHeaderLoop() {
		const { isMobile } = this.state;
		if (isMobile) {
			return;
		}

		setTimeout(() => {
			this.videoRef.style.opacity = 1;
			setTimeout(() => {
				this.videoRef.play();
			}, 100);
		}, 100);
	}

	render() {
		const { isPlayingDemo, isGameLoading, hasWebGL, isMobile } = this.state;

		return (
			<Container isPlayingDemo={isPlayingDemo} isMobile={isMobile}>
				<HeaderVideoContainer>
					<video
						ref={el => (this.videoRef = el)}
						playsInline
						muted
						loop
						id="header_loop"
						onPlay={this.onHeaderLoopPlay}>
						<source src="/static/headerloop.mp4" type="video/mp4" />
					</video>
				</HeaderVideoContainer>
				{hasWebGL && (
					<GameWrap isPlayingDemo={isPlayingDemo}>
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
						<StoreLinks>
							<AppStoreLink href={appStoreLink} alt="Downloadon the App Store">
								<img src={appstore} alt="App Store" />
							</AppStoreLink>
							<PlayStoreLink href={playStoreLink} alt="Get it on Google Play">
								<img src={playstore} alt="Play Store" />
							</PlayStoreLink>
						</StoreLinks>
					</BottomWrap>
				</Content>
			</Container>
		);
	}
}

export default Header;
