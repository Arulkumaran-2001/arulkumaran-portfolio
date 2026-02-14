import React from 'react';
import { useState, useRef, useEffect } from 'react';
import {Moon, Sun, Menu, X } from 'lucide-react';
import {Link} from 'react-router-dom';


const Header = () => {
  const [isDarkMode,setisDarkMode] = useState(false);
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
  return (
        <header className="header" role="banner">
            <div className="container">
                <div className="header__container">
                    <a href="#hero" className="header__logo" aria-label="Arulkumaran R - Home">
                        Arulkumaran R
                    </a>
                    
                    <nav className="header__nav" role="navigation" aria-label="Main navigation">
                        <ul className="nav__list">
                            <li><a href="#hero" className="nav__link">About</a></li>
                            <li><a href="#skills" className="nav__link">Skills</a></li>
                            <li><a href="#projects" className="nav__link">Projects</a></li>
                            <li><a href="#experience" className="nav__link">Experience</a></li>
                            <li><a href="#contact" className="nav__link">Contact</a></li>
                        </ul>
                        
                        {/* <button className="theme-toggle" 
                                id="themeToggle" 
                                aria-label="Toggle dark mode"
                                aria-pressed="false">
                            <svg className="theme-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5"></circle>
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                            </svg>
                        </button> */}
                        
                        <button className="mobile-nav-toggle" 
                                id="mobileNavToggle"
                                aria-label="Toggle mobile navigation"
                                aria-expanded="false">
                            <span className="mobile-nav-toggle__line"></span>
                            <span className="mobile-nav-toggle__line"></span>
                            <span className="mobile-nav-toggle__line"></span>
                        </button>
                    </nav>
                </div>
            </div>
            
            <div className="mobile-nav" id="mobileNav">
                <ul className="mobile-nav__list">
                    <li><a href="#hero" className="mobile-nav__link">About</a></li>
                    <li><a href="#skills" className="mobile-nav__link">Skills</a></li>
                    <li><a href="#projects" className="mobile-nav__link">Projects</a></li>
                    <li><a href="#experience" className="mobile-nav__link">Experience</a></li>
                    <li><a href="#contact" className="mobile-nav__link">Contact</a></li>
                </ul>
            </div>
        </header>
  )
}
export default Header;
