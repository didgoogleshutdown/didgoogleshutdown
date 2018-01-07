import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="DidGoogleShutDown"
      meta={[
        { name: 'description', content: 'Did Google Shut Down' },
        { name: 'keywords', content: 'google, apps, startups, silicon valley, failure, guide' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
