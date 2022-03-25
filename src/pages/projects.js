import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Projects from '../components/projects'

export default ({ data, location }) => (
    <Layout location={location}>
        <Projects 
            data={data}
        />
    </Layout>
)

export const pageQuery = graphql`
  query ProjectsQuery {
    projects: allPrismicProject(sort: { fields: [data___sortdate]}) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }    
  }
`