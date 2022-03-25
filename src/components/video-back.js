import React, { PureComponent } from 'react';
import YouTube from 'react-youtube';
import s from './video-back.module.css'

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
            <div className={s.videoBackground}>
                <div className={s.videoForeground}>
                    <div
                        className={s.videoWrapper}
                        style={{ opacity: this.state.isPlay ? 1 : 0 }}
                    >
                        <YouTube
                            videoId="u9MoR4xDOv4"
                            opts={opts}
                            onReady={this.onReady}
                            onEnd={this.onEnd}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;
