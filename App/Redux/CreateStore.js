import { createStore, applyMiddleware, compose } from 'redux'

// Create the store
export default (rootReducer, middlewares) => {
    /* ------------- Redux Configuration ------------- */
    const middleware = []
    const enhancers = []

    middleware.push(middlewares)

    /* ------------- Assemble Middleware ------------- */
    enhancers.push(applyMiddleware(...middleware))

    /* ------------- Configure Store ------------- */
    const store = createStore(rootReducer, compose(...enhancers))

    return {
        store
    }
}