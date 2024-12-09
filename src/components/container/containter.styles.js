import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 39px;
	width: 327px;

	@media screen and (width> 768px) {
		width: 1110px;
		flex-direction: row;
		justify-content: space-between;
	}
`;

export { StyledContainer };
