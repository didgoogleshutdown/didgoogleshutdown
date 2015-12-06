import React from 'react';

import './Home-MainHero.scss'

export default class MainHero extends React.Component {

  render () {
    return (
      <div className="row main-hero">
        <div className="jumbotron text-center container">
           <h1>Did Google Shutdown <u dangerouslySetInnerHTML={ { __html: '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' } }></u> Yet?</h1>
           <h2>Tired of getting on the hype train of another Google product only to have it shut down before you can finish typing in your beta key?</h2>
           <h2>This site tracks the status and outlook of Google products, and tries to judge Google's chances of making another good product overall.</h2>
        </div>
      </div>
    )
  }
}
