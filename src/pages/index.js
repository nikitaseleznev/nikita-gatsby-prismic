import React from 'react'
import Video from '../components/video-back'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data, location }) => (
    <Layout
        location={location}
        mobileData={data.prismicAbout.data}
    >
        <Video />
    </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query MobileMenuQuerry {
    prismicAbout {
      data {
        cv {
          url
        }
        press {
          url
        }
      }
    }
  }
`
