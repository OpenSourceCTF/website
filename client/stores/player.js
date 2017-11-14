import { observable, computed, action, runInAction } from 'mobx'
import { getInfo } from 'API/auth'
import MatchmakingStore from './matchmaking'

const { addPlayerToLobby } = MatchmakingStore

class PlayerStore {
	init () {
		this.getPlayerInfo()
	}

	@observable username = ''

	@computed get isLoggedIn () {
		return !!this.username
	}

	@action getPlayerInfo = async () => {
		const { success: wasSuccess, info } = await getInfo()

		if (!wasSuccess || !info) return

		runInAction(() => {
			if (info.username) {
				this.username = info.username

				addPlayerToLobby(info.username)
			}
		})
	}
}

export default new PlayerStore()
