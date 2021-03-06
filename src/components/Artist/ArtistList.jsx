import React from 'react';
import Artist from './Artist';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ArtistList.css';

export default function ArtistList({ artistList }) {
  if(artistList) {
    const artistResult = artistList.map((artist) => (
      <>
        <li key={artist.id}>
          <Link to={`/${artist.id}/releases`}>
            <Artist {...artist}/>
          </Link>
        </li>
      </>
    ));
  
    return (
      <>
        <ul data-testid="artistList" className={styles.ArtistList}>
          {artistResult} 
        </ul>
      </>
    );
  }
  return <h1>No results found</h1>;
}

ArtistList.propTypes = {
  artistList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  )
};

