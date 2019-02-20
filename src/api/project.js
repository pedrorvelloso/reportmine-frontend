import instance from './config';

export const getProjectsUser = () => {
	return instance
		.get('projects', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem(
					process.env.REACT_APP_STORAGE_NAME
				)}`
			}
		})
		.then(response => {
			return { projects: response.data.projects };
		});
};

export const getIssues = project => {
	return instance
		.get(`projects/${project}/issues`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem(
					process.env.REACT_APP_STORAGE_NAME
				)}`
			}
		})
		.then(response => {
			return { issues: response.data.issues };
		});
};
