import React from 'react'

import Layout from '../components/layout'

const NotFoundPage = ({ data, location }) => (
  <Layout location={location}>
    <h1>404</h1>
    <p>Not found</p>
  </Layout>
)

export default NotFoundPage
