import instance from './config'

const login = (user, password) => {
    const body = {
        user,
        password
    }
    return instance.post('login', body).then((result) => {
        return { token: result.data.token }
    }).catch(err => {
        if (err.response) {
            if (err.response.data === 'Unauthorized') return { error: 'Usuário ou Senha inválidos!' };
        } else if (err.request) {
            return { error: 'Erro no servidor!' }
        }
    });
}

export default login