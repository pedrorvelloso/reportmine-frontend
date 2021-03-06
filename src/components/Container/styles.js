import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 15px;
	background: ${props =>
		props.background ? `url(${props.background})` : '#f2f2f2'};
	background-size: cover;
	background-position: center;
`;

export const LoginContainer = styled.div`
	display: grid;
	grid-template-areas: 'cover login';
	grid-template-columns: 40% auto;
	background: #fff;
	width: 960px;
	box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3);
	border-radius: 9px;
	color: #555555;
	min-height: 437px;

	@media (max-width: 768px) {
		grid-template-areas: 'login';
		grid-template-columns: auto;
	}
`;

export const Cover = styled.div`
	background: ${props =>
		props.background ? `url(${props.background})` : '#FFF'};
	background-size: cover;
	background-position: center;
	grid-area: 'cover';
	border-radius: 9px 0 0 9px;
	z-index: 1;
	position: relative;

	&::before {
		content: '';
		display: block;
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1));
		z-index: -1;
		border-radius: 5px;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Page = styled.div`
	background: #fff;
	grid-area: 'login';
	border-radius: 0 9px 9px 0;

	@media (max-width: 768px) {
		border-radius: 9px;
	}
`;

export const PageContent = styled.div`
	width: 65%;
	margin: 35px auto;

	&.loaded {
		animation: ${fadeIn} 2s;
	}
`;

export const Brand = styled.div`
	text-align: right;
	font-size: 13px;
	margin-right: 15px;
	margin-top: 15px;
	text-transform: uppercase;
`;
