
const Header = () => {
  return (
    <header className="header" id="Accueil">
      <div className="header__subtitle">
        <h2 className="header__subtitle1">PortFolio</h2>
        <h2 className="header__subtitle2">Hello. I'm a <span className="mobile-text">Front-End</span> Developer.</h2>
      </div>
      <h1 className="header__title">Among others things...</h1>
      <a href="#About" className="arrow-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </a>
    </header>
  )

}

export default Header;