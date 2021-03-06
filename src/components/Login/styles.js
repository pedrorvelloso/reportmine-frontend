import styled, { keyframes } from 'styled-components';
import Color from 'color';

const green = '#00ad5f';
const greenFade = Color(green)
	.fade(0.5)
	.string();
const red = '#f44336';
const redFade = Color(red)
	.fade(0.5)
	.string();
const gray = '#9e9e9e';
const grayFade = Color(gray)
	.fade(0.5)
	.string();

const rotate = keyframes`
  0%   {left:0px; top:0px;}
  25%  {left:25px; top:0px;}
  50%  {left:-25px; top:0;}
  75%  {left:15px; top:0;}
  95% {left:-15px; top:0px;}
  100% {left:0px; top:0px;}
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

export const Form = styled.form``;

export const Title = styled.span`
	font-size: 20px;
	text-transform: uppercase;
	letter-spacing: 2px;
`;

export const FormTitle = styled(Title)`
	border-bottom: 2px solid #555555;
`;

export const Input = styled.input`
	border: none;
	border-bottom: 1px solid #555555;
	display: block;
	margin: 25px 0;
	font-size: 18px;
	outline: none;
	padding: 8px 0;
	width: 100%;
	color: #555555;
	transition: color 0.4s;
	background: #fff;

	&:focus {
		color: #000;
	}

	&::-webkit-input-placeholder {
		transition: color 0.4s;
	}

	&:focus::-webkit-input-placeholder {
		color: black;
		transition: color 0.4s;
	}

	&:focus:invalid {
		border-color: red;
	}

	&:valid {
		border-color: ${green};
	}
`;

export const Button = styled.button`
	background: ${green};
	border: none;
	padding: 15px;
	width: 100%;
	color: #fff;
	font-size: 18px;
	margin-top: 50px;
	border-radius: 3px;
	outline: none;
	margin-bottom: 50px;
	position: relative;
	transition: background 0.3s;
	box-shadow: 0 3px 0 1px ${greenFade};
	top: 0;
	-webkit-transition: top, box-shadow 0.2s, 0.2s; /* Safari */
	transition: top, box-shadow 0.2s, 0.2s;

	&.error {
		animation: ${rotate} 0.5s linear infinite;
		animation-iteration-count: 1;
		background: ${red};
		box-shadow: 0 3px 0 1px ${redFade};
	}

	span {
		float: right;
		@media (max-width: 768px) {
			display: none;
		}
	}

	:disabled {
		cursor: not-allowed;
		background: ${gray};
		box-shadow: 0 3px 0 1px ${grayFade};
	}

	:active {
		background: #00723f;
		box-shadow: 0 1px 0 1px ${greenFade};
		top: 2px;
		-webkit-transition: top, box-shadow 0.2s, 0.2s; /* Safari */
		transition: top, box-shadow 0.2s, 0.2s;
	}
`;
