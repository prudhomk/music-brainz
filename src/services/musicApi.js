const artistSearchUrl = 'http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25';
const albumUrl = 'http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json';
const albumCoverUrl = 'http://coverartarchive.org/release/<RELEASE_ID>/front';
const songsUrl = 'http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json';
const lyricsUrl = 'https://api.lyrics.ovh/v1/<ARTIST>/<TITLE>';

export async function artistSearch(query) {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`);
  const artists = await res.json();
  return artists;
}
