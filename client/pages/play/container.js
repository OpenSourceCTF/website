import React, { Component } from 'react'
import axios from 'axios'

import PlayPage from './play'

class PlayPageContainer extends Component {
	state = {
		testServers: []
	}

	constructor () {
		super()

		this.getServers()
	}

	getServers = async () => {
		const testServers = await axios.get('/api/servers').then(res => res.data.servers)

		this.setState({ testServers })
	}

	render () {
		return (
			<PlayPage servers={this.state.testServers} />
		)
	}
}

export default PlayPageContainer
