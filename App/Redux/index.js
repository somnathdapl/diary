import { combineReducers } from 'redux'
import configureStore from './CreateStore'

/* Import all reducers */
import { navReducer, middleware } from '../Navigation/AppNavigation'
import { authReducer } from './AuthRedux'



/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
    nav: navReducer,
    auth: authReducer
})

export default () => {
    let { store } = configureStore(reducers, middleware)

    return store
}