import counterReducer from './counter'
import  loggedReducer from './isLogged'
import vendorReducer from './vendorReducer'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    islogged : loggedReducer,
    vendorReducer: vendorReducer
})

export default allReducers