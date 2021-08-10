import React from 'react';
import PropTypes from 'prop-types';

export default function Release({ title, date }) {
  return (
    <>  
      <h1>{title}</h1>
      <p>{date}</p>
            
    </>
  );
}

Release.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};
