import React from 'react'
import PropTypes from 'prop-types'

const PublicLobby = ({ servers, selectedServer, selectServer }) => {
	const renderedServerOpts = servers.map(server => (
		<option
			key={server.name}
			value={server.name}
		>
			{server.name} ({server.location}) (~{server.ping}ms)
		</option>
	))

	return (
		<div>
			<label htmlFor="server">Choose server: </label>
			<select
				value={selectedServer}
				onChange={evt => selectServer(evt.target.value)}
				name="server"
			>
				{renderedServerOpts}
			</select>
		</div>
	)
}

PublicLobby.propTypes = {
	servers: PropTypes.arrayOf(PropTypes.object).isRequired,
	selectedServer: PropTypes.string.isRequired,
	selectServer: PropTypes.func.isRequired
}

export default PublicLobby
