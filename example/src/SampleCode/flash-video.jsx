/**
 * email allenwill211@gmail.com
 * Created by allen on 2018/6/30.
 */

import React from 'react';
import VideoPlayer from 'react-video-player'
import 'videojs-flash';
import './style/custom-theme.css'

export default class FlashVideoPlayer extends React.Component {
  constructor() {
    super()
    this.state = {
      playerOption: {
        height: '360',
        sources: [{
          type: 'video/x-flv',
          src: 'http://fms.cntv.lxdns.com/live/flv/channel96.flv'
        }],
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        },
        techOrder: ['flash', 'html5'],
        sourceOrder: true,
        flash: {
          hls: {withCredentials: false},
        },
        html5: {hls: {withCredentials: false}},
        poster: "https://github.com/allenYetu211/react-video-player/example/asset/img/bg-picture.jpeg"
      }
    }
  }


  // or listen state event
  playerStateChanged(playerCurrentState) {
    console.log('player current update state', playerCurrentState)
  }

  // player is ready
  playerReadied(player) {
    console.log('example 2 ready!', player)
    // player.hotkeys({
    //   volumeStep: 0.1,
    //   seekStep: 5,
    //   enableModifiersForNumbers: false,
    //   fullscreenKey: function (event: any, player) {
    //     // override fullscreen to trigger when pressing the F key or Ctrl+Enter
    //     return ((event.which === 70) || (event.ctrlKey && event.which === 13));
    //   }
    // })
  }

  render() {
    return (
      <div className="vjs-custom-skin">
        <VideoPlayer
          className="vjs-custom-skin"
          option={this.state.playerOption}
          statechanged={this.playerStateChanged}
          ready={this.playerReadied}
        />
      </div>
    );
  }
}
