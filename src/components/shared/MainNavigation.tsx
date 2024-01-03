import { Link } from "react-router-dom";
import '../../styles/MainNavigation.css'

const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="src/images/1581884.png" className="header-logo" alt="Logo" style={{ height: '40px' }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Hjem</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Galleri">Galleri</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Lyd/Lys">Lyd / Lys</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Russebuss">Russebuss</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">Om oss</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Kontakt oss</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;