import objection from 'objection'
import bcrypt from 'bcrypt'

const { Model } = objection

const saltRounds = 10

class Player extends Model {
	static get tableName () {
		return 'player'
	}

	// Salt/hash password before insertion
	async $beforeInsert (...x) {
		if (this.password) {
			this.password = await bcrypt.hash(this.password, saltRounds)
		}
	}
}

export default Player
