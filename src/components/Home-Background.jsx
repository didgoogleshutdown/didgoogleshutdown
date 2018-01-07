import React from 'react';
import { PatternCircles } from '@vx/pattern'
import { Bar } from '@vx/shape'

export default class MainHero extends React.Component {
  render () {
    const height = 600
    const strokeWidth = 10
    const modifier = 2

    return (
      <svg style={{
        width: '100%',
        height: height,
        position: 'absolute',
        zIndex: -1,
        opacity: 0.25
      }}>
        <PatternCircles
          id="circle-pattern1"
          stroke="#59A958"
          height={30 * modifier}
          width={30 * modifier}
          strokeWidth={strokeWidth}
          fill="transparent"
          complement
        />
        <PatternCircles
          id="circle-pattern2"
          stroke="#F6BB43"
          height={30 * modifier}
          width={30 * modifier}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <PatternCircles
          id="circle-pattern3"
          stroke="#E6443C"
          height={60 * modifier}
          width={60 * modifier}
          strokeWidth={strokeWidth}
          fill="transparent"
          complement
        />
        <PatternCircles
          id="circle-pattern4"
          stroke="#4688F1"
          height={60 * modifier}
          width={60 * modifier}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Bar
          fill="url('#circle-pattern1')"
          width={4000}
          height={height}
        />
        <Bar
          fill="url('#circle-pattern2')"
          width={4000}
          height={height}
        />
        <Bar
          fill="url('#circle-pattern3')"
          width={4000}
          height={height}
        />
        <Bar
          fill="url('#circle-pattern4')"
          width={4000}
          height={height}
        />
      </svg>
    )
  }
}
