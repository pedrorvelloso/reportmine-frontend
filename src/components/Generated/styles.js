import styled from 'styled-components';

export const Page = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px !important;
`;

export const Issue = styled.div`
	margin: 16px 0;
`;

export const Meta = styled.div`
	@media print {
		page-break-inside: avoid;
	}
`;

export const Title = styled.span`
	display: inline;
	font-weight: bold;
`;

export const Detail = styled.span`
	display: block;
`;

export const Description = styled.div`
	white-space: pre-wrap;
	margin-top: 16px;
`;

export const Attachment = styled.img`
	max-width: 960px;
`;
