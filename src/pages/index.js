import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Katerina Sokolovskaya</h1>
    <p style={{paddingLeft: '12px'}}><Link to="/projects/">PROJECTS</Link></p>
    <p style={{paddingLeft: '12px'}}><Link to="/about/">ABOUT+CONTACTS</Link></p>
  </Layout>
)

export default IndexPage
