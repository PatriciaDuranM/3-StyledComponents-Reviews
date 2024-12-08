import { StyledContainer } from "./containter.styles"


const Container = ({children,$direction, $paddingLine,$paddingBlock, $gap}) =>{
    return <StyledContainer $direction={$direction} $paddingLine={$paddingLine} $paddingBlock={$paddingBlock} $gap={$gap}>{children}</StyledContainer>
}

export default Container;