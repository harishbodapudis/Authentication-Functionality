// Write your JS code here
import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

class LogoutButton extends Component {
  removeCookie = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <button type="button" onClick={this.removeCookie}>
        Logout
      </button>
    )
  }
}

export default withRouter(LogoutButton)
