import React, { useState, useEffect } from 'react';
import Recording from './Recording';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { mungeRecordings, getRecordings } from '../../services/musicApi';


export default function RecordingList() {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(async () => {
    const recordings = await getRecordings(id);
   
    const mungedRecordings = await mungeRecordings(recordings);
    console.log(mungedRecordings);
    await setRecordings(mungedRecordings);
    
    setLoading(false);
  }, []);

  if(recordings) {
    const recordingResult = recordings.map((recording) => (
      <>
        <li key={recording.id}>
          <Link to={`/${recording.id}/lyrics`}>
            <Recording {...recording} />
          </Link>
        </li>
      </>
    
    ));

    return (
      <>
        <h1>Recording List</h1>
        <ul>
          {recordingResult}
        </ul>
      </>
    );
  }


  return (
    <div>
      placeholder
    </div>
  );
}

RecordingList.propTypes = {
  recordingList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  )
};

