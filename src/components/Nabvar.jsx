import React from 'react'
import { Link } from 'react-router-dom'

export default function Nabvar() {
    return (
        <header className='fixed-top'>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Casita</Link>
                    <Link className="navbar-brand" to="/Rhodes">Rhodes</Link>
                    <Link className="navbar-brand" to="/Fate-go">Fate Go</Link>
                </div>
            </nav>
        </header>    
    )
}
