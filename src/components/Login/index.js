// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  changeView = () => {
    const {history} = this.props
    history.replace('/')
  }

  loginView = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      this.changeView()
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <center>
        <h1>Please Login</h1>
        <button type="button" onClick={this.loginView}>
          Login with Sample Creds
        </button>
      </center>
    )
  }
}

export default Login
