import React from 'react';
import { Link } from 'gatsby';

const Footer = class extends React.Component {
  render() {
    return (
      <footer id='footer'>
        <nav className='navbar' role='navigation' aria-label='main-navigation'>
          <div className='container'>
            <div className='footer-nav'>
              <div className='navbar-nav has-text-centered'>
                <Link
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  to='/about'
                >
                  My Story
                </Link>
                <Link
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  to='/products'
                >
                  Work With Me
                </Link>
                <Link
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  to='/contact'
                >
                  Contact
                </Link>
                <Link
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  to='/blog'
                >
                  News & Events
                </Link>
                <Link
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  to='/contact/examples'
                >
                  Order VIM
                </Link>
              </div>
            </div>
            <div className='footer-cta'>
              <a href='tel:5634492293'>(563) 449-2293</a>
            </div>
          </div>
        </nav>
      </footer>
    );
  }
};

export default Footer;
