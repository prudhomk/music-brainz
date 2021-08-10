import React from 'react';
import PropTypes from 'prop-types';

export default function Artist({ artist, country }) {
  return (
    <>
      <h1>{artist}</h1>
      <p>{country}</p>
    
            
    </>
  );
}

Artist.propTypes = {
  artist: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};
