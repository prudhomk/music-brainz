import React from 'react';
import { useState, useEffect } from 'react';
// import useArtist from '../state/useArtist';
import { artistSearch, mungeArtist } from '../../services/musicApi';
import ArtistList from '../Artist/ArtistList';

export default function MainDisplay() {
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    return () => {
      return;
    };
  }, []);
  
  const handleChange = ({ target }) => {
    setArtist(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = artistSearch(artist);
    const searchedArtist = mungeArtist(query);
    setArtist(searchedArtist);
  };

  if(!loading) return artist;

  return (
    <>
      <form onSubmit={handleSubmit}>
      Artist: <input type="text" placeholder="Artist" name="searchTerm" onChange={handleChange}/>
        <button>SEARCH</button>
      </form>
      <ArtistList artist={artist}/>
    </>
  );
}
