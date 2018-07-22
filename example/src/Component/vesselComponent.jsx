import React from 'react';
import './style/index.css'
export default class VesselComponent extends React.Component {
  render() {
    const {children, introduce , githubPath} = this.props
    return (
      <div className="vs__container">

        <div className="vs__container--title">
          <span>{introduce}</span>
          <a href={githubPath}>Code</a>
        </div>

        <div className="vs__container--content">
          {children}
        </div>

      </div>
    )
  }
}
