import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>NIKITA SELEZNEV</h1>
    <p><Link to="/projects/">PROJECTS</Link></p>
    <p><Link to="/about/">ABOUT+CONTACT</Link></p>
  </Layout>
)

export default IndexPage
