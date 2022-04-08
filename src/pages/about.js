import React from 'react'
import * as s from './about.module.css'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Socials from '../components/socials'


const IndexPage = ({ data, location }) => {
    const content = data.prismicAbout.data
    return (
        <Layout
            location={location}
            mobileData={content}
        >
            <div className={s.container}>
                <h1>{content.title.text}</h1>
                <div
                    dangerouslySetInnerHTML={{ __html: content.text.html }}
                />

                <hr />

                <div>
                    <Socials data={content} />
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
query AboutQuerry {
    prismicAbout {
      data {
        title {
          text
        }
        text {
          html
        }
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