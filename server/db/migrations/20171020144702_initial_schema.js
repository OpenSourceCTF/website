exports.up = knex =>
	knex.schema
		.raw('create extension if not exists "uuid-ossp"')
		.createTable('player', table => {
			table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()')).notNullable()
			table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable()
			table.dateTime('last_active').defaultTo(knex.fn.now()).notNullable()
			table.string('username', 20).unique().notNullable()
			table.dateTime('last_modified_username')
			table.string('email', 254).unique()
			table.string('password', 60).notNullable() // Length of backend crypto salt/hash
		})
		.createTable('map', table => {
			table.increments('id').primary().notNullable()
			table.string('name', 20).notNullable()
			table.string('description', 100)
			table.text('filename').notNullable()
			table.specificType('authors', 'varchar(70)[]')
		})

exports.down = knex =>
	knex.schema
		.dropTableIfExists('map')
		.dropTableIfExists('player')
		.raw('drop extension if exists "uuid-ossp"')
