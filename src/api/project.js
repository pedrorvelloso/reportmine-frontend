import instance from './config';

export const getProjectsUser = () => {
	return instance.get('projects').then(response => {
		return { projects: response.data.projects };
	});
};

export const getIssues = project => {
	return instance.get(`projects/${project}/issues`).then(response => {
		return { issues: response.data.issues };
	});
};
