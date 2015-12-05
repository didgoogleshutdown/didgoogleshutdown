import React from 'react'
import Modal from 'react-dumb-modal'
import MainHero from './Home-MainHero'
import AppList from './Home-AppList'
import Vitals from './Home-Vitals'
import { connect } from 'react-redux'
import { getApps } from '../actions/Actions'

import './Detail-Modal.scss'

const mapStateToProps = (state) => ({
  apps: state.appsPage.apps
})

class Home extends React.Component {
  static propTypes = {
    params: React.PropTypes.object,
    children: React.PropTypes.element,
    dispatch: React.PropTypes.func,
    apps: React.PropTypes.array
  }

  constructor (props) {
    super(props)
    this.state = {
      showDetailModal: this.props.params.app ? true : false
    }
  }

  componentDidMount () {
    this.props.dispatch( getApps() )
  }

  toggleModal () {
    this.setState({ showDetailModal: !this.state.showDetailModal })
  }

  render () {
    return (
      <div className="container-fluid">
        <MainHero />
        <Vitals
          apps={ this.props.apps }
        />
        <div className="container">
          <AppList
            apps={ this.props.apps }
          />
        </div>

        { this.props.params.app &&
          <Modal
            dismiss={ ::this.toggleModal }
            overlayClassName="app-detail-modal"
            modalClassName="modal"
            overlayStyle={{}}
            modalStyle={{}}
          >
            { this.props.children }
          </Modal>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
