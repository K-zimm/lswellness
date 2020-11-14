import React from 'react';
import PropTypes from 'prop-types';

const Announcement = ({ announcement, link }) => (
  <section className='announcement'>
    <a href={link} target='_blank'>
      {announcement}
    </a>
  </section>
);

Announcement.propTypes = {
  announcement: PropTypes.string,
  link: PropTypes.string,
};

export default Announcement;
