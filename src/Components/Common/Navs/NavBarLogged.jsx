import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import './Navs.css'

export function NavBarLogged(){
 const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`navbar navbar-expand-lg menu navbar-dark fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-fluid">
          <a className="navbar-brand" href="/">
              Solaris IQ
          </a>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
          >
              <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link" to="/">
                          Inicio
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link className='nav-link' to={'/usuarios'}>
                          Registrarse
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to={'/metodoPagos'}>
                          Nuestra App
                      </Link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
    );
}