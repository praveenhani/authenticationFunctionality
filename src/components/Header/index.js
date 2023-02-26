// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <ul className="header-container">
      <Link to="/">
        <li className="list1">Home</li>
      </Link>
      <Link to="/about">
        <li className="list1">About</li>
      </Link>
    </ul>
  </>
)

export default Header
