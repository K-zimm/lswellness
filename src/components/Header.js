import React from 'react';
import { Link } from 'gatsby';

import facebook from '../img/social/facebook-icon.svg';

import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
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
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  };

  render() {
    return (
      <div id='header'>
        <section className='top-nav'>
          <a className='telephone font-weight-bold' href='tel:1-563-449-2293'>
            (563) 449-2293
          </a>
          <a
            className='fbook'
            href='https://www.facebook.com/LSWQCA/'
            target='_blank'
            rel='noreferrer'
            title='Facebook link'
          >
            <img src={facebook} alt='Facebook' />
          </a>
          <a
            className='btn-discovery'
            href='https://calendly.com/lisa-strzoda'
            target='_blank'
            rel='noreferrer'
          >
            Book a free Discovery Call
          </a>
        </section>
        <nav className='navbar' role='navigation' aria-label='main-navigation'>
          <div className='container'>
            <div className='navbar-brand'>
              <Link to='/' className='navbar-item' title='Logo'>
                <img
                  src={logo}
                  alt='LS Wellness logo'
                  style={{ width: '250px' }}
                />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target='navMenu'
                onClick={() => this.toggleHamburger()}
                role='navigation'
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id='navMenu'
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className='navbar-nav has-text-centered'>
                <Link
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  to='/my-story'
                >
                  My Story
                </Link>
                <Link
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  to='/work-with-me'
                >
                  Work With Me
                </Link>
                <Link
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  to='/blog'
                >
                  Blog
                </Link>
                <Link
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  to='/podcast'
                >
                  Podcast
                  <div className='navbar-item__dropdown'>
                    <Link
                      to='/podcast/equipment-and-tools'
                      className='navbar-item__dropdown--item'
                    >
                      Equipment & Tools
                    </Link>
                  </div>
                </Link>
                <Link
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  to='/contact'
                >
                  Contact
                </Link>
                <a
                  className='navbar-item'
                  activeClassName='navbar-item__active'
                  href='https://lswellness.vimtoday.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Order VIM
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
