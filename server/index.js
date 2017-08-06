const dotenv = require('dotenv')
const Koa = require('koa')
const helmet = require('koa-helmet')
const mount = require('koa-mount')
const serve = require('koa-static')
const views = require('koa-views')
const cfg = require('../config')
const api = require('./api')
const router = require('./router')

// Environment variables
dotenv.config()

// Server
const app = new Koa()

// Helmet
app.use(helmet())

// Static assets
app.use(mount('/static', serve('./server/static/')))

// Views
app.use(views(`${__dirname}/views/`, {
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
app.listen(webServerPort, err => {
	if (err) console.error(err)
	else console.log(`Server started: http://localhost:${webServerPort}/`)
})
