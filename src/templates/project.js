import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
//import Img from "../components/Img"

export default ({ data, location }) => {
  const project = data.project.data
  return (
    <Layout location={location}>
      <h1>{project.title.text}</h1>
      <div>
        {project.body.map((block, i) => (
          <div key={i}>
            {block.__typename === 'PrismicProjectBodyImageGallery' &&
              block.items.map((item, j) => (
                <div
                  key={`${j}-image-container`}
                  className="img"
                >{item.image && item.image.localFile && (
                  <Img 
                    key={`${j}-image`}
                    fluid={item.image.localFile.childImageSharp.fluid}
                    alt={item.alt}
                    imgStyle={{
                      objectFit: 'contain'
                    }}
                  />                
                )}
                </div>
              ))}
            {block.__typename === 'PrismicProjectBodyText' &&
              <div 
                key={`${i}-text`}
                className="text-container"
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
                localFile {
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
