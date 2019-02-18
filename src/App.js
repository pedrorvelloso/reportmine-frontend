import React from 'react';

import Container from './components/Container';
import Login from './components/Login/index';

const App = () => {
	return (
		<div className="limiter">
			<Container>
				<Login />
			</Container>
		</div>
	);
};

export default App;
