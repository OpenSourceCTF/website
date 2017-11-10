import passport from 'koa-passport'
import passportLocal from 'passport-local'
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
		.andWhere('password', password)
		.limit(1)
		.then(([res]) => res)
		.catch(done)

	if (player) done(null, player)
	else done(null, false)
}))

// If unauthenticated redirect to login
const checkAuth = async (ctx, next) => {
	if (ctx.isAuthenticated()) await next()
	else ctx.redirect('/login')
}

export default checkAuth
