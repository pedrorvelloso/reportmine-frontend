import React, { useEffect } from 'react';

const App = props => {
	useEffect(() => {
		console.log(props.location.state.issues);
	});

	return props.location.state.issues.map(issue => {
		return (
			<>
				{issue.issue.subject} <br />
			</>
		);
	});
};

export default App;
