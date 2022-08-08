import React from "react";

function Navbar() {
  return (
    <div class="container-fluid">
      {/* <!-- Nav Bar --> */}
      <nav class="navbar bg-dark navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="">
          Russian Alphabet
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="">
                Sounds
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Example
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
