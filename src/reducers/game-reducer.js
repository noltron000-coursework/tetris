import {
	default_state,
	next_rotation,
	can_move_to,
	add_block_to_grid,
	check_rows,
	random_shape,
} from '../utilities'

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
		next_shape,
		score,
		is_running
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
			// subtract 1 from the x and check if this new position is possible by calling `can_move_to()
			if (can_move_to(shape, grid, x - 1, y, rotation)) {
					return { ...state, x: x - 1 }
			}
			return state

		case MOVE_DOWN:
			// Get the next potential Y position
			const maybeY = y + 1
			// Check if the current block can move here
			if (can_move_to(shape, grid, x, maybeY, rotation)) {
					// If so move the block
					return { ...state, y: maybeY }
			}
			// If not place the block
			const new_grid = add_block_to_grid(shape, grid, x, y, rotation)
			// reset some things to start a new shape/block
			const newState = default_state()
			newState.grid = new_grid
			newState.shape = next_shape
			newState.next_shape = random_shape()
			newState.score = score
			newState.is_running = is_running

			if (!can_move_to(next_shape, new_grid, 0, 4, 0)) {
				// Game Over
				console.log("Game Should be over...")
				newState.shape = 0
				return { ...state, gameOver: true }
			}
			// Update the score based on if rows were completed or not
			newState.score = score + check_rows(new_grid)

			return newState


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
