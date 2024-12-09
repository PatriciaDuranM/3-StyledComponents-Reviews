import styled from 'styled-components';

const StyledMain = styled.div`
	display: flex;
	flex-direction: column;
	gap: 49px;
	padding-inline: 24px;
	padding-block: 82px;
	background-image: url(public/assets/images/bg-pattern-top-mobile.svg),
		url(public/assets/images/bg-pattern-bottom-mobile.svg);
	background-repeat: no-repeat;
	background-position:
		top left,
		bottom right;

	@media screen and (width>768px) {
		padding-inline: 164px;
		padding-block: 118px;
		gap: 71px;
		background-image: url(public/assets/images/bg-pattern-top-desktop.svg),
			url(public/assets/images/bg-pattern-bottom-desktop.svg);
	}
`;

export { StyledMain };
