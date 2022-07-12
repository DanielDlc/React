import logo from '../../assets/img/logo.svg'
import '../Header/styles.css'

function Header() {
  return(
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://www.linkedin.com/in/daniel-louro-costa-dev/">@DanielDlc</a>
          </p>
        </div>
      </header>
    </>
  )
}

export default Header
