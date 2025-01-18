import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-logo">
        <span>KeyNest</span>
        <img src="/assets/key-logo-footer.svg" alt="KeyNest logo" />
      </Link>
      <p>&copy; 2024 KeyNest</p>
    </footer>
  )
}

export default Footer