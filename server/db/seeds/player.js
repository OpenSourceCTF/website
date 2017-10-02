exports.seed = knex =>
	// Delete all preexisting players
	knex('player').del()
		.then(() =>
			// Insert seed players
			knex('player').insert([
				{
					username: 'Hodor',
					email: 'wylis@wester.os',
					password: 'pass' // This is only temporarily plaintext
				},
				{
					username: 'Jon',
					email: 'aegon.vi@wester.os',
					password: 'pass' // This is only temporarily plaintext
				},
				{
					username: 'Daenarys',
					password: 'pass' // This is only temporarily plaintext
				}
			])
		)
