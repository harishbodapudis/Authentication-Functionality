// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <center>
    <ul className="header-container">
      <Link className="links" to="/">
        <li>Home</li>
      </Link>
      <Link className="links" to="/about">
        <li>About</li>
      </Link>
    </ul>
  </center>
)

export default Header
