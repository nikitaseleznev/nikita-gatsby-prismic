import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from "../components/Img"

export default ({ data }) => {
  const project = data.project.data
  return (
    <Layout>
      <h1>{project.title.text}</h1>
      <div>
        {project.body.map((block, i) => (
          <div key={i}>
            {block.__typename === 'PrismicProjectBodyImageGallery' &&
              block.items.map((item, j) => (
                <Img 
                  key={`${j}-image`}
                  className="img"
                  src={item.image.url}
                  alt={item.alt}
                />                
              ))}
            {block.__typename === 'PrismicProjectBodyText' &&
              <div 
                key={`${i}-text`} 
                dangerouslySetInnerHTML={{ __html: block.primary.text.html }} 
              />
            }
            {block.__typename === 'PrismicProjectBodyVideo' &&
              <div 
                key={`${i}-text`}
                className="video"
                dangerouslySetInnerHTML={{ __html: block.primary.link.html }} 
              />
            }
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectQuery($uid: String!) {
    project: prismicProject(uid: {eq: $uid}) {
      data {
        title {
          text
        }
        body {
          __typename
          ... on PrismicProjectBodyImageGallery {
            items {
              image {
                url
              }
              alt
            }
          }
          ... on PrismicProjectBodyText {
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicProjectBodyVideo {
            primary {
              link {
                html
              }
            }
          }
        }
      }
    }
  }
`