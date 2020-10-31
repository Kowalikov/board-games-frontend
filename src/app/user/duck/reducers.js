import types from './types';

const INITIAL_STATE = {
    userData: {
      username : null,
      userID: null,
      password : null,
    },
    loginMetadata: {
      isLogged : false,
      isRegistered: false,
      wantRegister : false,
      loading : false,
      wrongLoginData : false,
      unavaliableUsername : false,
      usersLoaded : false,
      gamesListLoaded : false,
    },
    sessionData: {
      games:[],
      users:[],
    }
}

const userReducer = (state = INITIAL_STATE, action ) => { 
  switch (action.type){
    case types.CHANGE_USERNAME: 
      return {
        ...state, 
        userData: {
          ...state.userData, 
          username: action.username
        }
      }
    case types.SET_ID:
      return {
        ...state,
        userData: {
          ...state.userData,
          userID: action.userID
        }
      }
    case types.CHANGE_PASSWORD: 
      return {     
        ...state,
        userData: {
          ...state.userData, 
          password: action.password
        }
      }
    case types.GOTO_REGISTER:
      return {
        ...state,
        loginMetadata: {
          ...state.loginMetadata,
          wantRegister: true,
        }
      }
    case types.GOTO_LOGIN:
      return {
        ...state,
        loginMetadata: {
          ...state.loginMetadata,
          wantRegister: false,
        }
      }
    case types.SET_LOGGED_IN: {
      return {
        ...state,
        loginMetadata: {
          ...state.loginMetadata,
          loading: false, //CO Z TYM?
          isLogged: true,
          wrongLoginData: false,
        }
      }
    }
    case types.FAILED_LOGIN: {
      return {
        ...state,
        loginMetadata: {
          ...state.loginMetadata,
          loading: false, //CO Z TYM?
          wrongLoginData: true,
        }
      }
    }
    case types.SET_REGISTERED:
      return {
        ...state,
        loginMetadata: {
          ...state.loginMetadata,
          wantRegister: false,
          usersLoaded:true,
          isLogged: true,
          unavaliableUsername : false,
          isRegistered: true,
        }
      }
    case types.UNAVALIABLE_USERNAME:
      return {
        ...state,
        loginMetadata: {
          ...state.loginMetadata,
          isLogged: false,
          unavaliableUsername : true,
          isRegistered: false,
        }
      }
    case types.FAILED_REGISTRATION:
      return {
        ...state,
        loginMetadata: {
          ...state.loginMetadata,
          isLogged: false,
          unavaliableUsername : false,
          isRegistered: false,
        }
      }
    case types.LOAD_GAMES: 
      return {     
        ...state,
        loginMetadata: {
          ...state.loginMetadata,
          gamesListLoaded: true,
        },
        sessionData: {
          ...state.sessionData, 
          games: action.games,
        }
      }
    case types.LOAD_USERS: 
      return {     
        ...state,
        loginMetadata: {
          ...state.loginMetadata,
          usersLoaded: true,
        },
        sessionData: {
          ...state.sessionData, 
          users: action.users,
        }
      }
    default:
        return state
  }
}

export default userReducer 