import React from 'react';
import { Link } from 'react-router-dom';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBtc } from '@fortawesome/free-brands-svg-icons' */


export const NavBar = () => {
    return (
        <header>
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
      <div className="container-fluid">
        <Link  className="navbar-brand" to="/"> Wiki Crypto</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarCollapse">
          
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/noticias">Noticias</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">Wallet </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/cart">Cart </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">


            
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          
        </div>
      </div>
    </nav>
    <br></br>
    <br></br>
  </header>
    )
}


