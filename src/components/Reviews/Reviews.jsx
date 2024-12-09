import { REVIEWS_INFO } from '../constants/reviewsInfo';
import {
	StyledCardReview,
	StyledContainer,
	StyledDivImgText,
	StyledImg,
	StyledName,
	StyledProfileInfo,
	StyledState,
	StyledText
} from './Reviews.styles';

const Reviews = () => {
	return (
		<StyledContainer>
			{REVIEWS_INFO.map(info => (
				<StyledCardReview key={info.id}>
					<StyledDivImgText>
						<StyledImg src={info.img} />
						<StyledProfileInfo>
							<StyledName>{info.name}</StyledName>
							<StyledState>{info.state}</StyledState>
						</StyledProfileInfo>
					</StyledDivImgText>
					<StyledText>{info.review}</StyledText>
				</StyledCardReview>
			))}
		</StyledContainer>
	);
};

export default Reviews;
