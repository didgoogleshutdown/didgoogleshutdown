import React from 'react';

import './Home-MainHero.scss'

export default class MainHero extends React.Component {

  render () {
    return (
      <div className="row main-hero">
        <div className="jumbotron">
          <div className="text-center container">
             <h1>Did Google Shutdown ___________ Yet?</h1>
             <h2>The Google product and service buyer's guide. Don't buy before they die!</h2>
             <h3>How many times have you used a Google product just to have it shut down soon after?
             To Google, that's just the price <i>you</i> have to pay for <i>them</i> to succeed later on.</h3>
             <h3>Stop being a geinea pig. Here we crunch the numbers on just how bad Google's track record is.</h3>
          </div>
        </div>
      </div>
    )
  }
}
