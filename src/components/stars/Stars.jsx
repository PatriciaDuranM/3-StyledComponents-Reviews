import { STARS_INFO } from "../constants/starsInfo"
import { StyledContainer, StyledRatingBox, StyledRatingText, StyledStarBox } from "./stars.styles"


const Stars = () =>{
    return (
    <StyledContainer>
        {STARS_INFO.map((info) =>(
            <StyledRatingBox key={info.id}>
        <StyledStarBox>
            <img src="./public/assets/images/icon-star.svg" alt="" />
            <img src="./public/assets/images/icon-star.svg" alt="" />
            <img src="./public/assets/images/icon-star.svg" alt="" />
            <img src="./public/assets/images/icon-star.svg" alt="" />
            <img src="./public/assets/images/icon-star.svg" alt="" />
        </StyledStarBox>
            <StyledRatingText>{info.rating}</StyledRatingText>
        </StyledRatingBox>
        ))}
        
    </StyledContainer>

    )
}

export default Stars;