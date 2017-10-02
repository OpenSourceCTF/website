exports.up = knex =>
	knex.schema
		.raw('create extension if not exists "uuid-ossp"')
		.createTable('flair', table => {
			table.increments('id').primary().notNullable()
			table.string('name', 20).notNullable()
			table.string('description', 100)
			table.text('filename').notNullable()
		})
		.createTable('ball', table => {
			table.increments('id').primary().notNullable()
			table.string('name', 20).notNullable()
			table.string('description', 100)
			table.text('filename').notNullable()
		})
		.createTable('player', table => {
			table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()')).notNullable()
			table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable()
			table.dateTime('last_active').defaultTo(knex.fn.now()).notNullable()
			table.string('username', 20).unique().notNullable()
			table.dateTime('last_modified_username')
			table.string('email', 254).unique()
			table.string('password', 100).notNullable() // TODO update this length to reflect pw crypto
			table.integer('selected_flair').references('id').inTable('flair').onDelete('SET NULL')
			table.integer('selected_ball').references('id').inTable('ball').onDelete('SET NULL')
			table.specificType('competitive_honors', 'text[]')
		})
		.createTable('map', table => {
			table.increments('id').primary().notNullable()
			table.string('name', 20).notNullable()
			table.string('description', 100)
			table.text('filename').notNullable()
		})

exports.down = knex =>
	knex.schema
		.dropTableIfExists('map')
		.dropTableIfExists('player')
		.dropTableIfExists('ball')
		.dropTableIfExists('flair')
		.raw('drop extension if exists "uuid-ossp"')
