import React from 'react';
import PropTypes from 'prop-types';

export default function Artist({ name, genre, country, birthday }) {
  // name, genre, country, birthday
  return (
    <>
      <h1>{name}</h1>
      <p>{birthday}</p>
      <p>{country}</p>
      <p>{genre}</p>
            
    </>
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
};
