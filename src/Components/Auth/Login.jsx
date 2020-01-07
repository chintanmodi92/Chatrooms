import React, { Component } from 'react'
import firebase from 'firebase'

class Login extends Component {
    state = {
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
        const {email, password} = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                //console.log(user.user.displayName)
                this.props.history.push('/chatroom')
            }).catch(error => {
                this.setState({error})
            })

    }

    render() {
        const {email, password, error} = this.state;
        return (
            <div className="container">
                <div className="card border-0">
                    <div className="card-body">
                        <h2 className="card-title">Login to your account</h2>
                        {error && <p className="alert alert-danger">{error.message}</p>}
                    <form  onSubmit = {this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" id="email" className='form-control' placeholder='name@example.com' value={email} onChange={this.changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className='form-control' value={password} onChange={this.changeHandler} />
                        </div>

                        <button type='submit' className='btn btn-primary' children='Login' />
                    </form>
                    </div>
                </div>
            </div>




            // <div className='container'>
            //     <h1>Login to your account</h1>
            //     {error && <p className="error-message">{error.message}</p>}
            //     <form  onSubmit = {this.submitHandler}>
            //         <div className="form-group">
            //             <label htmlFor="email">Email address</label>
            //             <input type="email" name="email" id="email" className='form-control' placeholder='name@example.com' value={email} onChange={this.changeHandler} />
            //         </div>
            //         <div className="form-group">
            //             <label htmlFor="password">Password</label>
            //             <input type="password" name="password" id="password" className='form-control' value={password} onChange={this.changeHandler} />

            //         </div>

            //         <button type='submit' className='btn btn-primary' children='Login' />
            //     </form>
            // </div>
        )
    }
}

export default Login
