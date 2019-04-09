import { default_state } from '../utilities'

import {
	PAUSE,
	RESUME,
	RESTART,
	GAME_OVER,
	MOVE_UP,
	MOVE_LEFT,
	MOVE_RIGHT,
	MOVE_DOWN,
	ROTATE_LEFT,
	ROTATE_RIGHT } from '../actions'

const game_reducer = (state = default_state(), action) => {
	switch(action.type) {
		case PAUSE:
			return state

		case RESUME:
			return state

		case RESTART:
			return state

		case GAME_OVER:
			return state

		case MOVE_UP:
			return state

		case MOVE_LEFT:
			return state

		case MOVE_DOWN:
			return state

		case MOVE_RIGHT:
			return state

		case ROTATE_LEFT:
			return state

		case ROTATE_RIGHT:
			return state

		default:
			return state
	}
}

export default game_reducer
