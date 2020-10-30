import types from './types'


const changeUsername = username => ({type: types.CHANGE_USERNAME, username: username})
const setID = id => ({type: types.SET_ID, userID: id})
const changePassword = password => ({type: types.CHANGE_PASSWORD, password: password})
const gotoRegister = () => ({type: types.GOTO_REGISTER})
const gotoLogin = () => ({type: types.GOTO_LOGIN})
const setLoggedIn = () => ({type: types.SET_LOGGED_IN})
const failedLogin = () => ({type: types.FAILED_LOGIN})
const setRegistered = () => ({type: types.SET_REGISTERED})
const unavaliableUsername = () => ({type: types.UNAVALIABLE_USERNAME})
const failedRegistration = () => ({type: types.FAILED_REGISTRATION})
const loadGames = games => ({type: types.LOAD_GAMES, games: games})
const loadUsers = users => ({type: types.LOAD_USERS, users: users})




export default {
    changeUsername,
    setID,
    changePassword,
    gotoRegister,
    gotoLogin,
    setLoggedIn,
    failedLogin,
    setRegistered,
    unavaliableUsername,
    failedRegistration,
    loadGames,
    loadUsers
}