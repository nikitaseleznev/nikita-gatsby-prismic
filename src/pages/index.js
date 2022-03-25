import React from 'react'
import Video from '../components/video-back';

import Layout from '../components/layout'

const IndexPage = ({ location }) => (
    <Layout location={location}>
        <Video />
    </Layout>
)

export default IndexPage
