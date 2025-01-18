import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../features/languageSlice'
import '../styles/footer.css'

function Footer() {
  const dispatch = useDispatch()
  const currentLanguage = useSelector((state) => state.language)

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' }
  ]

  const handleLanguageChange = (langCode) => {
    dispatch(setLanguage(langCode))
  }

  return (
    <footer className="footer">
      <Link to="/" className="footer-logo">
        <span>KeyNest</span>
        <img src="/assets/key-logo-footer.svg" alt="KeyNest logo" />
      </Link>
      <p>&copy; 2024 KeyNest</p>
      <div className="language-selector">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={currentLanguage === lang.code ? 'active' : ''}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </footer>
  )
}

export default Footer
