import {
	default_state,
	next_rotation,
	can_move_to } from '../utilities'

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
	const {
		shape,
		grid,
		x,
		y,
		rotation,
		// next_shape,
		// score,
		// is_running
	} = state

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
			// subtract 1 from the x and check if this new position is possible by calling `canMoveTo()
			if (can_move_to(shape, grid, x - 1, y, rotation)) {
					return { ...state, x: x - 1 }
			}
			return state

		case MOVE_DOWN:
			return state

		case MOVE_RIGHT:
			if (can_move_to(shape, grid, x + 1, y, rotation)) {
				return { ...state, x: x + 1 }
			}
			return state

		case ROTATE_LEFT:
			const new_rotation = next_rotation(shape, rotation)
			if (can_move_to(shape, grid, x, y, new_rotation)) {
				return { ...state, rotation: new_rotation }
			}
			return state

		case ROTATE_RIGHT:
			return state

		default:
			return state
	}
}

export default game_reducer
