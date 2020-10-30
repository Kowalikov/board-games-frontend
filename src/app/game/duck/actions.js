import types from './types'


const matchesUnloaded = () => ({type: types.MATCHES_UNLOADED})
const loadMatches = matches => ({type: types.LOAD_MATCHES, matches: matches})
const joinMatch = (roomID, players, maxPlayers) => ({type: types.JOIN_MATCH, roomID: roomID, players: players, maxPlayers: maxPlayers})
const matchNotJoined = () => ({type: types.MATCH_NOT_JOINED})
const initGame = (gameName, gameID) => ({type: types.INIT_GAME, gameName: gameName, gameID: gameID})

export default {
    matchesUnloaded,
    loadMatches,
    joinMatch,
    matchNotJoined,
    initGame,
}