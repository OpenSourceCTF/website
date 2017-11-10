import { observable, computed, action, runInAction } from 'mobx'
import { getServers } from '../api/game'

class MatchmakingStore {
	constructor () {
		// Fetch list of game servers from website server
		this.getServers()

		// Get last used matchmaking server from user's browser
		const previousChosenServer = localStorage.getItem('matchmaking_server')
		if (previousChosenServer) this.setServer(previousChosenServer)

		// TEMP
		;['teoretyczny', 'DwarfFortres', 'ElectroBall'].forEach(this.addPlayerToLobby)
	}

	@observable servers = []
	@observable chosenServer = ''
	@observable publicGame = true
	@observable publicLobby = false
	@observable playersInLobby = [] // Expected groups: 'team1', 'team2', 'spectators'

	@computed get serversSortedByPing () {
		return this.servers.sort((a, b) => {
			if (a.ping > b.ping) return 1
			else if (a.ping < b.ping) return -1

			return 0
		})
	}

	@computed get lobbyIsActive () {
		return this.playersInLobby.length > 1
	}

	@action getServers = async () => {
		const servers = await getServers()

		if (!servers) return

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
		this.publicGame = true
	}

	@action setGamePrivate = () => {
		this.publicGame = false
	}

	@action setLobbyPublic = () => {
		this.publicLobby = true
	}

	@action setLobbyPrivate = () => {
		this.publicLobby = false
	}

	@action addPlayerToLobby = player => {
		this.playersInLobby.push({
			name: player,
			group: 'spectators'
		})
	}

	@action changePlayerLobbyGroup = (playerName, group) => {
		const playerIndex = this.playersInLobby.findIndex(player => player.name === playerName)

		this.playersInLobby[playerIndex].group = group
	}

	@action removePlayerFromLobby = playerName => {
		const playerIndex = this.playersInLobby.findIndex(player => player.name === playerName)

		this.playersInLobby.splice(playerIndex, 1)
	}

	@action purgeLobby = () => {
		this.playersInLobby = []
	}
}

export default new MatchmakingStore()
