const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	client: 'pg',
	connection: {
		host: 'localhost',
		port: process.env.HOST_DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DB
	},
	migrations: {
		directory: './server/db/migrations'
	},
	seeds: {
		directory: './server/db/seeds'
	}
}
