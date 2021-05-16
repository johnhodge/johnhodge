import React from 'react';
const VideoPlayer = ({ videoSrcURL, videoTitle }) => (
  <div className='video'>
    <iframe
      width='100%'
      height='auto'
      src={videoSrcURL}
      title={videoTitle}
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      frameBorder='0'
      webkitallowfullscreen='true'
      mozallowfullscreen='true'
      allowFullScreen
    />
    {/* <iframe
      width='560'
      height='315'
      src='https://www.youtube.com/embed/rdcmopKdJLg'
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen></iframe> */}
  </div>
);
export default VideoPlayer;
