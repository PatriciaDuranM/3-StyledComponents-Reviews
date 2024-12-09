import styled from 'styled-components';

/*caja*/

const StyledCardReview = styled.div``;

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
`;

export {
	StyledDivImgText,
	StyledImg,
	StyledProfileInfo,
	StyledName,
	StyledState,
	StyledText
};
