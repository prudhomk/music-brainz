import { useState, useEffect } from 'react';
import { artistSearch } from '../services/musicApi';

export default function useArtist(searchTerm) {
  const [artist, setArtist] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const artist = artistSearch(searchTerm);
    setArtist(artist);
    setLoading(false);
    return () => {
      return;
    };
  }, []);
  
  
  return ({ artist, loading });
}
