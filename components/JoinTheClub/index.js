import React from 'react';
import styled from 'styled-components';

import background from './background.jpg';
import stamp from './stamp.png';

const Container = styled.div`
	background-image: url(${background});
	background-repeat: no-repeat;
	background-position: top center;
	background-size: cover;
	border-radius: 25px;
	box-shadow: 0px 0px 12px 3px #2b30be;
	display: flex;
	padding: 35px;
	z-index: 10;
	position: relative;
	margin-top: 40px;

	@media (max-width: 880px) {
		flex-wrap: wrap;
	}

	@media (max-width: 320px) {
		padding: 20px;
	}
`;

const WhatIs = styled.div`
	align-items: center;
	flex: 1 1 60%;
	display: flex;

	@media (max-width: 880px) {
		flex: 1 1 100%;
		margin-bottom: 20px;
	}

	@media (max-width: 520px) {
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
	}
`;

const Stamp = styled.img`
	flex: 0 0 135px;
	height: 141px;
	width: 135px;
	margin-right: 20px;
`;

const Text = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-size: 36px;
	line-height: 40px;
	font-weight: 600;
`;

const Description = styled.div`
	color: #ebebeb;
	font-size: 20px;
	line-height: 24px;
	margin-top: 15px;
`;

const SignUpForm = styled.div`
	align-items: center;
	flex: 1 1 40%;
	display: flex;
	justify-content: center;

	@media (max-width: 880px) {
		flex: 1 1 100%;
	}

	@media (max-width: 420px) {
	}
`;

const Email = styled.input`
	appearance: none;
	background-color: #fff;
	border: 2px solid #ffea37;
	box-shadow: 0px 0px 20px 5px rgba(255, 234, 55, 0.4);
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	color: #2c47ad;
	font-weight: 500;
	font-size: 18px;
	line-height: 18px;
	outline: none;
	padding: 15px;

	@media (max-width: 420px) {
		max-width: 160px;
	}

	@media (max-width: 320px) {
		max-width: 120px;
	}
`;

const Submit = styled.button`
	appearance: none;
	background-color: #ffea37;
	border: 2px solid #ffea37;
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	box-shadow: 0px 0px 20px 5px rgba(255, 234, 55, 0.4);
	color: #2c47ad;
	font-size: 18px;
	font-weight: 500;
	padding: 15.5px 15px;

	@media (max-width: 420px) {
		width: 100px;
	}

	@media (max-width: 320px) {
		width: auto;
		padding: 15.5px 10px;
	}
`;

class JoinTheClub extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			didComplete: false,
			isRequesting: false,
			email: null,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
	}

	onEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ isRequesting: true });

		const { email } = this.state;
		const request = new Request('https://services.northplay.co/subscribe', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify({ list: 'northplay', email }),
			mode: 'cors',
		});

		fetch(request)
			.then(() => {
				this.setState({ didComplete: true, isRequesting: false });
			})
			.catch(() => {
				this.setState({ didComplete: false, isRequesting: false });
			});
	}

	render() {
		const { didComplete, isRequesting } = this.state;

		return (
			<Container>
				<WhatIs>
					<Stamp src={stamp} />
					<Text>
						<Title>Join the Northplay Club</Title>
						<Description>
							It's like an email list for people who like what we do. Sign up and be the first to
							know about new things!
						</Description>
					</Text>
				</WhatIs>
				{!didComplete ? (
					<SignUpForm>
						<Email type="email" onChange={this.onEmailChange} />
						<Submit onClick={this.handleSubmit} disabled={isRequesting}>
							Sign up
						</Submit>
					</SignUpForm>
				) : (
					<SignUpForm>
						<Title>Thank you!</Title>
					</SignUpForm>
				)}
			</Container>
		);
	}
}

export default JoinTheClub;
