import {
	default_state,
	next_rotation,
	prev_rotation,
	can_move_to,
	add_block_to_grid,
	check_rows,
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
		return { ...state, is_running: false }

		case RESUME:
			return { ...state, is_running: true }

		case RESTART:
			return default_state()


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
			const maybe_y = y + 1

			// Check if the current block can move here
			if (can_move_to(shape, grid, x, maybe_y, rotation)) {
					// If so, move down & don't place the block
					return { ...state, y: maybe_y }
			}

			// If not place the block
			// (this returns an object with a grid and gameover bool)
			const obj = add_block_to_grid(shape, grid, x, y, rotation)
			const new_grid = obj.grid
			const game_over = obj.gameOver

			// check for game_over
			if (game_over) {
				// Game Over
				const newState = { ...state }
				newState.shape = 0
				newState.grid = new_grid
				return { ...state, game_over: true }
			}

			// reset some things to start a new shape/block
			const new_state = default_state()
			new_state.grid = new_grid
			new_state.shape = next_shape
			new_state.score = score
			new_state.is_running = is_running

			// TODO: Check and Set level
			// Update the score based on if rows were completed or not
			new_state.score = score + check_rows(new_grid)

			return new_state

		case MOVE_RIGHT:
			if (can_move_to(shape, grid, x + 1, y, rotation)) {
				return { ...state, x: x + 1 }
			}
			return state

		case ROTATE_LEFT:
			const new_rotation_l = next_rotation(shape, rotation)
			if (can_move_to(shape, grid, x, y, new_rotation_l)) {
				return { ...state, rotation: new_rotation_l }
			}
			return state

		case ROTATE_RIGHT:
			const new_rotation_r = prev_rotation(shape, rotation)
			if (can_move_to(shape, grid, x, y, new_rotation_r)) {
				return { ...state, rotation: new_rotation_r }
			}
			return state

		default:
			return state
	}
}

export default game_reducer
