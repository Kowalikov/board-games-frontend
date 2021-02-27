import types from './types'


const matchesUnloaded = () => ({type: types.MATCHES_UNLOADED})
const loadMatches = matches => ({type: types.LOAD_MATCHES, matches: matches})
const fullLoadMatch = () => ({type: types.FULL_LOAD_MATCH})
const joinMatch = (roomID, roomGameName, roomGameID, players, maxPlayers) => ({type: types.JOIN_MATCH, roomID: roomID, roomGameName:roomGameName, roomGameID: roomGameID, players: players, maxPlayers: maxPlayers})
const matchNotJoined = () => ({type: types.MATCH_NOT_JOINED})
const initGame = (gameName, gameID) => ({type: types.INIT_GAME, gameName: gameName, gameID: gameID})
const updateBoardState = (boardState) => ({type: types.UPDATE_BOARDSTATE, boardState: boardState})
const gameStatus = (status, winnerMark) => ({type: types.GAME_STATUS, status: status, winnerMark: winnerMark})
const nextPlayer = (nextPlayer) => ({type: types.NEXT_PLAYER, nextPlayer:nextPlayer})
const setMark = (mark) => ({type: types.SET_MARK, mark:mark})

export default {
    matchesUnloaded,
    loadMatches,
    fullLoadMatch,
    joinMatch,
    matchNotJoined,
    initGame,
    updateBoardState,
    gameStatus,
    nextPlayer,
    setMark
}