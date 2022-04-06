import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Projects from '../components/projects'

const ProjectsPage = ({ data, location }) => (
    <Layout
        location={location}
        mobileData={data.prismicAbout.data}
    >
        <Projects
            location={location}
            data={data}
        />
    </Layout>
)

export default ProjectsPage

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
            preview {
              url
            }
          }
        }
      }
    }
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