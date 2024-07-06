import React from 'react';
import PropTypes from 'prop-types';
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{ backgroundColor: props.mode === "dark" ? "grey" : "#0dcaf0"}}>
      <div className="container-fluid">
        <a className={`navbar-brand ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className= "nav-link" aria-current="page" to="/" style={{ color: props.mode === "dark" ? "white" : "black"}} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} to="/AboutUs">AboutUs</Link>
            </li>
            <li className="nav-item dropdown">
              <a className={`nav-link ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className={`dropdown-menu dropdown-menu-${props.mode}`}>
                <li><a className={`dropdown-item ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} href="/">Action</a></li>
                <li><a className={`dropdown-item ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} href="/">Another action</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${props.mode === 'dark' ? 'text-light' : 'text-dark'} disabled`} aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className={"form-check form-switch "}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleMode} style={{backgroundColor: "#0dcaf0" ? "#0dcaf0" : "grey"}}/>
              <a className="nav-link disabled"aria-disabled="true" style={{ color: props.mode === "dark" ? "white" : "black"}}>Enable Dark Mode</a>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
