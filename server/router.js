const Router = require('koa-router')

const router = new Router()

// Pass all GET requests to the client router
router.get('*', ctx => ctx.render('base'))

module.exports = router
