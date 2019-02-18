import React from 'react';

import Container from './components/Container';
import Login from './components/Login/index';
import ReportGenerator from './components/Generator'

const App = () => {
	return (
		<div className="limiter">
			<Container>
				<ReportGenerator />
			</Container>
		</div>
	);
};

export default App;
