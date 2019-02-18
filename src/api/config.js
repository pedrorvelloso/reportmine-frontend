import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND,
	headers: {
		Authorization: `Bearer ${localStorage.getItem(
			process.env.REACT_APP_STORAGE_NAME
		)}`
	}
});

export default instance;
