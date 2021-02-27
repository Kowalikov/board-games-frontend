import types from './types';

const INITIAL_STATE = {
    gameData: {
      gameName:'BoardGames', 
      gameID:null,
    },
    sessionMetadata: {
      isMatchJoined:false,
      fullDataLoaded:false,
      matchesListLoaded:false,
    },
    roomData: {
      joinedGameName: null,
      joinedGameID: 0,
      matches:[],
      joinedRoom: null,
      activePlayers: [],
      maxPlayers:null,
      boardState: [],
      myMark: null,
      nextPlayer: null,
      status: "",
      winner: null,
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
          fullDataLoaded: false
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
          //fullDataLoaded: true,
        }
      }
    case types.FULL_LOAD_MATCH:
      return {
        ...state, 
        sessionMetadata: {
          ...state.sessionMetadata,
          fullDataLoaded: true,
        }
      }
    case types.JOIN_MATCH: 
      return {     
        ...state,
        roomData: {
          ...state.roomData,
          joinedGameName: action.roomGameName,
          joinedGameID: action.roomGameID, 
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
          fullDataLoaded: false,
        },
        roomData: {
          ...state.roomData,
          joinedRoom: null,
          activePlayers: [],
          maxPlayers:null,
          boardState: [],
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
    case types.UPDATE_BOARDSTATE:
      return {
        ...state,
        roomData: {
          ...state.roomData,
          boardState: action.boardState,
        }
      }
    case types.GAME_STATUS:
      return { 
        ...state,
        roomData: {
          ...state.roomData,
          status: action.status,
          winner: action.winnerMark,
        }
      }
    case types.NEXT_PLAYER:
    return { 
      ...state,
      roomData: {
        ...state.roomData,
        nextPlayer: action.nextPlayer,
      }
    }
    case types.SET_MARK:
    return { 
      ...state,
      roomData: {
        ...state.roomData,
        myMark: action.mark,
      }
    }
    default:
        return state
  }
}

export default gameReducer 