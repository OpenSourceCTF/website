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

		ctx.body = {
			success
		}

		if (success) ctx.login(user)
		else ctx.body.message = 'There was an issue with the authorization credentials supplied.'
	})(ctx, next)
)

// Logout
auth.post('/logout', checkAuth({ redirect: true }), ctx => {
	ctx.logout()
})

// Register
auth.post('/player', body(), ctx => {
	const { username, email, password } = ctx.request.body

	if (!username || !password) {
		ctx.body = {
			success: false,
			message: `Missing required username and/or password field(s).`
		}
		ctx.status = 422

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

			// The message we give back to the client here is something of an
			// assumption in the absence of more easily parseable errors
			ctx.body = {
				success: false,
				message: `Username${email ? ' and/or email address ' : ' '}already in use.`
			}
			ctx.status = 409
		})
})

export default auth
