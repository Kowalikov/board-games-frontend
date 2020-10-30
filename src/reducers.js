import {combineReducers} from 'redux';
import userReducer from './app/user/duck/index';
import gameReducer from './app/game/duck/index';

const rootReducer = combineReducers ({
    userSession: userReducer,
    gameSession: gameReducer,
})

export default rootReducer
