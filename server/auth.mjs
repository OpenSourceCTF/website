import passport from 'koa-passport'
import passportLocal from 'passport-local'
import bcrypt from 'bcrypt'
import Player from './models/player'

passport.serializeUser((player, done) => {
	done(null, player.id)
})

passport.deserializeUser(async (id, done) => {
	const player = await Player.query()
		.where('id', id)
		.limit(1)
		.then(([res]) => res)
		.catch(done)

	if (player) done(null, player)
	else done('NOT_EXISTS', null)
})

const LocalStrategy = passportLocal.Strategy
passport.use(new LocalStrategy({
	usernameField: 'handle',
	passwordField: 'password'
}, async (handle, password, done) => {
	const player = await Player.query()
		.where('username', handle)
		.orWhere('email', handle)
		.limit(1)
		.then(([res]) => res)
		.catch(done)

	// Return fail if handle not found
	if (!player) {
		done(null, false)

		return
	}

	// Check the plaintext password provided against salted/hashed password
	// retrieved for this player from DB
	const validAuth = await bcrypt.compare(password, player.password)

	if (validAuth) done(null, player)
	else done(null, false)
}))

// If unauthenticated either redirect to login or send unauthorized status code
const checkAuth = (...args) => {
	// Default arguments
	let redirect = false

	// Rudimentary check to see if we've skipped manual config or not (1 argument
	// is manual config, 2 arguments is middleware (as seen in returned function))
	if (args.length === 1) {
		const opts = args[0]

		if (opts.redirect) redirect = opts.redirect
	}

	return async (ctx, next) => {
		if (ctx.isAuthenticated()) await next()
		else {
			if (redirect) ctx.redirect('/login')
			else {
				ctx.body = {
					success: false,
					message: 'You do not have authorization to access this resource.'
				}
				ctx.status = 401
			}
		}
	}
}

export default checkAuth
