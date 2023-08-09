import React from 'react'
import { Header } from './components/Header'
import { ToDo } from './components/ToDo'
import '../src/styles/index.less'

const App = () => {
    return (
        <>
            <Header/>
            <ToDo/>
        </>
    )
}

export {App}