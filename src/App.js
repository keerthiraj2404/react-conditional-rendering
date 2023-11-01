import {Component} from 'react'
import './App.css'

/* 
class App extends Component {
  state = {isLoggedIn: false}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return (
        <button className="button" type="button">
          LogOut
        </button>
      )
    }
    return (
      <button className="button" type="button">
        LogIn
      </button>
    )
  }

  render() {
    return <div className="container">{this.renderAuthButton()}</div>
  }
}

export default App 
*/

/*
class App extends Component {
  state = {isLoggedIn: true}

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        {isLoggedIn ? (
          <button type="button" className="button">
            LogOut
          </button>
        ) : (
          <button type="button" className="button">
            LogIn
          </button>
        )}
      </div>
    )
  }
}

export default App 
*/

class App extends Component {
  state = {isLoggedIn: false}

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        {isLoggedIn && (
          <button type="button" className="button">
            LogOut
          </button>
        )}
        {!isLoggedIn && (
          <button type="button" className="button">
            LogIn
          </button>
        )}
      </div>
    )
  }
}

export default App
