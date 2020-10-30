import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import * as actionCreators from "./app/user/duck/index";


const composeEnhancers = composeWithDevTools({ 
  actionCreators, 
  trace: true, 
  traceLimit: 25 
}); 

const store = createStore(rootReducer, composeEnhancers())

export default store
