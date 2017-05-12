import React from 'react'
import styled from 'styled-components'
import AppContainer from './views/AppContainer.js'
import { createStore, applyMiddleware } from 'redux'
import { reducers } from './reducers.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { promiseHandler } from './middleware.js'

const store = createStore(reducers, applyMiddleware(promiseHandler))

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
 
}






