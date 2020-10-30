import types from './types';

const INITIAL_STATE = {
    gameData: {
      gameName:null, 
      gameID:null,
    },
    sessionMetadata: {
      isMatchJoined:false,
      matchesListLoaded:false,
    },
    roomData: {
      matches:[],
      joinedRoom: null,
      activePlayers: [],
      maxPlayers:null,

    }
}

const gameReducer = (state = INITIAL_STATE, action ) => { 
  switch (action.type){
    case types.MATCHES_UNLOADED:
      return {
        ...state,
        sessionMetadata: {
          ...state.sessionMetadata,
          matchesListLoaded: false,
        }
      }
    case types.LOAD_MATCHES: 
      return {
        ...state, 
        roomData: {
          ...state.roomData, 
          matches: action.matches,
        },
        sessionMetadata: {
          ...state.sessionMetadata,
          matchesListLoaded: true,
        }
      }
    case types.JOIN_MATCH: 
      return {     
        ...state,
        roomData: {
          ...state.roomData, 
          joinedRoom: action.roomID,//
          activePlayers: action.players,//
          maxPlayers: action.maxPlayers,//
        },
        sessionMetadata: {
          ...state.sessionMetadata,
          isMatchJoined: true,
        }
      }
    case types.MATCH_NOT_JOINED: 
      return { 
        ...state,
        sessionMetadata: {
          ...state.sessionMetadata,
          isMatchJoined: false,
        },
        roomData: {
          ...state.roomData,
          joinedRoom: null,
          activePlayers: [],
          maxPlayers:null,
    
        }
      }
    case types.INIT_GAME: 
      return {
        ...state,
        gameData: {
          gameName: action.gameName,
          gameID: action.gameID,
        }
      }
    default:
        return state
  }
}

export default gameReducer 