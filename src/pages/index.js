import React from 'react'
// import Modal from 'react-dumb-modal'
import MainHero from '../components/Home-MainHero'
import AppList from '../components/Home-AppList'
import Vitals from '../components/Home-Vitals'
import { apps } from '../api/api'

import '../components/Detail-Modal.css'

export default class Home extends React.Component {
  static propTypes = {
    params: React.PropTypes.object,
    children: React.PropTypes.element,
    apps: React.PropTypes.array,
    user: React.PropTypes.object,
    history: React.PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      // showDetailModal: this.props.params.app ? true : false
    }
  }

  toggleModal () {
    this.props.history.pushState(null, `/`);
  }

  render () {
    return (
      <div className="container-fluid">
        <MainHero />
        <Vitals
          apps={apps}
        />
        <div className="container">
          <AppList
            apps={apps}
          />
        </div>

        {/* this.props.params.app &&
          <Modal
            dismiss={ ::this.toggleModal }
            overlayClassName="app-detail-modal"
            modalClassName="modal"
            overlayStyle={{}}
            modalStyle={{}}
          >
            { React.cloneElement(this.props.children, {
              user: this.props.user
            })}
          </Modal>
        */}
      </div>
    )
  }
}
