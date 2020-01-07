import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Login from '../Auth/Login'
import Register from '../Auth/Register'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="card border-0">
                    <div className="card-body text-center">
                    <br />
                        <br />
                        <h2 className="card-title">Welcome to the group chat app!</h2>
                        <br />
                            <Link to="/login"><button type='submit' className='btn btn-primary'>Login</button></Link>
                            <span> or </span>
                            <Link to="/register"><button type='submit' className='btn btn-primary'>Register</button></Link>
                            <span> to join the chat</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
