import React from 'react'
import ReactDOM from 'react-dom'

import App from './main/app.componet'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

// middleware
import promisse from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './store/reducers/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

// Add config de middleware para funcionar chamada async atravez das promisses
const store = applyMiddleware(promisse, multi, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'))
