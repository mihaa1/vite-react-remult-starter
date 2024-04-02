import { remultExpress } from 'remult/remult-express'
import { User } from '../shared/models/User'

export const api = remultExpress({
	entities: [User],
	getUser: async (req) => {
		if (!req.user) {
			throw new Error('User not found')
		}
		return {
			id: req.user?.id,
			email: req.user.email,
		}
	},
})
