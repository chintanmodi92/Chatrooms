import React, { Component } from 'react'
import firebase from '../../firebase'
import moment from'moment'


class ChatRender extends Component {
    state={
        chats:[]
    }

    componentDidMount = () => {
        const chatRef = firebase.database().ref('messages')
        chatRef.on('value', snapshot => {
            const getChats = snapshot.val();
            let tempChats = [];
            for(let chat in getChats){
                if(getChats[chat].message !== ''){
                    tempChats.push({
                        id: chat,
                        message: getChats[chat].message,
                        user: getChats[chat].user,
                        date: getChats[chat].timestamp
                    })
                }
            }
            const chats = tempChats.reverse();
            this.setState({chats})
        })
    }
    render() {
        const lists = this.state.chats.map(el=> {
            console.log(el.date)
            const when = moment(el.date).fromNow();
            return(

                <div key={el.id} className="list-group-item list-group-item-action">
                    <p className="mb-1">{el.message}</p>
                    <div className="d-flex w-100 justify-content-between ">
                        <small style={{fontSize:'12px'}}><em>{el.user}</em></small>
                        <small>{when}</small>
                    </div>
                    
                </div>


                // <div class="d-flex w-100 justify-content-between list-group-item">
                // <p class="mb-1"></p>
                //     <small>{el.timestamp}</small>
                //     <li key={el.id} className="">{el.message}</li>
                // </div>                
                
            )
        }
        )

        return (
            <div>
                <div className="list-group">
                    {lists}
                </div>
            </div>
        )
    }
}

export default ChatRender
