import Container from './components/container/Container';
import Main from './components/Main/Main';

import Reviews from './components/Reviews/Reviews';

import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<Main>
				<Container />
				<Reviews />
			</Main>
		</div>
	);
};

export default App;
