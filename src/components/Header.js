import React from 'react'
import { Link } from 'react-router-dom'
import '../static/header.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top ">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">TODO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-link text-white active" aria-current="page" to="/signin">Sign In</Link>
                        <Link className="nav-link text-white" to="/signup">Sign Up</Link>
                        <Link className="nav-link" to="#">
                            <button className="btn bg-danger">Sign Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header
