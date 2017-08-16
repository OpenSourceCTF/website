const Router = require('koa-router')

const router = new Router()

router.get('/api/servers', ctx => {
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

router.get('/api/addons', ctx => {
	const addonsTemp = [{
		id: '1',
		name: 'Tattle Timers',
		author: 'RonSpawnson',
		version: '1.0',
		rating: '5.0',
		lastModified: '2017-08-15T18:25:43.511Z',
		totalUsers: 219
	}, {
		id: '2',
		name: 'HarkMommis',
		author: 'RonSpawnson',
		version: '1.2',
		rating: '4.5',
		lastModified: '2017-08-01T12:11:19.218Z',
		totalUsers: 8
	}, {
		id: '3',
		name: 'Live Player Position',
		author: 'ProfessorTag',
		version: '2.0',
		rating: '4.5',
		lastModified: '2017-08-16T19:44:10.499Z',
		totalUsers: 9001
	}]

	ctx.body = {
		addons: addonsTemp
	}
})

module.exports = router
