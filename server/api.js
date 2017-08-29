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

module.exports = router
