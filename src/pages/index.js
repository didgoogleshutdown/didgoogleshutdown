import React from 'react'
import { parse } from 'query-string'
import Modal from 'react-dumb-modal'
import MainHero from '../components/Home-MainHero'
import AppList from '../components/Home-AppList'
import Vitals from '../components/Home-Vitals'
import Detail from '../components/Detail'
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

  toggleModal () {
    this.props.history.push(`/`)
    this.forceUpdate()
  }

  render () {
    const search = (typeof location !== 'undefined') ? location.search : this.props.location.search
    const app = Object.getOwnPropertyNames(parse(search))[0]
    const details = app && apps.filter(a => a.slug.toLowerCase() === app.toLowerCase())[0]

    return (
      <div className="container-fluid">
        <MainHero />
        <Vitals
          apps={apps}
        />
        <div className="container">
          <AppList
            apps={apps}
            update={::this.forceUpdate}
          />
        </div>

        { app &&
          <Modal
            dismiss={ ::this.toggleModal }
            overlayClassName="app-detail-modal"
            modalClassName="modal"
            overlayStyle={{}}
            modalStyle={{
              backgroundColor: 'white',
              borderRadius: 50,
              minWidth: 320,
              width: 700,
              margin: 10,
              padding: 50
            }}
          >
            <Detail
              details={details}
              dismiss={ ::this.toggleModal }
            />
          </Modal>
        }
      </div>
    )
  }
}
