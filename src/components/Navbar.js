import React from "react";
import { Link } from "gatsby";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active",
          })
          : this.setState({
            navBarActiveClass: "",
          });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{ backgroundColor: '#fccd04' }}
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered" style={{ margin: '0 auto' }}>
              <Link className="navbar-item" to="/">
                Hot
              </Link>
              <Link className="navbar-item" to="/film-lists">
                Movie Lists
              </Link>
              <Link className="navbar-item" to="/film-news">
                Movie News
              </Link>
              <Link className="navbar-item" to="/film-reviews">
                Movie Reviews
              </Link>
              <Link className="navbar-item" to="/godfather">
                The Godfather
              </Link>
              <Link className="navbar-item" to="/products">
                My Gear
              </Link>
              <Link className="navbar-item" to="/about">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
