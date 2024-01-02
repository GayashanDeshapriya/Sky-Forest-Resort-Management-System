import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return(
      <div className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SKYFOREST</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active nav-text-col" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text-col" href="#">Packages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text-col" href="#">Room</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text-col" href="#">Safari</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  nav-text-col" href="#">Foods</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
}

export default Header;
