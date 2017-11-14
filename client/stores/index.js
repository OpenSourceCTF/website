import addons from './addons'
import matchmaking from './matchmaking'
import player from './player'

const stores = {
	addons,
	matchmaking,
	player
}

// Intended to run potentially many API calls and side effects once the user is
// confirmed to be logged in
export const init = () => {
	addons.init()
	matchmaking.init()
	player.init()
}

// Run init now on load if we're not on a "no auth" page (login or register)
if (!['/login', '/register'].includes(window.location.pathname)) init()

export default stores
