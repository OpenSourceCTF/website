// "pass" in plaintext
const password = '$2a$10$vcJcMadI89UQoQjcSmgnGejKRryJb2/jAgHrqpm1pTfsBLumSdtSG'

exports.seed = knex =>
	// Delete all preexisting players
	knex('player').del()
		.then(() =>
			// Insert seed players
			knex('player').insert([
				{
					username: 'Hodor',
					email: 'wylis@wester.os',
					password
				},
				{
					username: 'Jon',
					email: 'aegon.vi@wester.os',
					password
				},
				{
					username: 'Daenarys',
					password
				}
			])
		)
