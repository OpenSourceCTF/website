import { observable, computed, action, runInAction } from 'mobx'
import axios from 'axios'

class AddonsStore {
	constructor () {
		// Fetch list of addons from website server
		this.getAddons()
	}

	@observable addons = []

	@computed get addonsSortedByMostRecent () {
		return this.addons.sort((a, b) => {
			if (a.lastModified > b.lastModified) return -1
			else if (a.lastModified < b.lastModified) return 1
			return 0
		})
	}

	@action getAddons = async () => {
		const addons = await axios.get('/api/addons').then(res => res.data.addons)

		if (!addons) return

		runInAction(() => {
			this.addons = addons
		})
	}
}

export default new AddonsStore()
