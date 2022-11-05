import React from 'react';
import { Link } from 'react-router-dom';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBtc } from '@fortawesome/free-brands-svg-icons' */


export const NavBar = () => {
    return (
        <header>
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
      <div class="container-fluid">
        <Link  class="navbar-brand" to="/"><i class="fa-brands fa-btc"></i> Wiki Crypto</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarCollapse">
          
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/"><i class="fa-solid fa-house"></i> Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/noticias"><i class="fa-solid fa-house"></i> Noticias</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="#"><i class="fa-solid fa-house"></i> Wallet </Link>
            </li>
          </ul>
          {/*<button class="btn btn-primary" onclick="darkmode()"> <i class="fa-solid fa-moon"></i> </button>*/}
          <form class="d-flex" role="search">


            
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
          
        </div>
      </div>
    </nav>
    <br></br>
    <br></br>
  </header>
    )
}


