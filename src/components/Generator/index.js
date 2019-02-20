import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormTitle, Button } from '../Login/styles';
import { Projects } from './styles';

import { withRouter } from 'react-router-dom';

import { getProjectsUser, getIssues } from '../../api/project';

const ReportGenerator = ({ ...props }) => {
	const { history } = props;
	const [projects, setProjects] = useState([]);
	const [selectedProject, setSelectedProject] = useState('');

	useEffect(() => {
		getProjects();
	}, []);

	const getProjects = async () => {
		const { projects } = await getProjectsUser();
		setProjects(projects);
	};

	const generateReport = async () => {
		const { issues } = await getIssues(selectedProject);
		history.push({
			pathname: '/generated',
			state: {
				issues
			}
		});
	};

	return (
		<>
			<FormTitle>Gerar</FormTitle>
			<Projects onChange={e => setSelectedProject(e.target.value)}>
				<option value="">Selecione um projeto</option>
				{projects.map((project, key) => {
					return (
						<option key={key} value={project.identificador}>
							{project.nome}
						</option>
					);
				})}
			</Projects>

			<Button onClick={generateReport}>Gerar Relatório</Button>
		</>
	);
};

ReportGenerator.propTypes = {
	history: PropTypes.object.isRequired
};

export default withRouter(ReportGenerator);
