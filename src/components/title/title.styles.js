import styled from 'styled-components';

const StyledTitle = styled.h2`
	font-size: 40px;
	color: #512051;
	line-height: 32px;
	font-weight: 700;
	text-align: center;
	margin: 0px;

	@media screen and (width> 768px) {
		text-align: start;
	}
`;

const StyledText = styled.p`
	font-size: 19px;
	font-weight: 500;
	line-height: 25px;
	color: #927b91;
	text-align: center;
	margin: 0px;

	@media screen and (width> 768px) {
		text-align: start;
	}
`;

export { StyledTitle };
export { StyledText };
