const artistSearchUrl = 'http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25';
const albumUrl = 'http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json';
const albumCoverUrl = 'http://coverartarchive.org/release/<RELEASE_ID>/front';
const songsUrl = 'http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json';
const lyricsUrl = 'https://api.lyrics.ovh/v1/<ARTIST>/<TITLE>';

export async function artistSearch(query) {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`);
  const artists = await res.json();

  return artists.artists;
}

export function mungeArtist(artists) {
  const data = artists.map(artist => 
  {{

    return {
      id: artist.id,
      artist: artist.name,
      country: artist.country,
    };
  }}
  );
  return data;
}

export async function releaseSearch(id) {
  const res = await fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`);
  const releases = await res.json();

  return releases.releases;
}

export function mungeReleases(releases) {
  const data = releases.map(release =>
  {{

    return {
      id: release.id,
      title: release.title,
      date: release.date,
    };
  }}
  );
  return data;
}

export async function getArtWork(id) {
  const res = await fetch(`http://coverartarchive.org/release/${id}/front`);
  if(res.status === 200) return res.url;
  return 'Nothing here';
}

export async function getRecordings(id) {
  const res = await fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`);
  const recordings = await res.json();
  console.log(recordings);
  return recordings.recordings;
}


export function mungeRecordings(recordings) {
  const data = recordings.map(recording => 
  {{
    return { 
      id: recording.id,
      title: recording.title,
    };
  }}
  );
  return data;
}
