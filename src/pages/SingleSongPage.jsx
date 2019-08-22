import React, { useEffect, useState } from 'react';

import Song from '../components/Song';
import Data from '../data/songs';

const SingleSongPage = (props) => {
  const [song, setSong] = useState({});
  const {
    match: { params },
  } = props;

  useEffect(() => {
    const retrievedSong = getSong(params.songTitle);
    setSong(retrievedSong);
  }, [song]);

  const getSong = (songTitle) => {
    const [requestedSong] = Data.filter((song) => song.path === songTitle);
    return requestedSong;
  };

  console.log('song', song);

  return <Song title={song.title} artCover={song.artCover} streamingServices={song.streamingServices} />;
};

export default SingleSongPage;
