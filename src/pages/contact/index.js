import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';

import FormBg from '../../img/work-with-me-hero.jpg';
import LogoBg from '../../img/logo-bg.png';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <div className='contactPage'>
          <section
            className='contactPage__container'
            style={{
              backgroundImage: `url(${LogoBg})`,
              backgroundPosition: `bottom -200px left -250px`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '800px',
            }}
          >
            <h1 className='contactPage__title'>Contact</h1>

            <div
              className='contactPage__form-box'
              style={{
                background: `linear-gradient(rgba(236,28,45,.75),rgba(236,28,45,.75)), url(${FormBg})`,
                backgroundPosition: `center center`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <h2 className='form-title'>Ask a Question</h2>
              <form
                name='contact'
                method='post'
                action='/contact/thanks/'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                onSubmit={this.handleSubmit}
                className='form'
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type='hidden' name='form-name' value='contact' />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name='bot-field' onChange={this.handleChange} />
                  </label>
                </div>
                <div className='form__group'>
                  <label className='form__label' htmlFor={'name'}>
                    Your name
                  </label>
                  <div className='control'>
                    <input
                      className='form__input'
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className='form__group'>
                  <label className='form__label' htmlFor={'email'}>
                    Email
                  </label>
                  <div className='control'>
                    <input
                      className='form__input'
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className='form__group'>
                  <label className='form__label' htmlFor={'message'}>
                    Message
                  </label>
                  <div className='control'>
                    <textarea
                      className='form__textarea'
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className='field'>
                  <button className='btn is-link' type='submit'>
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className='contactPage__info'>
              <div>
                <h3>Give me a call</h3>
                <a href='tel:5634492293'>(563) 449-2293</a>
              </div>
              <div>
                <h3>Email Me</h3>
                <a href='mailto:lisa.strzoda@gmail.com'>
                  lisa.strzoda@gmail.com
                </a>
              </div>
              <div className='address'>
                LS Wellness is based in Quad Cities, Iowa
              </div>
              <div className='schedule'>
                <h3 className='title'>Schedule an Appointment</h3>
                <p className='content'>
                  Book a 30 minute Discovery Sessions and see if my program is
                  right for you!
                </p>
                <a
                  href='https://calendly.com/lisa-strzoda'
                  target='__blank'
                  className='btn'
                >
                  schedule free session
                </a>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
