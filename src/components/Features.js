import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const FeatureGrid = ({ gridItems }) => (
  <div className='programs-row'>
    {gridItems.map((item) => (
      <div key={item.text} className='programs-row__box'>
        <h2 className='programs-row__box--title'>{item.title}</h2>
        <p>{item.text}</p>
        <Link className='programs-row__box--link btn' to={item.btnLink}>
          {item.btnText}
        </Link>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      btnText: PropTypes.string,
      btnLink: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
