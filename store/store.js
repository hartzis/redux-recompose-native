import { applyMiddleware, createStore } from 'redux'
import counterReducers from '../reducers'

function thunkMiddleware({ dispatch, getState }) {
    return next => action =>
        typeof action === 'function' ?
            action(dispatch, getState) :
            next(action);
}

const store = applyMiddleware(thunkMiddleware)(createStore)(counterReducers);

export default store
