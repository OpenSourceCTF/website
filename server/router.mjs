import Router from 'koa-router'
import checkAuth from './auth'

const router = new Router()

const redirectIfAlreadyAuth = async (ctx, next) => {
	if (ctx.isAuthenticated()) ctx.redirect('/')
	else await next()
}

const stdRender = ctx => ctx.render('base')

// Pass all GET requests to the client router. All pages except login require auth
router.get('/login', redirectIfAlreadyAuth, stdRender)
router.get('/register', redirectIfAlreadyAuth, stdRender)
router.get('*', checkAuth({ redirect: true }), stdRender)

export default router
