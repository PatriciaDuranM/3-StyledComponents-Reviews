import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: ${({ $direction }) => $direction};
	padding-inline: ${({ $paddingLine }) => $paddingLine};
	padding-block: ${({ $paddingBlock }) => $paddingBlock};
	gap: ${({ $gap }) => $gap};

	@media screen and (width> 768px) {
		flex-direction: ${({ $direction }) => $direction};
	}
`;

export { StyledContainer };
