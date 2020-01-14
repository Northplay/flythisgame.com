import { css } from 'styled-components';
import { darken } from 'polished';

export const colors = {
	babyBlue: '#34cdfd',
	skyBlue: '#1d396a',
	oceanBlue: '#111f35',
	yellow: '#fff54f',
	purple: '#130a2f',
	darkGray: '#1e2124',
};

export const theme = {
	colors,
	font: {
		family: {
			heading: 'cubano, sans-serif',
			bread: 'futura-pt, sans-serif',
		},
		size: {
			heading: '5rem',
			title: '3rem',
			large: '2.8rem',
			regular: '2.4rem',
		},
		weight: {
			regular: '400',
			bold: '700',
		},
	},
	site: {
		width: '1070px',
		padding: '10px',
	},
};

export const globals = css`
	html {
		font: 10px/10px ${theme.font.family.bread};
		height: 100%;
		position: relative;
	}

	body {
		color: #fff;
		font-size: ${theme.font.size.regular};
		-webkit-font-smoothing: antialiased;
		background-color: rgb(17, 30, 49);
	}

	p {
		line-height: 2.8rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: ${theme.font.family.heading};
		font-weight: ${theme.font.weight.regular};
	}

	h1 {
		font-size: ${theme.font.size.heading};
	}

	button,
	a {
		cursor: pointer;
	}

	p a {
		color: ${colors.yellow};
		font-weight: ${theme.font.weight.bold};
		transition: color 0.15s ease;

		&:hover {
			color: ${darken(0.25, colors.yellow)};
		}
	}
`;

export default theme;
