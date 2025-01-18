import { Link, useLocation } from 'react-router-dom'
import '../styles/header.css'

function Header() {
  const location = useLocation()
  
  return (
    <header className="header">
      <nav>
        <Link to="/" className="header-logo">
          <span>KeyNest</span>
          <img src="/assets/key-logo.svg" alt="KeyNest logo" />
        </Link>
        <ul>
          <li>
            <Link className={location.pathname === '/' ? 'active' : ''} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === '/about' ? 'active' : ''}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
