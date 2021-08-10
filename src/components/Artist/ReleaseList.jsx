import React, { useEffect, useState } from 'react';
import Release from './Release';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getArtWork, mungeReleases, releaseSearch } from '../../services/musicApi';

export default function ReleaseList() {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  useEffect(async () => {
    const releases = await releaseSearch(id);
    const mungedReleases = await  mungeReleases(releases);
    setReleases(mungedReleases);
    setLoading(false);

  }, []);


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
      <ul>
        {releaseResult}
      </ul>
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
