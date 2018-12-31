import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>NIKITA SELEZNEV</h1>
    <div className="img">
    {data.img && data.img && (
      <Img fluid={data.img.childImageSharp.fluid} />
    )}
    {console.log(data)}
    </div>
  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
  query AboutQuery {
    img: file(relativePath: {eq: "91.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 720, quality: 80, traceSVG: {
          color: "#000000"
          turnPolicy: TURNPOLICY_MINORITY
          blackOnWhite: false
        }) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`