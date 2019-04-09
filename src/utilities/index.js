// Define block shapes and their rotations as arrays.
export const shapes = [
	// none
	[[[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]]],

	// I
	[[[0,0,0,0],
		[1,1,1,1],
		[0,0,0,0],
		[0,0,0,0]],

	[[0,1,0,0],
		[0,1,0,0],
		[0,1,0,0],
		[0,1,0,0]]],

	// T
	[[[0,0,0,0],
		[1,1,1,0],
		[0,1,0,0],
		[0,0,0,0]],

	[[0,1,0,0],
		[1,1,0,0],
		[0,1,0,0],
		[0,0,0,0]],

	[[0,1,0,0],
		[1,1,1,0],
		[0,0,0,0],
		[0,0,0,0]],

	[[0,1,0,0],
		[0,1,1,0],
		[0,1,0,0],
		[0,0,0,0]]],

	// L
	[[[0,0,0,0],
		[1,1,1,0],
		[1,0,0,0],
		[0,0,0,0]],

	[[1,1,0,0],
		[0,1,0,0],
		[0,1,0,0],
		[0,0,0,0]],

	[[0,0,1,0],
		[1,1,1,0],
		[0,0,0,0],
		[0,0,0,0]],

	[[0,1,0,0],
		[0,1,0,0],
		[0,1,1,0],
		[0,0,0,0]]],

	// J
	[[[1,0,0,0],
		[1,1,1,0],
		[0,0,0,0],
		[0,0,0,0]],

	[[0,1,1,0],
		[0,1,0,0],
		[0,1,0,0],
		[0,0,0,0]],

	[[0,0,0,0],
		[1,1,1,0],
		[0,0,1,0],
		[0,0,0,0]],

	[[0,1,0,0],
		[0,1,0,0],
		[1,1,0,0],
		[0,0,0,0]]],

	// Z
	[[[0,0,0,0],
		[1,1,0,0],
		[0,1,1,0],
		[0,0,0,0]],

	[[0,0,1,0],
		[0,1,1,0],
		[0,1,0,0],
		[0,0,0,0]]],

	// S
	[[[0,0,0,0],
		[0,1,1,0],
		[1,1,0,0],
		[0,0,0,0]],

	[[0,1,0,0],
		[0,1,1,0],
		[0,0,1,0],
		[0,0,0,0]]],

	// O
	[[[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0],
		[0,0,0,0]]]
]

// Use random
export const random = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

// Returns the default grid
export const grid_default = () => {
	const rows = 18
	const cols = 10
	const array = []

	for (let row = 0; row < rows; row++) {
		array.push([])
		for (let col = 0; col < cols; col++) {
			array[row].push(0)
		}
	}

	return array
}

// Return the index of a random shape from 1 to the number of items in `shapes`
// We don't want the first item, which is an empty shape
export const random_shape = () => {
	return random(1, shapes.length - 1)
}

// Return the default state for the game
export const default_state = () => {
	return {
		// Create an empty grid
		grid: grid_default(),
		// Get a new random shape
		shape: random_shape(),
		// set rotation of the shape to 0
		rotation: 0,
		// set the 'x' position of the shape to 5 and y to -4, which puts the shape in the center of the grid, above the top
		x: 5,
		y: -4,
		// set the index of the next shape to a new random shape
		next_shape: random_shape(),
		// Tell the game that it's currently running
		is_running: true,
		// Set the score to 0
		score: 0,
		// Set the default speed
		speed: 100,
		// Game isn't over yet
		game_over: false
	}
}

// Returns the next rotation for a shape
// rotation can't exceed the last index of the the rotations for the given shape.
export const next_rotation = (shape, rotation) => {
	return (rotation + 1) % shapes[shape].length
}

export const can_move_to = (shape, grid, x, y, rotation) => {
	const current_shape = shapes[shape][rotation]
	// Loop through all rows and cols of the **shape**
	for (let row = 0; row < current_shape.length; row++) {
		for (let col = 0; col < current_shape[row].length; col++) {
			// Look for a 1 here
			if (current_shape[row][col] !== 0) {
				// x offset on grid
				const proposed_x = col + x
				// y offset on grid
				const proposed_y = row + y
				if (proposed_y < 0) {
					continue
				}
				// Get the row on the grid
				const possible_row = grid[proposed_y]
				// Check row exists
				if (possible_row) {
					// Check if this column in the row is undefined, if it's off the edges, 0, and empty
					if (possible_row[proposed_x] === undefined || possible_row[proposed_x] !== 0) {
						// undefined or not 0 and it's occupied we can't move here.
						return false
					}
				} else {
					return false
				}
			}
		}
	}
	return true
}

// Adds current shape to grid
export const add_block_to_grid = (shape, grid, x, y, rotation) => {
	// Get the block array
	const block = shapes[shape][rotation];
	// Copy the grid
	const new_grid = [...grid];
	// Map the Block onto the grid
	for (let row = 0; row < block.length; row++) {
		for (let col = 0; col < block[row].length; col++) {
			if (block[row][col]) {
				new_grid[row + y][col + x] = shape;
			}
		}
	}
	return new_grid;
}

// Checks for completed rows and scores points
export const check_rows = (grid) => {
	// Points increase for each row completed
	// i.e. 40 points for completing one row, 100 points for two rows
	const points = [0, 40, 100, 300, 1200]
	let completedRows = 0
	for (let row = 0; row < grid.length; row++) {
		// No empty cells means it can't find a 0, so the row must be complete!
		if (grid[row].indexOf(0) === -1) {
			completedRows += 1
			// Remove the row and add a new empty one at the top
			grid.splice(row, 1)
			grid.unshift(Array(10).fill(0))
		}
	}
	return points[completedRows]
}
