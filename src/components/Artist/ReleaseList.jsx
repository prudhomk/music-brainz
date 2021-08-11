import React, { useEffect, useState } from 'react';
import Release from './Release';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { mungeReleases, releaseSearch } from '../../services/musicApi';
import styles from './ReleaseList.css';

export default function ReleaseList() {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offSet, setOffSet] = useState(5);
  const [page, setPage] = useState(1);
  const { id } = useParams();


  useEffect(async () => {
    const releases = await releaseSearch(id, offSet);
    const mungedReleases = await  mungeReleases(releases);
    setReleases(mungedReleases);
    setLoading(false);

  }, []);

  const handleIncrement = async () => {
    setPage((prevPage) => prevPage + 1);
    setOffSet((prevOffSet) => prevOffSet + 5);
    const query = await releaseSearch(id, offSet);

    const searchedRelease = await mungeReleases(query);
    setReleases(searchedRelease);
  };

  const handleDecrement = async () => {
    setPage((prevPage) => prevPage - 1);
    setOffSet((prevOffSet) => prevOffSet - 5);
    const query = await releaseSearch(id, offSet);

    const searchedRelease = await mungeReleases(query);
    setReleases(searchedRelease);
  };


  if(releases) {
    const releaseResult = releases.map((release) => (   
      <>
        <li key={release.id}>
          <Link to={`/${release.id}/recordings`}>
            <Release {...release} />
          </Link>
        </li>
      </>
      
    ));

    return (
      <>
        <h1>List of Releases</h1>
        <button 
          disabled={page <= 1}
          onClick={handleDecrement}>
              -
        </button> 
      Page: {page}
        <button onClick={handleIncrement}>
    +
        </button>

        <ul className={styles.ReleaseList}>
          {releaseResult}
        </ul>
      </>
    );
  }
  
  return (
    <div>
        PLACEHOLDER    
    </div>
  );
}

ReleaseList.propTypes = {
  releaseList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  )
};
