exports.seed = knex =>
	// Delete all preexisting flairs
	knex('flair').del()
		.then(() =>
			// Insert seed flairs
			knex('flair').insert([
				{
					name: 'Lucky Charm',
					description: 'Guaranteed to improve luck by <calc_luck()>%.',
					filename: '/path/to/flair1.png'
				},
				{
					name: 'Beer',
					filename: '/path/to/flair2.png'
				},
				{
					name: 'Preferably Static',
					filename: '/path/to/flair3.png'
				}
			])
		)
