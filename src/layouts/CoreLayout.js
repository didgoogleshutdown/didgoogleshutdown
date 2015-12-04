import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'styles/core.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  componentDidMount () {
    if (__CLIENT__ && window.mixpanel) {
      window.mixpanel.track('Visit')
    }
  }

  render () {
    return (
      <div className='page-container'>
        <div className='view-container'>
          {this.props.children}
        </div>
        <div className="container">
          <br/><br/><br/>
          © Secret Order of the 219
          <br/><br/><br/>
        </div>
      </div>
    );
  }
}
