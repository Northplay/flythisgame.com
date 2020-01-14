import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VideoContainer = styled.div`
	height: 0;
	overflow: hidden;
	padding-bottom: 56.25%;
	padding-top: 30px;
	position: relative;

	@media (max-width: 768px) {
		margin: 0 10px;
	}
`;

const VideoEmbed = styled(ReactPlayer)`
	left: 0;
	height: 100% !important;
	position: absolute;
	top: 0;
	width: 100% !important;
`;

const Video = ({ id }) => (
	<VideoContainer>
		<VideoEmbed url={`https://www.youtube.com/watch?v=${id}`} controls />
	</VideoContainer>
);

Video.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Video;
