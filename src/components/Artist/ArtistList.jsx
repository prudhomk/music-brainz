import React from 'react';
import Artist from './Artist';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ArtistList({ artist }) {
  if(artist) {
    const artistResult = artist.map((artist) => (
      <>
        <li key={artist.id}>
          <Link>
            <Artist {...artist}/>
          </Link>
        </li>;
      </>
    ));
  
    return (
      <ul>
        {artistResult} 
      </ul>
    );
  }
  return <h1>No results found</h1>;
}

ArtistList.propTypes = {
  artist: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    })
  )
};

