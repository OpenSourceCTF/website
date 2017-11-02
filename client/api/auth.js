import axios from 'axios'

const auth = axios.create({ baseURL: '/api/auth' })

export const createPlayer = (username, email, password) =>
	auth.post('/player', { username, email, password })
		.then(res => res.data.success)
