export const PAUSE        = 'PAUSE'        // Pause the game
export const RESUME       = 'RESUME'       // Resume a paused game
export const RESTART      = 'RESTART'      // Restart Game
export const GAME_OVER    = 'GAME_OVER'    // The game is over
export const MOVE_UP      = 'MOVE_UP'      // [w]/[↑] Slow piece's descent
export const MOVE_LEFT    = 'MOVE_LEFT'    // [a]/[←] Move piece left
export const MOVE_DOWN    = 'MOVE_DOWN'    // [s]/[↓] Speed up piece's descent
export const MOVE_RIGHT   = 'MOVE_RIGHT'   // [d]/[→] Move piece right
export const ROTATE_LEFT  = 'ROTATE_LEFT'  // [q] Rotate piece left
export const ROTATE_RIGHT = 'ROTATE_RIGHT' // [e] Rotate piece right

export const pause = () => {
	return { type: PAUSE }
}

export const resume = () => {
	return { type: RESUME }
}

export const restart = () => {
	return { type: RESTART }
}

export const game_over = () => {
	return { type: GAME_OVER }
}

export const move_up = () => {
	return { type: MOVE_UP }
}

export const move_left = () => {
	return { type: MOVE_LEFT }
}

export const move_down = () => {
	return { type: MOVE_DOWN }
}

export const move_right = () => {
	return { type: MOVE_RIGHT }
}

export const rotate_left = () => {
	return { type: ROTATE_LEFT }
}

export const rotate_right = () => {
	return { type: ROTATE_RIGHT }
}
