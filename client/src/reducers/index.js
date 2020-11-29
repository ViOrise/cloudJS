import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import {fileReducer} from "./fileReduser"
import {userReducer} from "./userReduser"

const rootReducer  = combineReducers({
    user: userReducer,
    file: fileReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
