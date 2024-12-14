

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {/* Remplacer <a> par Link si la navigation est gérée avec react-router 
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src={logo}
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>    */}
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {/* Profil utilisateur */}
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {/* Vous pouvez ajouter ici une image d'avatar */}
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </a>
              </li>
              {/* Déconnexion */}
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
}

export default Header;
