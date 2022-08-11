import React from 'react'
import '../App.css'
import logo from '../img/PortfolioIcon.png'

const Header = () => {
  return (
    <header id="header" className="header">
        <div className="header__icon">
            <a className="header__anchor" href="./index.html">
            <img
                className="header__img"
                src={ logo }
                alt="Main Icon"
            />
            </a>
        </div>
        <nav className="navbar navbar-expand-sm navbar-dark">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li>
                    <a
                        className="list__link resume"
                        href="https://drive.google.com/file/d/1GD3ijOnrrAIrb9ug20TtzA3GrXCvUQto/view?usp=sharing"
                        target="_blank"
                        >Resume</a>
                </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header