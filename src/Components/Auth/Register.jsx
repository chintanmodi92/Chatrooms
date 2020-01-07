import React, { Component } from 'react'
import firebase from '../../firebase'
import { Link } from 'react-router-dom'

import './Auth.css'
import Login from './Login'

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: null
    }

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        const {email, username, password} = this.state
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = firebase.auth().currentUser;
                user.updateProfile({displayName: username})
                    .then(() => {
                        this.props.history.push("/login")
                    }).catch(error => {
                        this.setState({error})
                    })
            }).catch(error => {
                this.setState({error})
            })

    }

    render() {
        const {email, username, password, error} = this.state;
        return (
            <div className="container">
                <div className="card border-0">
                    <div className="card-body">
                        <h2 className="card-title">Register your account</h2>
                        {error && <p className="alert alert-danger">{error.message}</p>}
                    <form  onSubmit = {this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className='form-control'  value={username} onChange={this.changeHandler} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" id="email" className='form-control' placeholder='name@example.com' value={email} onChange={this.changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className='form-control' value={password} onChange={this.changeHandler} />
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type='submit' className='btn btn-primary' children='Register' />
                            <span className='mr-0'>Already have an account? <Link className="login-btn" to="/login">Login Here</Link></span>
                        </div>

                    </form>
                    </div>
                </div>
            </div>



            //     <h1>Register your account</h1>
            //     {error && <p className="error-message">{error.message}</p>}
            //     <form onSubmit = {this.submitHandler}>
            //         <label htmlFor="username">Username</label>
            //         <input type="text" name="username" id="username" value={username} onChange={this.changeHandler} />
            //         <label htmlFor="email">Email address</label>
            //         <input type="email" name="email" id="email" value={email} onChange={this.changeHandler} />
            //         <label htmlFor="password">Choose a password</label>
            //         <input type="password" name="password" id="password" value={password} onChange={this.changeHandler} />

            //         <button className='general-submit' children='Get Started' />
            //         <p>Already have an account? <Link className="login-btn" to="/login">Login Here</Link></p>
            //     </form>
            // </div>
        )
    }
}

export default Register
