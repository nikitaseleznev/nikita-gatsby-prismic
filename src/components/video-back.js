import React from 'react'
import YouTube from 'react-youtube'

const Video = () => {
  const opts = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      disablekb: 1,
      controls: 0,
      loop: 1,
      version: 3,
      showinfo: 0,
      rel: 0,
    }
  }

  const onReady = event => {
    event.target.mute()
  }

  const onEnd = event => {
    event.target.playVideo();
  }

  return <YouTube
    videoId="ux-RJKAIwxY"
    className="video-iframe"
    opts={opts}
    onReady={onReady}
    onEnd={onEnd}
  />
}

export default Video
