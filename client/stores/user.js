import { observable } from 'mobx'

class MatchmakingStore {
	constructor () {
		// TEMP
		this.username = 'ClutchHunter'
	}

	@observable username = ''
}

export default new MatchmakingStore()
