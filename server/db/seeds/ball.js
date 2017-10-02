exports.seed = knex =>
// Delete all preexisting balls
	knex('ball').del()
		.then(() =>
			// Insert seed balls
			knex('ball').insert([
				{
					name: 'Ball #1',
					description: 'The #1 ball.',
					filename: '/path/to/ball1.png'
				},
				{
					name: 'Ball #2',
					filename: '/path/to/ball2.png'
				},
				{
					name: 'Ball #3',
					filename: '/path/to/ball3.png'
				}
			])
		)
