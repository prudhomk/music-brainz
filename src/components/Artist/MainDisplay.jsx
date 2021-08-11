import React from 'react';
import { useState, useEffect } from 'react';
// import useArtist from '../state/useArtist';
import { artistSearch, mungeArtist } from '../../services/musicApi';
import ArtistList from '../Artist/ArtistList';

export default function MainDisplay() {
  const [offSet, setOffSet] = useState(0);
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

  const handleIncrement = async (e) => {
    setPage((prevPage) => prevPage + 1);
    setOffSet((prevOffSet) => prevOffSet + 5);
    const query = await artistSearch(artist, offSet);

    const searchedArtist = await mungeArtist(query);
    setArtistList(searchedArtist);
  };

  const handleDecrement = async (e) => {
    setPage((prevPage) => prevPage - 1);
    setOffSet((prevOffSet) => prevOffSet - 5);
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
    <div data-testid="display">
      <form onSubmit={handleSubmit}>
    Artist: <input type="text" placeholder="Artist" name="searchTerm" onChange={handleChange}/>
        <button data-testid="submitButton">SEARCH</button>
      </form>
    
      <button
        data-testid="decrement"
        disabled={page <= 1}
        onClick={handleDecrement}>
                -
      </button> 
      <span data-testid="page">Page: {page}</span>
      <button 
        data-testid="increment"
        onClick={handleIncrement}>
      +
      </button>
      <ArtistList artistList={artistList}/>
    </div>
  );
}
