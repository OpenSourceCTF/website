import axios from 'axios'

const auth = axios.create({ baseURL: '/api/auth' })

export const createPlayer = (username, email, password) =>
	auth.post('/player', { username, email, password })
		.then(res => res.data.success)

export const login = (handle, password) =>
	auth.post('/login', { handle, password })
		.then(res => res.data.success)

export const getInfo = () =>
	auth.get('/info')
		.then(res => res.data)
