import React from 'react';
import MainHero from './Home-MainHero';
import AppList from './Home-AppList'
import { connect } from 'react-redux'
import { getApps } from '../actions/Actions'

const mapStateToProps = (state) => ({
  apps: state.appsPage.apps
})

class Home extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    apps: React.PropTypes.array
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.dispatch( getApps() )
  }

  render () {
    return (
      <div className="container-fluid">
        <MainHero />
        <div className="container">
          <AppList
            apps={ this.props.apps }
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
