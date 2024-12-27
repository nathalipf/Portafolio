import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">Nathali</a>

            <div className="nav_menu">
                <ul className="nav__list grid">
                    <li className="nav_item">
                        <a href="#home" className="nav__link"></a>
                        <i className="uil uil-estate nav__icon"></i> Home
                    </li>

                    <li className="nav_item">
                        <a href="#about" className="nav__link"></a>
                        <i className="uil uil-user nav__icon"></i> About
                    </li>

                    <li className="nav_item">
                        <a href="#skills" className="nav__link"></a>
                        <i className="uil uil-file nav__icon"></i> Skills
                    </li>

                    <li className="nav_item">
                        <a href="#services" className="nav__link"></a>
                        <i className="uil uil-briefcase-alt nav__icon"></i> Services
                    </li>

                    <li className="nav_item">
                        <a href="#portfolio" className="nav__link"></a>
                        <i className="uil uil-scenery nav__icon"></i> Portfolio
                    </li>

                    <li className="nav_item">
                        <a href="#contact" className="nav__link"></a>
                        <i className="uil uil-message nav__icon"></i> Contact
                    </li>
                </ul>

                <div className="nav__close">
                    <i className="uil uil-times nav__icon"></i>
                </div>

            </div>

            <div className="nav__toggle">
                <i className="uil uil-apps"></i>
            </div>

        </nav>
    </header>
  )
}

export default Header