const Router = require('koa-router')

const router = new Router()

router.get('/', ctx => ctx.render('home'))

// 404 / fallback
router.get('*', ctx => ctx.render('404'))

module.exports = router
