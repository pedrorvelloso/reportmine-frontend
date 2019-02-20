import React, { useState } from 'react';

import Container from './components/Container';
import Login from './components/Login/index';
import ReportGenerator from './components/Generator';

const App = () => {
	const [logged, setLogged] = useState(
		localStorage.getItem(process.env.REACT_APP_STORAGE_NAME)
	);

	const setToken = token => {
		setLogged(token);
		localStorage.setItem(process.env.REACT_APP_STORAGE_NAME, token);
	};

	return (
		<div className="limiter">
			<Container>
				{logged ? <ReportGenerator /> : <Login setLogin={setToken} />}
			</Container>
		</div>
	);
};

export default App;
