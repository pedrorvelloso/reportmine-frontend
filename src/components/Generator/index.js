import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormTitle, Button } from '../Login/styles';
import { Projects } from './styles';

import { withRouter } from 'react-router-dom';

import { getProjectsUser, getIssues } from '../../api/project';

import DatePicker from '../DatePicker';
import moment from 'moment';

const ReportGenerator = ({ ...props }) => {
	const { history } = props;
	const [projects, setProjects] = useState([]);
	const [to, setTo] = useState(undefined);
	const [from, setFrom] = useState(undefined);

	const [selectedProject, setSelectedProject] = useState('');

	useEffect(() => {
		getProjects();
	}, []);

	useEffect(() => {
		console.log(
			moment(to).format('YYYY-MM-DD'),
			moment(from).format('YYYY-MM-DD')
		);
	}, [to, from]);

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

			<DatePicker to={to} from={from} setTo={setTo} setFrom={setFrom} />

			<Button onClick={generateReport}>Gerar Relatório</Button>
		</>
	);
};

ReportGenerator.propTypes = {
	history: PropTypes.object.isRequired
};

export default withRouter(ReportGenerator);
