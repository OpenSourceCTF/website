import { observable, computed, action } from 'mobx'

class PlayerStore {
	@observable username = ''

	@computed get isLoggedIn () {
		return !!this.username
	}

	@action setPlayerDetails = username => {
		this.username = username
	}
}

export default new PlayerStore()
