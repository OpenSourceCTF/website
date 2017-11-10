import Router from 'koa-router'
import body from 'koa-body'
import passport from 'koa-passport'
import checkAuth from '../auth'
import Player from '../models/player'

const auth = new Router({ prefix: '/api/auth' })

// Login
auth.post('/login', body(), (ctx, next) =>
	passport.authenticate('local', (err, user) => {
		const success = !err && !!user

		if (success) ctx.login(user)

		ctx.body = { success }
	})(ctx, next)
)

// Logout
auth.post('/logout', checkAuth, ctx => {
	ctx.logout()
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

			// Automatically log in the newly registered player
			ctx.login(player)

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
