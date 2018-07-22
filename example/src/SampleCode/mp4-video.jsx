/**
 * email allenwill211@gmail.com
 * Created by allen on 2018/6/30.
 */

import React from 'react';
import VideoPlayer from 'react-video-player';
import './style/custom-theme.css'

export default class Mp4VideoPlayer extends React.Component {
  constructor() {
    super()
    this.state = {
      playerOption: {
        height: '360',
        autoplay: true,
        muted: true,
        language: 'en',
        playbackRates: [0.5, 1, 1.5, 2],
        sources: [{
          type: "video/mp4",
          // mp4
          src: "http://vjs.zencdn.net/v/oceans.mp4",
          // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        poster: "https://github.com/allenYetu211/react-video-player/example/asset/img/bg-picture.jpeg",
      }
    }
  }


  onPlayerPlay(player) {
    // console.log('player play!', player)
  }

  onPlayerPause(player) {
    // console.log('player pause!', player)
  }

  onPlayerEnded(player) {
    // console.log('player ended!', player)
  }

  onPlayerLoadeddata(player) {
    // console.log('player Loadeddata!', player)
  }

  onPlayerWaiting(player) {
    // console.log('player Waiting!', player)
  }

  onPlayerPlaying(player) {
    // console.log('player Playing!', player)
  }

  onPlayerTimeupdate(player) {
    // console.log('player Timeupdate!', player.currentTime())
  }

  onPlayerCanplay(player) {
    // console.log('player Canplay!', player)
  }

  onPlayerCanplaythrough(player) {
    // console.log('player Canplaythrough!', player)
  }

  // or listen state event
  playerStateChanged(playerCurrentState) {
    // console.log('player current update state', playerCurrentState)
  }

  // player is ready
  playerReadied(player) {
    // seek to 10s
    // console.log('example player 1 readied', player)
    // player.currentTime(10)
    // console.log('example 01: the player is readied', player)
  }

  render() {
    return (
      <div className="vjs-custom-skin">
        <VideoPlayer
          className="vjs-custom-skin"
          option={this.state.playerOption}
          play={this.onPlayerPlay}
          pause={this.onPlayerPause}
          ended={this.onPlayerEnded}
          loadeddata={this.onPlayerLoadeddata}
          waiting={this.onPlayerWaiting}
          playing={this.onPlayerPlaying}
          timeupdate={this.onPlayerTimeupdate}
          canplay={this.onPlayerCanplay}
          canplaythrough={this.onPlayerCanplaythrough}
          statechanged={this.playerStateChanged}
          ready={this.playerReadied}
        />
      </div>
    );
  }
}
