import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsNavOpen(false);
  const getHref = (hash) => (isHomePage ? hash : `/${hash}`);

  return (
    <header 
      id="main-header" 
      className={`navbar navbar-expand-md fixed-top transition-all ${
        (isScrolled || !isHomePage) ? 'scrolled bg-white shadow-sm py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" onClick={closeMenu}>
          <div className="logo-icon-container d-flex align-items-center justify-content-center p-2 rounded-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
            </svg>
          </div>
          <span className={`fw-bold fs-4 logo-text ${(isScrolled || !isHomePage) ? 'text-dark' : 'text-white'}`}>
            Portfolio
          </span>
        </Link>

        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className="navbar-toggler-icon-custom">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
              className={(isScrolled || !isHomePage) ? 'text-dark' : 'text-white'}>
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center gap-md-4">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <Link 
                  className={`nav-link custom-nav-link fw-semibold ${(isScrolled || !isHomePage) ? 'text-secondary' : 'text-white'}`} 
                  to={getHref(link.href)}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-md-2">
              <Link 
                to={getHref('#contact')} 
                className="btn btn-purple px-4 py-2 fw-semibold shadow-sm"
                onClick={closeMenu}
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;