import React, { Component } from 'react'
import Home from './Components/Home/Home'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import NavbarHome from './Components/Nav/NavbarHome'
import NavbarChat from './Components/Nav/NavbarChat'
import ChatRoom from './Components/ChatRoom/ChatRoom'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import firebase, { auth, provider } from './firebase'

class App extends Component {
  state={
    user: null,
    isAuthenticated: false
  }

  logOutUser = () => {
    firebase.auth().signOut().then(window.location = '/')
    this.setState({user: null, isAuthenticated: false})
  }

  componentDidMount = () => {
    auth.onAuthStateChanged(user => {
      if(user){
        //console.log(user)
        this.setState({user, isAuthenticated: true})
      }
    })
  }



  render(){
    const NoMatch = ({location}) => <div>No route match for {location.pathname}</div>
    const navbarComponent = this.state.isAuthenticated?<NavbarChat logout={this.logOutUser} />: <NavbarHome />
    const user_name = this.state.user?("/" + this.state.user.displayName+ "-chatroom"):null 

    //console.log(user_name)
    return (
      <Router>
        <div className="app">
          {navbarComponent}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/chatroom" render={()=> <ChatRoom username={this.state.user} />}  />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
    }
}

export default App
