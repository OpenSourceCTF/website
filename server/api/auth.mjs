import Router from 'koa-router'
import body from 'koa-body'
import Player from '../models/player'

const auth = new Router({ prefix: '/api/auth' })

// Login - temporary implementation
auth.post('/login', body(), async ctx => {
	const { handle, password } = ctx.request.body

	if (!handle || !password) {
		ctx.body = {
			success: false
		}

		return
	}

	const validAuth = await Player.query()
		.where('username', handle)
		.orWhere('email', handle)
		.andWhere('password', password)
		.limit(1)
		.then(([player]) => !!player)

	ctx.body = {
		success: validAuth
	}
})

// Register
auth.post('/player', body(), ctx => {
	const { username, email, password } = ctx.request.body

	if (!username || !password) {
		ctx.body = {
			success: false
		}

		return
	}

	return Player.query().insert({
		username,
		email: email || null, // Don't insert empty string (optional field)
		password
	})
		.then(player => {
			console.log(`New player registered: ${player.username}`)

			ctx.body = {
				success: true
			}
		})
		.catch(err => {
			console.log(err)

			ctx.body = {
				success: false
			}
		})
})

export default auth
