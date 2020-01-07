import React from 'react'
import { Link } from 'react-router-dom'

const NavbarChat = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light justify-content-between">
                <Link to="/" className="navbar-brand">Chatrooms</Link>
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to='/' className="nav-link" onClick={props.logout}>Logout</Link>
                    </li>
                </ul> 
            </nav>
        </div>
    )
}

export default NavbarChat
