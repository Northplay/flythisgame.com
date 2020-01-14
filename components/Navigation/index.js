import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from 'next/router'

import thisActive from "./this-active.png";
import thisInactive from "./this-inactive.png";
import togetherActive from "./together-active.png";
import togetherInactive from "./together-inactive.png";

import thisGradient from './gradient-this.png';
import togetherGradient from './gradient-together.png'

import platformApple from "./platform-iosmac.png";
import platformAndroid from "./platform-android.png";
import platformWindows from "./platform-windows.png";
import platformSteam from "./platform-steam.png";
import platformSwitch from "./platform-switch.png";

const platformImages = {
  ios: platformApple,
  tvos: platformApple,
  mac: platformApple,
  android: platformAndroid,
  windows: platformWindows,
  steam: platformSteam,
  switch: platformSwitch
};

const Item = styled.a`
  align-items: center;
  color: ${props => (props.isActive ? "#fff" : "rgba(255, 255, 255, 0.3)")};
  cursor: pointer;
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  font-family: "cubano";
  font-size: 13pt;
  line-height: 2.6em;
  justify-content: center;
  margin-right: 20px;
  text-decoration: none;

  div {
    transition: transform 0.25s ease;
  }

  &:hover > div {
    transform: scale(1.1, 1.1) translateY(10px);
  }

  &:hover > :nth-child(2),
  &:hover > :last-child {
    transform: translateY(20px);
  }

  & > :last-child {
    opacity: ${props => (props.isActive ? 1 : 0.3)};
  }

  @media (max-width: 820px) {
    flex: 0 1 30%;
    margin: 0 0 20px 0;

    & > div {
      transform: scale(1.1, 1.1) translateY(10px);
    }

    &:hover > div,
    &:hover > :nth-child(2),
    &:hover > :last-child {
      transform: none;
    }

    & > :nth-child(2) {
      display: none;
    }

    & > :last-child {
      // transform: scale(0.8, 0.8);
      // margin-top: -15px;
    }
  }
`;

const Logo = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-image: url(${props => props.image});
  transition: background 0.25s ease, transform 0.25s ease;
  flex: 0 1 116px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  padding: 35px 0;
  justify-content: space-around;

  @media (max-width: 1100px) {
    margin: 0 10px;
  }

  @media (max-width: 820px) {
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
//   background-color: ${props => props.background.color};
  background-image: url(${props => props.background.image});
  background-repeat: repeat-x;
  background-position: top left;
  background-size: 1px 239px;
  transition: background 0.25s ease;
`;

const NavigationItem = ({
  isActive,
  path,
  activeImage,
  inactiveImage,
  tagline,
  platforms
}) => (
	  <Link href={path}>
		<Item href={path} isActive={isActive}>
			<Logo image={isActive ? activeImage : inactiveImage} />
			<div>{tagline}</div>
			<Platforms platforms={platforms} />
		</Item>
	</Link>
  );

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Platform = styled.div`
  display: block;
  width: 20px;
  height: 33px;
  flex: 0 0 20px;
  margin: 0 5px;
  background-image: url(${props => platformImages[props.platform]});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  transition: opacity 0.25s ease;
`;

Platform.propTypes = {
  platform: PropTypes.string.isRequired
};

const Platforms = ({ platforms }) => (
    <List>
      {platforms.map(platform => (
        <Platform key={platform} platform={platform} />
      ))}
    </List>
  );

Platforms.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Navigation = ({ router: { asPath }}) => {
  const background = {
    "/": { color: "#101b05", image: thisGradient },
    "/this": { color: "#101b05", image: thisGradient },
    "/together": { color: "#141519", image: togetherGradient },
  };

  return (
    <Container background={background[asPath]}>
      <Wrapper>
        <NavigationItem
          isActive={asPath === '/' || asPath === '/this'}
          path="/this"
          platforms={["ios", "android"]}
          tagline="Mobile Flight Command"
          activeImage={thisActive}
          inactiveImage={thisInactive}
          location={asPath}
        />
        <NavigationItem
          isActive={asPath === '/together'}
          path="/together"
          platforms={["switch"]}
          tagline="Local Multiplayer Flight Command"
          activeImage={togetherActive}
          inactiveImage={togetherInactive}
          location={asPath}
        />
      </Wrapper>
    </Container>
  );
};

export default withRouter(Navigation);
