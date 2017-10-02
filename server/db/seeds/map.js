exports.seed = knex =>
// Delete all preexisting maps
	knex('map').del()
		.then(() =>
			// Insert seed maps
			knex('map').insert([
				{
					name: 'Map #1',
					description: 'The #1 map.',
					filename: '/path/to/map1.json'
				},
				{
					name: 'Map #2',
					filename: '/path/to/map2.json'
				},
				{
					name: 'Map #3',
					filename: '/path/to/map3.json'
				}
			])
		)
