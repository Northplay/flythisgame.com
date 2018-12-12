import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoContainer = styled.div`
	height: 0;
	overflow: hidden;
	padding-bottom: 56.25%;
	padding-top: 30px;
	position: relative;
`;

const VideoEmbed = styled(ReactPlayer)`
	left: 0;
	height: 100% !important;
	position: absolute;
	top: 0;
	width: 100% !important;
`;

const Video = () => (
	<VideoContainer>
		<VideoEmbed url="https://www.youtube.com/watch?v=y6vURGqRMdg" controls />
	</VideoContainer>
);

export default Video;
