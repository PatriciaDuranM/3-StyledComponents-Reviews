import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media screen and (width> 768px) {
		width: 445px;
	}
`;

const StyledTitle = styled.h2`
	font-size: 40px;
	color: #512051;
	line-height: 32px;
	font-weight: 700;
	text-align: center;
	margin: 0px;

	@media screen and (width> 768px) {
		text-align: start;
		font-size: 56px;
		line-height: 48px;
		letter-spacing: -2px;
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
		width: 445px;
	}
`;

export { StyledTitle, StyledText, StyledHeader };
