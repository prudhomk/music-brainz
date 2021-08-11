import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getArtWork } from '../../services/musicApi';

export default function Release({ id, title, art, date }) {
  const [image, setImage] = useState('');
  
  
  useEffect(async () => {
    const art = await getArtWork(id);
    console.log(art);
    await setImage(art);
 
  }, []);

  return (
    <>  
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{date}</p>
            
    </>
  );
}

Release.propTypes = {
  id: PropTypes.string.isRequried,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  art: PropTypes.string.isRequired
};
