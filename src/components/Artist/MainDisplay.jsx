import React from 'react';
import { useState, useEffect } from 'react';
// import useArtist from '../state/useArtist';
import { artistSearch, mungeArtist } from '../../services/musicApi';
import ArtistList from '../Artist/ArtistList';

export default function MainDisplay() {
  const [offSet, setOffSet] = useState(5);
  const [page, setPage] = useState(1);
  const [artist, setArtist] = useState('');
  const [loading, setLoading] = useState(true);
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    setLoading(false);
    return () => {
      return;
    };
  }, [handleSubmit]
  );
  
  const handleChange = ({ target }) => {
    setArtist(target.value);
  };

  const handleClick = async (e) => {
    setPage((prevPage) => prevPage +1);
    setOffSet((prevOffSet) => prevOffSet +5);
    const query = await artistSearch(artist, offSet);

    const searchedArtist = await mungeArtist(query);
    setArtistList(searchedArtist);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = await artistSearch(artist, offSet);

    const searchedArtist = await mungeArtist(query);
    setArtistList(searchedArtist);
  };

 
  return (
    <>
      <form onSubmit={handleSubmit}>
    Artist: <input type="text" placeholder="Artist" name="searchTerm" onChange={handleChange}/>
        <button>SEARCH</button>
      </form>
    
      <button 
        disabled={page <= 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}>
                &lt;
      </button> 
        Page: {page}
      <button onClick={handleClick}>
      +
      </button>
      <ArtistList artistList={artistList}/>
    </>
  );
}
