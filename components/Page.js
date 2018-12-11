import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Page = ({ title, children }) => (
	<Container>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<title>{title}</title>
		</Head>
		{children}
	</Container>
);

Page.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Page;
