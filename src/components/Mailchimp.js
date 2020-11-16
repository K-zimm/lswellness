import React from 'react';

export default class Mailchimp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FNAME: '',
      LNAME: '',
      EMAIL: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form
        action='//lswellnessqc.us16.list-manage.com/subscribe/post?u=3690c46cf6147ee1500fa4fd9&amp;id=337e7d3c82'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        className='validate form'
        target='_blank'
        noValidate=''
      >
        <div className='form__group'>
          <label htmlFor='mce-FNAME' className='form__label'>
            first name
          </label>
          <input
            type='text'
            value={this.state.FNAME}
            name='FNAME'
            className='form-control form__input'
            id='mce-FNAME'
            onChange={this.handleChange}
          />
        </div>

        <div className='form__group'>
          <label htmlFor='mce-LNAME' className='form__label'>
            last name
          </label>
          <input
            type='text'
            value={this.state.LNAME}
            name='LNAME'
            className='form-control form__input'
            id='mce-LNAME'
            onChange={this.handleChange}
          />
        </div>

        <div className='form__group'>
          <label htmlFor='mce-EMAIL' className='form__label'>
            email
          </label>
          <input
            type='email'
            value={this.state.EMAIL}
            name='EMAIL'
            className='required email form-control form__input'
            id='mce-EMAIL'
            onChange={this.handleChange}
          />
        </div>

        <div id='mce-responses' className='clear'>
          <div
            className='response'
            id='mce-error-response'
            style={{ display: 'none' }}
          ></div>
          <div
            className='response'
            id='mce-success-response'
            style={{ display: 'none' }}
          ></div>
        </div>

        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden='true'
        >
          <input
            type='text'
            name='b_3690c46cf6147ee1500fa4fd9_337e7d3c82'
            tabIndex='-1'
            value=''
            readOnly
          />
        </div>

        <button
          type='submit'
          className='btn btn-outline-warning btn-lg float-right'
        >
          submit
        </button>
      </form>
    );
  }
}
