const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid position">
              <span className="navbar-brand mb-0 h1">
                  <img src="/images/krmlogo_portfolio_w.png" alt="Logo of Developer" width="30" height="25" />
                  Kenth Razen
              </span>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <ul className="navbar-nav ms-auto gap-5">
                      <li className="nav-item">
                          <a className="nav-link" href="#top" id="navbar-intro" aria-label="Go to About Me)">About Me</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#my-projects" id="navbar-my-proj" aria-label="Go to Portfolio - My Projects">Portfolio</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#contact-dev" id="navbar-contact" aria-label="Go to Contact section">Contact Me</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;