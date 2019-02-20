import React, { useState } from 'react';
import classNames from 'classnames';
import { Form, FormTitle, Input, Button } from './styles';
import Icon from '../Icon';
import login from '../../api/login';

const useInputForm = initialState => {
	const [value, setValue] = useState(initialState);

	const handleChange = e => {
		setValue(e.target.value);
	};

	return {
		value,
		onChange: handleChange
	};
};

const LoginPage = props => {
	const user = useInputForm('');
	const password = useInputForm('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const buttonClass = classNames({
		error: error
	});

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		setError('');

		const { token, error } = await login(user.value, password.value);
		setLoading(false);
		if (error) setError(error);
		else {
			localStorage.setItem(process.env.REACT_APP_STORAGE_NAME, token);
			props.setLogin(token);
		}
	};
	return (
		<>
			<Form onSubmit={handleSubmit}>
				<FormTitle>Entrar</FormTitle>
				<Input placeholder="Usuário" required {...user} />
				<Input placeholder="Senha" required type="password" {...password} />
				<Button className={buttonClass} disabled={loading}>
					{error ? (
						<>
							{error}
							<span>
								<Icon name="times" />
							</span>
						</>
					) : (
						'Entrar'
					)}
					{loading ? <span className="loader" /> : ''}
				</Button>
			</Form>
		</>
	);
};

export default LoginPage;
