import React from 'react';
import useArtist from '../state/useArtist';

export default function MainDisplay() {
  const { artist, loading } = useArtist('');
  
  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      Artist: <input type="text" placeholder="Artist" name="searchTerm" onChange={handleChange}/>
      <button>SEARCH</button>
    </form>
  );
}
