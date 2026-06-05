import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import Header from './components/Header'
import Nav from './components/Nav'

    function App() {
        return (
            <>
                <Header />
                <Nav />
            </>
        )
    }

createRoot(document.getElementById('root')).render(
    <App />
)

