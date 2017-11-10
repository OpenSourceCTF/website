import Router from 'koa-router'
import passport from 'koa-passport'
import checkAuth from './auth'

const router = new Router()

const stdRender = ctx => ctx.render('base')

// Pass all GET requests to the client router. All pages except login require auth
router.get('/login', stdRender)
router.get('*', checkAuth, stdRender)

export default router
