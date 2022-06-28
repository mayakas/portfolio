import React from "react";

function Navigation() {
  return (
    <div>
      <nav class="navbar d-none d-lg-block fixed-top navbar-expand-lg navbar-light">
        <div class="nav col-md-10 mx-auto">
          <a class="navbar-brand fw-bold text-muted" href="/index.html">
            SM
          </a>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">
                Experience
              </a>
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link"
                href="https://drive.google.com/file/d/1EWO6MoFJSL0JW9ylcJQN8lM1FhSSjWqo"
              >
                Resume
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">
                Skills
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="/about.html">
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
