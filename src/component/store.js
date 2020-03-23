import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index'

const intialState = {}

const middlware = [thunk]

const store = createStore(rootReducer, intialState, applyMiddleware(...middlware))

export default store