import { combineReducers } from 'redux'
import game_reducer from '../reducers/game-reducer'


// The state handled by `game_reducer` will be stored with the property name `game` on the Redux store.
const reducers = combineReducers({
	game: game_reducer
})
export default reducers
