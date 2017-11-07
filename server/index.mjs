import dotenv from 'dotenv'
import cjs from './helpers/cjs'
import objection from 'objection'
import Knex from 'knex'
import Koa from 'koa'
import helmet from 'koa-helmet'
import mount from 'koa-mount'
import serve from 'koa-static'
import views from 'koa-views'
import cfg from '../config'
import knexCfg from '../knexfile.docker'
import api from './api'
import router from './router'

import Player from './models/player'

// Environment variables
dotenv.config()

// Database
const db = Knex(knexCfg)
const { Model } = objection

Model.knex(db)

// Example create a new player on server start
Player.query().insert({
	username: `rand_${Math.floor(Math.random() * 1000000)}`,
	password: 'meh'
})
	.then(player => {
		console.log(`Created: ${player.username} (id: ${player.id})`)
	})
	.catch(err => {
		console.log(err)
	})

// Server
const app = new Koa()

// Helmet
app.use(helmet())

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
app.use(api.routes())
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
