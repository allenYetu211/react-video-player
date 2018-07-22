import React, {Component} from 'react'

import FlashVideo from './SampleCode/flash-video'
import Mp4Video from './SampleCode/mp4-video'
import HlsVideo from './SampleCode/hls-video'
import VesselComponent from './Component/vesselComponent'
import './asset/style/index.css'

export default class App extends Component {
  render() {
    return (
      <div className="gl__container">
        <div className="gl__container--title">
          <h2>React-Video-Player</h2>
          <p>React Player for Vue</p>
        </div>

        <div className="gl__container--introduce">

        </div>

        <div className="gl__container--content">
          <VesselComponent
            introduce="Base Config / 基本示例"
            githubPath="1">
            <Mp4Video/>
          </VesselComponent>

          <VesselComponent
            introduce="HLS / 直播"
            githubPath="1">
            <HlsVideo/>
          </VesselComponent>

          <VesselComponent
            introduce=" Flash / 流媒体"
            githubPath="1">
            <FlashVideo/>
          </VesselComponent>
        </div>
      </div>
    )
  }
}
