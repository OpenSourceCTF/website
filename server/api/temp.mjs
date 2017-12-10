import Router from 'koa-router'
import checkAuth from '../auth'

const router = new Router()

router.get('/api/servers', checkAuth(), ctx => {
	const serversTemp = [{
		name: 'Eye',
		location: 'London, UK',
		players: 21,
		games: 3,
		ping: 12
	}, {
		name: 'Tower',
		location: 'Paris, FR',
		players: 158,
		games: 20,
		ping: 19
	}, {
		name: 'Poppy',
		location: 'Amsterdam, NL',
		players: 42,
		games: 6,
		ping: 24
	}, {
		name: 'Boot',
		location: 'Rome, IT',
		players: 13,
		games: 2,
		ping: 15
	}, {
		name: 'Apple',
		location: 'New York, US',
		players: 95,
		games: 12,
		ping: 76
	}, {
		name: 'Creative',
		location: 'Chicago, US',
		players: 112,
		games: 15,
		ping: 89
	}, {
		name: 'Paddy',
		location: 'Philadelphia, US',
		players: 5,
		games: 1,
		ping: 65
	}, {
		name: 'Kiwi',
		location: 'Nelson, NZ',
		players: 69,
		games: 9,
		ping: 148
	}]

	ctx.body = {
		servers: serversTemp
	}
})

router.get('/api/addons', checkAuth(), ctx => {
	const addonsTemp = [{
		id: 1,
		name: 'Tattle Timers',
		description: 'Cheat your way to victory.',
		author: 'RonSpawnson',
		version: 1.00,
		rating: 1,
		lastModified: '2017-08-15T18:25:43.511Z',
		totalUsers: 219
	}, {
		id: 2,
		name: 'HarkMommis',
		description: 'I have no idea what this is.',
		author: 'RonSpawnson',
		version: 1.2,
		rating: 0.78,
		lastModified: '2017-08-01T12:11:19.218Z',
		totalUsers: 8
	}, {
		id: 3,
		name: 'Live Player Position',
		description: 'This is probably a good thing to have. Reduces render delay by 2 frames. You see where balls are a tiny bit sooner. It also removes the rounding to the nearest pixel so things look smoother (but a little blurry when "between" pixels).',
		author: 'ProfessorTag',
		version: 2.0,
		rating: 0.95,
		lastModified: '2017-08-16T19:44:10.499Z',
		totalUsers: 9001
	}]

	ctx.body = {
		addons: addonsTemp
	}
})

export default router
