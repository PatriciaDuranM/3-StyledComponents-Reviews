import styled from 'styled-components';

/*caja de cards*/
const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media screen and (width>768px) {
		width: 1110px;
		height: 266px;
		flex-direction: row;
		gap: 30px;
	}
`;

/*card*/
const StyledCardReview = styled.div`
	width: 327px;
	height: 248px;
	border-radius: 8px;
	background-color: #512051;
	display: flex;
	flex-direction: column;
	padding-inline: 32px;
	padding-top: 40px;
	padding-bottom: 32px;
	gap: 23px;

	@media screen and (width>768px) {
		padding-bottom: 36px;
		width: 350px;
		gap: 31px;

		&:first-child {
			align-self: flex-start;
		}

		&:nth-child(2) {
			align-self: center;
		}

		&:last-child {
			align-self: flex-end;
		}
	}
`;

/*div imagen y texto*/
const StyledDivImgText = styled.div`
	display: flex;
	flex-direction: row;
	gap: 23px;
`;

/*imagen*/
const StyledImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;

/*div profile*/
const StyledProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 4px;
`;

/*name*/
const StyledName = styled.h4`
	color: white;
	font-weight: 700;
	font-size: 17px;
`;
/*state*/
const StyledState = styled.span`
	color: #ee69a4;
	font-weight: 400;
	font-size: 17px;
`;

/*text*/

const StyledText = styled.p`
	color: white;
	font-size: 17px;
	font-weight: 500;
	line-height: 22px;
	letter-spacing: -0.3px;
`;

export {
	StyledDivImgText,
	StyledImg,
	StyledProfileInfo,
	StyledName,
	StyledState,
	StyledText,
	StyledCardReview,
	StyledContainer
};
