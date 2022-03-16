import React, { PureComponent } from 'react';
import YouTube from 'react-youtube';

class Video extends PureComponent {
  constructor() {
    super();
    this.state = {
      isPlay: false,
    };
  }

  onReady = event => {
    event.target.mute();
    event.target.playVideo();
    this.setState({ isPlay: true });
  };

  onEnd = event => {
    event.target.playVideo();
  };

  render() {
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

    return (
      <div
        className="video-wrapper"
        style={{ opacity: this.state.isPlay ? 1 : 0 }}
      >
        <YouTube
          videoId="u9MoR4xDOv4"
          className="video-iframe"
          opts={opts}
          onReady={this.onReady}
          onEnd={this.onEnd}
        />
      </div>
    );
  }
}

export default Video;
