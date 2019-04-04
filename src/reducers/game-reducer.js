import {
	PAUSE,
	RESUME,
	RESTART,
	GAME_OVER,
	MOVE_UP,
	MOVE_LEFT,
	MOVE_DOWN,
	MOVE_RIGHT,
	ROTATE_LEFT,
	ROTATE_RIGHT } from '../actions'

const gameReducer = (state = {}, action) => {
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

export default gameReducer
