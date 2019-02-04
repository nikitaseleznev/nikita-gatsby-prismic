import React, { memo, useState } from 'react';
import YouTube from 'react-youtube';

const Video = () => {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      disablekb: 1,
      controls: 0,
      loop: 1,
      version: 3,
      showinfo: 0,
      rel: 0,
    },
  };

  const [isPlay, setPlay] = useState(false);

  const onReady = event => {
    event.target.mute();
    event.target.playVideo();
    setPlay(true);
  };

  const onEnd = event => {
    event.target.playVideo();
  };

  return isPlay ? (
    <YouTube
      videoId="JCrmFHC9sSM"
      className="video-iframe"
      opts={opts}
      onReady={onReady}
      onEnd={onEnd}
    />
  ) : null;
};

export default memo(Video);
