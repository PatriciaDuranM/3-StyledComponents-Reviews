
import Container from './components/container/Container';
import Stars from './components/stars/Stars';
import Title from './components/title/title';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Container $direction={'column'} $paddingLine={'24px'} $paddingBlock={'82px'}>
				<Container $direction={'column'} $gap={'17px'}>
					<Title text={'10,000+ of our users love our products.'}></Title>
					<Container>
						<Stars/>
					</Container>
				</Container>
				
			</Container>
			
			
			
		</div>
	);
};

export default App;
