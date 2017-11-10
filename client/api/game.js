import axios from 'axios'

const auth = axios.create({ baseURL: '/api' })

export const getServers = () =>
	auth.get('/servers')
		.then(res => res.data.servers)
