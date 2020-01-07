import React, { Component } from 'react'
import firebase from '../../firebase'
import ChatRender from './ChatRender'

class ChatRoom extends Component {
    state= {
        message: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.props.username.displayName)
    }

    submitHandler = (e) => {
        e.preventDefault();
        if(this.state.message !== ''){
            const chatRef = firebase.database().ref('messages');
            const chat = {
                message: this.state.message,
                user: this.props.username.displayName,
                timestamp: new Date().getTime()
            }

            chatRef.push(chat);
            this.setState({message: ''})
           // console.log(e.target.message.value)
            e.target.message.value = ''
        }
        
    }

    render() {
    //const lists = this.state.chats.map(el=> <li className="list-group-item">{el}</li>)
    const styles = {
        height: '80vh',
        overflow: 'auto'
    }
        return (
            <div className='container' >
                
                <form onSubmit={this.submitHandler}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Message</span>
                        </div>

                        <input type="text" name="message" className="form-control" placeholder="Type your message here and press enter to send..." onChange={this.changeHandler} />
                        <button className="input-group-append btn btn-primary">Send</button>
                    </div>
                </form>
                <div className="card border-0" style={styles} >
                <ChatRender />
                </div>
            </div>
        )
    }
}

export default ChatRoom
