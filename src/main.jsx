import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import Header from './components/Header'

    function App() {
        return (
            <>
                <Header />
            </>
        )
    }

createRoot(document.getElementById('root')).render(
    <App />
)
