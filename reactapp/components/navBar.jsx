import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar  navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Webpack example</a>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="https://webpack.github.io/" target="_blank">
              Webpack homepage <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="https://github.com/xabikos/webpack-static-asset-management/tree/master/reactapp" target="_blank"
            >
              Github repo
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
