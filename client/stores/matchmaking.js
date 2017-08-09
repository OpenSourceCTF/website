import { observable, action, runInAction } from 'mobx'
import axios from 'axios'

class MatchmakingStore {
	constructor () {
		// Fetch list of game servers from website server
		this.getServers()

		// Get last used matchmaking server from user's browser
		const previousChosenServer = localStorage.getItem('matchmaking_server')
		if (previousChosenServer) this.setServer(previousChosenServer)
	}

	@observable servers = []
	@observable chosenServer = ''
	@observable competitive = false

	@action getServers = async () => {
		const servers = await axios.get('/api/servers').then(res => res.data.servers)

		runInAction(() => {
			this.servers = servers
		})
	}

	@action setServer = server => {
		this.chosenServer = server

		// Persist chosen server to user's browser for future sessions
		localStorage.setItem('matchmaking_server', server)
	}

	@action setCompetitive = competitive => {
		this.competitive = competitive
	}
}

export default new MatchmakingStore()
