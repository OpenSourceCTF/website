import { observable, computed, action, runInAction } from 'mobx'
import axios from 'axios'

class MatchmakingStore {
	constructor () {
		// Fetch list of game servers from website server
		this.getServers()

		// Get last used matchmaking server from user's browser
		const previousChosenServer = localStorage.getItem('matchmaking_server')
		if (previousChosenServer) this.setServer(previousChosenServer)

		// TEMP
		;['teoretyczny', 'DwarfFortres', 'ElectroBall'].forEach(this.addPlayerToLobby)
		this.changePlayerLobbyGroup('teoretyczny', 'blue')
	}

	@observable servers = []
	@observable chosenServer = ''
	@observable privateGame = false
	@observable publicLobby = false
	@observable othersInLobby = [] // 'red', 'blue', or 'spectators'

	@computed get serversSortedByPing () {
		return this.servers.sort((a, b) => {
			if (a.ping > b.ping) return 1
			else if (a.ping < b.ping) return -1

			return 0
		})
	}

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

	@action setGamePublic = () => {
		this.privateGame = false
	}

	@action setGamePrivate = () => {
		this.privateGame = true
	}

	@action setLobbyPublic = () => {
		this.publicLobby = true
	}

	@action setLobbyPrivate = () => {
		this.publicLobby = false
	}

	@action addPlayerToLobby = player => {
		this.othersInLobby.push({
			name: player,
			group: 'spectators'
		})
	}

	@action changePlayerLobbyGroup = (playerName, group) => {
		const playerIndex = this.othersInLobby.findIndex(player => player.name === playerName)

		this.othersInLobby[playerIndex].group = group
	}

	@action removePlayerFromLobby = playerName => {
		const playerIndex = this.othersInLobby.findIndex(player => player.name === playerName)

		this.othersInLobby.splice(playerIndex, 1)
	}

	@action purgeLobby = () => {
		this.othersInLobby = []
	}
}

export default new MatchmakingStore()
