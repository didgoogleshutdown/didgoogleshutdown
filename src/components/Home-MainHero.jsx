import React from 'react';
import { PatternCircles } from '@vx/pattern'
import { Bar } from '@vx/shape'
import Background from './Home-Background'

export default class MainHero extends React.Component {
  render () {
    const strokeWidth = 10
    const modifier = 2

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          height: 600
        }}
      >
        <Background />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 700,
            textAlign: 'center',
            padding: 5
          }}
        >
          <h1 style={{ fontWeight: 800 }}>
            Did Google Shutdown <u dangerouslySetInnerHTML={ { __html: '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' } }></u> Yet?</h1>
          <h2 style={{ fontWeight: 800 }}>Tired of getting on the hype train of another Google product only to have it shut down before you can finish typing in your beta key?</h2>
          <h2 style={{ fontWeight: 800 }}>This site tracks the status and outlook of Google products, and tries to judge Google's chances of making another good product overall.</h2>
        </div>
      </div>
    )
  }
}
