import Header from '../Header/Header';
import Stars from '../stars/Stars';
import { StyledContainer } from './containter.styles';

const Container = () => {
	return (
		<StyledContainer>
			<Header></Header>
			<Stars></Stars>
		</StyledContainer>
	);
};

export default Container;
