import React from "react";

function Navigation() {
  return (
    <div>
      <nav className="navbar d-none d-lg-block fixed-top navbar-expand-lg navbar-light">
        <div className="nav col-md-10 mx-auto">
          <a className="navbar-brand fw-bold text-muted" href="/index.html">
            SM
          </a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Experience
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1EWO6MoFJSL0JW9ylcJQN8lM1FhSSjWqo"
              >
                Resume
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/about.html">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
