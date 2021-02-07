import App from 'next/app'
// @ts-ignore
import { Provider } from 'react-redux'
import store from '../redux/store'
import React from 'react'

import '../styles/main.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        )
    }

}

export default MyApp
