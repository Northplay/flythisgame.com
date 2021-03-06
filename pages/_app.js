import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from 'next/router';
import withGa from 'next-ga';

import { theme, globals } from '../theme';
import lightbox from '../lightbox';

const GlobalStyles = createGlobalStyle`
	${reset}
	${globals}
	${lightbox}
`;

class NewApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ ctx });
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<GlobalStyles />
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</Container>
		);
	}
}

export default withGa('UA-77461396-9', Router)(NewApp);
