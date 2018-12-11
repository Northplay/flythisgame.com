import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';

const Container = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(5, 208px);
	justify-content: center;
	margin: 50px 0;

	@media (max-width: 1115px) {
		grid-template-columns: repeat(2, 208px);
	}

	@media (max-width: 470px) {
		grid-template-columns: repeat(1, 208px);
	}
`;

const Preview = styled.div`
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${props => props.image.preview});
	cursor: zoom-in;
	display: flex;
	justify-content: center;
	height: 167px;
	width: 208px;
	transition: all 0.15s ease;

	&:hover {
		opacity: 0.8;
	}

	/* @media (max-width: 1080px) {
		margin: 10px;
	} */
`;

class Screenshots extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLightboxOpen: false,
			imageIndex: 0,
		};

		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.setState({ isLightboxOpen: false });
	}

	render() {
		const { images } = this.props;
		const { isLightboxOpen, imageIndex } = this.state;

		return (
			<Container>
				{images.map((image, i) => (
					<Preview
						key={`preview_${i}`}
						image={image}
						onClick={() => {
							this.setState({ imageIndex: i, isLightboxOpen: true });
						}}
					/>
				))}
				{isLightboxOpen && (
					<Lightbox
						mainSrc={images[imageIndex].full}
						nextSrc={images[(imageIndex + 1) % images.length].full}
						prevSrc={images[(imageIndex + images.length - 1) % images.length].full}
						onMoveNextRequest={() =>
							this.setState({ imageIndex: (imageIndex + 1) % images.length })
						}
						onMovePrevRequest={() =>
							this.setState({ imageIndex: (imageIndex + images.length - 1) % images.length })
						}
						onCloseRequest={this.handleClose}
					/>
				)}
			</Container>
		);
	}
}

Screenshots.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			preview: PropTypes.string.isRequired,
			full: PropTypes.string,
		}),
	).isRequired,
};

export default Screenshots;
