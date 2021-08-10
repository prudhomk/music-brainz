import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getArtWork } from '../../services/musicApi';

export default async function Release({ id, title, art, date }) {
  const art = await getArtWork(id);


  return (
    <>  
      <img src={art} alt={title} />
      <h1>{title}</h1>
      <p>{date}</p>
            
    </>
  );
}

Release.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  art: PropTypes.string.isRequired
};
