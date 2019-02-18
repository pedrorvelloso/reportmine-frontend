import React from 'react';

const Icon = ({ ...props }) => {
	const { name } = props;

	return <i className={`fas fa-${name}`} />;
};

export default Icon;
