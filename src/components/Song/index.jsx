import React from 'react';

import styles from './styles.scss';

import SpotifyLogo from '../../assets/logos-streaming-services/Spotify_Logo_CMYK_Green.png';
import AppleLogo from '../../assets/logos-streaming-services/apple-music-logo-png-transparent.png';
import DeezerLogo from '../../assets/logos-streaming-services/deezer-logo.png';

const getStreamingServiceLogo = (streamingService) => {
  console.log('streamingService', streamingService);
  switch (streamingService) {
    case 'spotify':
      return SpotifyLogo;
      break;
    case 'itunes':
      return AppleLogo;
      break;
    case 'deezer':
      return DeezerLogo;
      break;
    default:
      return undefined;
  }
};

const Song = (props) => {
  const renderStreamingServices = (streamingServices = []) => {
    const availableStreamingServices = streamingServices.map((streamingService) => (
      <li
        key={`streaming-service_${streamingService.channel}`}
        style={{
          padding: '20px 20px',
          boxShadow: '0 0px 3px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <span>
          <img style={{ width: '7em' }} src={getStreamingServiceLogo(streamingService.channel)} />
        </span>
        <a href={streamingService.url} target="_blank" className={styles.distribution_channel__button}>
          Play
        </a>
      </li>
    ));
    return availableStreamingServices;
  };

  const { streamingServices, artCover, title } = props;
  return (
    <div style={{ display: 'grid', gridTemplateRows: `repeat(8, 100px)`, gridTemplateColumns: `repeat(24, 1fr)` }}>
      <div style={{ gridColumn: '11/15', gridRow: '2/5' }}>
        <img style={{ display: 'block' }} src={artCover} alt={title} width="100%" />
        <div
          style={{
            position: 'relative',
            color: 'white',
            backgroundColor: '#181818',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              margin: '0',
              marginBottom: '5px',
            }}>{`WANWHo? - ${title}`}</p>
          <span style={{ fontSize: '12px' }}>Choose music service</span>
          <div className={styles.arrow_down} />
        </div>
        <div>
          <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
            {streamingServices && renderStreamingServices(streamingServices)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Song;
