import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
	Page,
	Description,
	Issue,
	Title,
	Detail,
	Attachment,
	Meta
} from './styles';

const App = ({ ...props }) => {
	const { location } = props;
	return (
		<Page>
			{location.state.issues.map((issue, key) => {
				let title = issue.subject;
				if (title[0] === '[') {
					title = title.substr(title.indexOf('-') + 2, title.length);
				}

				const startDate = moment(issue.start_date).format('DD/MM/YYYY');
				const updatedOn = moment(issue.updated_on).format('DD/MM/YYYY');

				const attachments = issue.attachments.map((att, key) => {
					if (
						att.content_type !== undefined &&
						att.content_type.substr(0, 5) === 'image'
					) {
						return <Attachment src={att.content_url} key={key} />;
					}
					return null;
				});

				return (
					<Issue key={key}>
						<Meta>
							<Title>
								{title} - RM: {issue.id}
							</Title>
							<Detail>
								Status: <b>{issue.status.name}</b>
							</Detail>
							<Detail>
								Iniciada em: <b>{startDate}</b>
							</Detail>
							<Detail>
								Última atualização em: <b>{updatedOn}</b>
							</Detail>
						</Meta>
						<Description>{issue.description}</Description>
						<center>{attachments}</center>
					</Issue>
				);
			})}
		</Page>
	);
};

App.propTypes = {
	location: PropTypes.object.isRequired
};

export default App;
