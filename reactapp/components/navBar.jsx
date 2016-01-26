import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar  navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Webpack example</a>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
            <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
