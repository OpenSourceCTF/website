import dotenv from 'dotenv'
import cjs from './helpers/cjs'
import objection from 'objection'
import Knex from 'knex'
import Koa from 'koa'
import helmet from 'koa-helmet'
import session from 'koa-session'
import mount from 'koa-mount'
import serve from 'koa-static'
import views from 'koa-views'
import passport from 'koa-passport'
import cfg from '../config'
import knexCfg from '../knexfile.docker'
import router from './router'
import './auth'

import tempApi from './api/temp'
import authApi from './api/auth'

// Environment variables
dotenv.config()

// Database
const db = Knex(knexCfg)
const { Model } = objection

Model.knex(db)

// Server
const app = new Koa()

// Helmet
app.use(helmet())

// Session
app.keys = [process.env.SESSION_SECRET]
app.use(session({ key: `${cfg.get('APP_NAME_ABBR')}:sess` }, app))

// Auth
app.use(passport.initialize())
app.use(passport.session())

// Static assets
app.use(mount('/static', serve('./server/static/')))

// Views
app.use(views(`${cjs.__dirname}/views/`, {
	extension: 'pug'
}))

// Locals
app.use(async (ctx, next) => {
	ctx.state.appName = cfg.get('APP_NAME')

	await next()
})

// Router
// Auth is handled within the routes themselves
app.use(authApi.routes())
app.use(tempApi.routes())
app.use(router.routes())

// Start the server
const webServerPort = process.env.WEB_SERVER_PORT

if (!webServerPort) {
	throw new Error('Could not parse web server port. Your environment variables may be misconfigured.')
}

app.listen(webServerPort, err => {
	if (err) console.error(err)
	else console.log(`Server started: http://localhost:${webServerPort}/`)
})
