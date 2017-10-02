import objection from 'objection'

const { Model } = objection

class Player extends Model {
	static get tableName () {
		return 'player'
	}
}

export default Player
