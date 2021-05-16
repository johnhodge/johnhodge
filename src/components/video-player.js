import React from 'react';

import styles from './video-plyer.module.scss';

const VideoPlayer = ({ videoSrcURL, videoTitle, videoAutoplay }) => (
  <div className={styles.videoPlayerContainer}>
    <iframe
      className={styles.normalizeVideoPlayer}
      src={videoAutoplay === true ? `${videoSrcURL}?&autoplay=1` : videoSrcURL}
      title={videoTitle}
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      frameBorder='0'
      webkitallowfullscreen='true'
      mozallowfullscreen='true'
      allowFullScreen
    />
  </div>
);
export default VideoPlayer;
