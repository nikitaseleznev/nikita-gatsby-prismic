import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({data, location}) => (
 <Layout location={location}>
   <h1>Projects</h1>
   <ul>
      {data.projects.edges.map(({ node }) => (
        <li key={node.uid}><Link to={node.uid}>{node.data.title.text}</Link></li>
      ))}
    </ul> 
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