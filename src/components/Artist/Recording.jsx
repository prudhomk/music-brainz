import React from 'react';
import PropTypes from 'prop-types';

export default function Recording({ title }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

Recording.propTypes = {
  title: PropTypes.string.isRequired,
};
