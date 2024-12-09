import styled from 'styled-components';

/*contenedor general*/
const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media screen and (width> 768px) {
		width: 540px;
		height: 200px;
	}
`;

/*caja review*/
const StyledRatingBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 327px;
	height: 78px;
	border-radius: 8px;
	background-color: #f7f2f7;
	color: #512051;
	text-align: center;
	padding-block: 16px;

	@media screen and (width>768px) {
		width: 445px;
		height: 56px;
		flex-direction: row;
		gap: 32px;
		padding-block: 20px;
		padding-left: 32px;

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

/*caja estrellas*/
const StyledStarBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
	margin-inline: auto;

	@media screen and (width>768px) {
		margin: 0px;
	}
`;

/*texto*/
const StyledRatingText = styled.h3`
	font-size: 17px;
	text-align: center;
	font-weight: 700;
	margin: 0px;
`;

export { StyledContainer, StyledRatingBox, StyledStarBox, StyledRatingText };
