import { StyledTitle, StyledText } from './header.styles';


const Header = ({ text }) => {
    return (
      <>
        <StyledTitle>{text}</StyledTitle>
        <StyledText>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</StyledText>
      </>
    );
  };
  
  export default Header;