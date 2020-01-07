import React from 'react'
import { Link } from 'react-router-dom'

const NavbarHome = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light justify-content-between">
                <Link to="/" className="navbar-brand">Home</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a href="#!" className="nav-link" onClick={props.logout}>Logout</a>
                    </li> */}
                </ul> 
            </nav>
        </div>
    )
}

export default NavbarHome
