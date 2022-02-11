import React from 'react';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './Reducers/UserReducer';

const reducers = combineReducers({
    getCurrentUser: UserReducer
});

const config = () => {
    return createStore(reducers, applyMiddleware(thunk));
};

export default config;