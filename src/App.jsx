
import Container from './components/container/Container';
import Header from './components/Header/Header';
import Stars from './components/stars/Stars';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Container $direction={'column'} $paddingLine={'24px'} $paddingBlock={'82px'}>
				<Container $direction={'column'} $gap={'17px'}>
					<Header text={'10,000+ of our users love our products.'}></Header>
					<Container>
						<Stars/>
					</Container>
				</Container>
				
			</Container>
			
			
			
		</div>
	);
};

export default App;
