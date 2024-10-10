import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../components/layout'
import * as s from './projects.module.css'
import Zoomable from "react-instagram-zoom"
import Projects from '../components/projects'

const ProjectsTemplate = ({ data, location }) => {
    useEffect(() => {
        document.body.scrollTo(0, 0)
    }, [location.pathname])

    const project = data.project.data

    return (
        <Layout
            location={location}
            mobileData={data.prismicAbout.data}
        >
            <div className={s.container}>
                <h1>{project.title.text}</h1>
                <div>
                    {project.body.map((block, i) => (
                        <div key={i}>
                            {block.__typename === 'PrismicProjectDataBodyImageGallery' &&
                                block.items.map((item, j) => (
                                    <Zoomable
                                        key={`${j}-image-container`}
                                        className="img"
                                    >
                                        {item.image && item.image.localFile && (
                                            <GatsbyImage
                                                image={item.image.localFile.childImageSharp.gatsbyImageData}
                                                key={`${j}-image`}
                                                alt={item.alt ?? ''}
                                                decoding='sync'
                                                imgStyle={{
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        )}
                                    </Zoomable>
                                ))}
                            {block.__typename === 'PrismicProjectDataBodyText' &&
                                <div
                                    key={`${i}-text`}
                                    className={s.textContainer}
                                    dangerouslySetInnerHTML={{ __html: block.primary.text.html }}
                                />
                            }
                            {block.__typename === 'PrismicProjectDataBodyVideo' &&
                                <div
                                    key={`${i}-video`}
                                    className="video"
                                >
                                    {block.primary.link.embed_url.includes('youtu.be') ? (
                                        <iframe
                                            title='youtube embed'
                                            src={`${block.primary.link.embed_url.split('youtu.be/').join('youtube.com/embed/')}/?feature=oembed&rel=0`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: block.primary.link.html
                                            }}
                                        />
                                    )}
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>

            <button
                className={s.topTop}
                onClick={() => {
                    document.body.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    })
                }}
            >
                <svg width="27" height="102" viewBox="0 0 27 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V101" stroke="black" />
                    <path d="M1 6L6 1L11 6" stroke="black" />
                    <path d="M13.9619 50.2705C14.1442 50.2705 14.3128 50.2295 14.4678 50.1475C14.6273 50.07 14.7708 49.9082 14.8984 49.6621C15.0306 49.4206 15.1445 49.056 15.2402 48.5684C15.3268 48.1582 15.4294 47.7868 15.5479 47.4541C15.6663 47.126 15.8099 46.8457 15.9785 46.6133C16.1471 46.3854 16.3454 46.21 16.5732 46.0869C16.8011 45.9639 17.0677 45.9023 17.373 45.9023C17.6647 45.9023 17.9404 45.9661 18.2002 46.0937C18.46 46.2259 18.6901 46.4105 18.8906 46.6475C19.0911 46.889 19.2484 47.1784 19.3623 47.5156C19.4762 47.8529 19.5332 48.2288 19.5332 48.6436C19.5332 49.236 19.4284 49.7419 19.2187 50.1611C19.0091 50.5804 18.7288 50.9017 18.3779 51.125C18.0316 51.3483 17.6465 51.46 17.2227 51.46L17.2227 50.1953C17.4277 50.1953 17.626 50.1338 17.8174 50.0107C18.0133 49.8923 18.1751 49.7168 18.3027 49.4844C18.4303 49.2565 18.4941 48.9762 18.4941 48.6436C18.4941 48.2926 18.4395 48.0078 18.3301 47.7891C18.2253 47.5749 18.0908 47.4176 17.9268 47.3174C17.7627 47.2217 17.5895 47.1738 17.4072 47.1738C17.2705 47.1738 17.1475 47.1966 17.0381 47.2422C16.9333 47.2923 16.8353 47.3789 16.7441 47.502C16.6576 47.625 16.5755 47.7982 16.498 48.0215C16.4206 48.2448 16.3431 48.5296 16.2656 48.876C16.1289 49.4821 15.9648 49.9811 15.7734 50.373C15.582 50.765 15.3473 51.0566 15.0693 51.248C14.7913 51.4395 14.4541 51.5352 14.0576 51.5352C13.734 51.5352 13.4378 51.4668 13.1689 51.3301C12.9001 51.1979 12.6676 51.0042 12.4717 50.749C12.2803 50.4984 12.1299 50.1976 12.0205 49.8467C11.9157 49.5003 11.8633 49.1107 11.8633 48.6777C11.8633 48.026 11.9795 47.4746 12.2119 47.0234C12.4443 46.5723 12.7451 46.2305 13.1143 45.998C13.4834 45.7656 13.873 45.6494 14.2832 45.6494L14.2832 46.9209C13.9368 46.9391 13.6611 47.0394 13.4561 47.2217C13.2555 47.404 13.112 47.6273 13.0254 47.8916C12.9434 48.1559 12.9023 48.418 12.9023 48.6777C12.9023 49.0241 12.9479 49.3135 13.0391 49.5459C13.1302 49.7829 13.2555 49.9629 13.415 50.0859C13.5745 50.209 13.7568 50.2705 13.9619 50.2705ZM12.9023 56.5762C12.9023 56.877 12.9639 57.155 13.0869 57.4102C13.21 57.6654 13.3786 57.8751 13.5928 58.0391C13.8115 58.2032 14.0599 58.2966 14.3379 58.3194L14.3379 59.5225C13.9004 59.4998 13.4925 59.3516 13.1143 59.0782C12.7406 58.8093 12.4375 58.4561 12.2051 58.0186C11.9772 57.5811 11.8633 57.1003 11.8633 56.5762C11.8633 56.0203 11.9613 55.5349 12.1572 55.1202C12.3532 54.71 12.6221 54.3682 12.9639 54.0948C13.3057 53.8259 13.6976 53.6231 14.1396 53.4864C14.5863 53.3542 15.0579 53.2882 15.5547 53.2882L15.8418 53.2882C16.3385 53.2882 16.8079 53.3542 17.25 53.4864C17.6966 53.6231 18.0908 53.8259 18.4326 54.0948C18.7744 54.3682 19.0433 54.71 19.2393 55.1202C19.4352 55.5349 19.5332 56.0203 19.5332 56.5762C19.5332 57.155 19.4147 57.6609 19.1777 58.0938C18.9453 58.5268 18.6263 58.8663 18.2207 59.1124C17.8197 59.363 17.3639 59.4998 16.8535 59.5225L16.8535 58.3194C17.1589 58.2966 17.4346 58.21 17.6807 58.0596C17.9268 57.9138 18.1227 57.7133 18.2686 57.4581C18.4189 57.2074 18.4941 56.9135 18.4941 56.5762C18.4941 56.1889 18.4167 55.863 18.2617 55.5987C18.1113 55.3389 17.9062 55.1316 17.6465 54.9766C17.3913 54.8262 17.1064 54.7169 16.792 54.6485C16.4821 54.5847 16.1654 54.5528 15.8418 54.5528L15.5547 54.5528C15.2311 54.5528 14.9121 54.5847 14.5977 54.6485C14.2832 54.7123 13.9984 54.8194 13.7432 54.9698C13.488 55.1248 13.2829 55.3321 13.1279 55.5919C12.9775 55.8562 12.9023 56.1843 12.9023 56.5762ZM18.2344 62.6291L12 62.6291L12 61.3644L19.3965 61.3644L19.3965 62.5949L18.2344 62.6291ZM19.4375 64.9396L18.2617 64.9328C18.2845 64.828 18.2982 64.7277 18.3027 64.632C18.3118 64.5408 18.3164 64.436 18.3164 64.3175C18.3164 64.0259 18.2708 63.7684 18.1797 63.5451C18.0885 63.3218 17.9609 63.1326 17.7969 62.9777C17.6328 62.8227 17.4368 62.6997 17.209 62.6086C16.9857 62.522 16.7396 62.465 16.4707 62.4377L16.2656 62.0822C16.7122 62.0822 17.1315 62.1255 17.5234 62.2121C17.9154 62.3032 18.2617 62.4422 18.5625 62.6291C18.8678 62.8159 19.1048 63.0529 19.2734 63.34C19.4466 63.6317 19.5332 63.978 19.5332 64.3791C19.5332 64.4702 19.5218 64.575 19.499 64.6935C19.4808 64.812 19.4603 64.894 19.4375 64.9396ZM15.6162 66.0569L15.7734 66.0569C16.3066 66.0569 16.8011 66.1343 17.2568 66.2893C17.7171 66.4442 18.1159 66.6676 18.4531 66.9592C18.7949 67.2509 19.0592 67.6041 19.2461 68.0188C19.4375 68.4335 19.5332 68.8983 19.5332 69.4133C19.5332 69.9329 19.4375 70.4 19.2461 70.8147C19.0592 71.234 18.7949 71.5894 18.4531 71.8811C18.1159 72.1773 17.7171 72.4029 17.2568 72.5579C16.8011 72.7128 16.3066 72.7903 15.7734 72.7903L15.6162 72.7903C15.083 72.7903 14.5885 72.7128 14.1328 72.5579C13.6771 72.4029 13.2783 72.1773 12.9365 71.8811C12.5993 71.5894 12.335 71.2362 12.1436 70.8215C11.9567 70.4114 11.8633 69.9465 11.8633 69.427C11.8633 68.9075 11.9567 68.4403 12.1436 68.0256C12.335 67.6109 12.5993 67.2554 12.9365 66.9592C13.2783 66.6676 13.6771 66.4442 14.1328 66.2893C14.5885 66.1343 15.083 66.0569 15.6162 66.0569ZM15.7734 67.3215L15.6162 67.3215C15.2471 67.3215 14.8984 67.3648 14.5703 67.4514C14.2467 67.538 13.9596 67.6679 13.709 67.8411C13.4583 68.0188 13.2601 68.2398 13.1143 68.5041C12.973 68.7685 12.9023 69.0761 12.9023 69.427C12.9023 69.7733 12.973 70.0764 13.1143 70.3362C13.2601 70.6005 13.4583 70.8192 13.709 70.9924C13.9596 71.1656 14.2467 71.2955 14.5703 71.3821C14.8984 71.4732 15.2471 71.5188 15.6162 71.5188L15.7734 71.5188C16.138 71.5188 16.4821 71.4732 16.8057 71.3821C17.1338 71.2955 17.4232 71.1633 17.6738 70.9856C17.929 70.8124 18.1296 70.5937 18.2754 70.3293C18.4212 70.0696 18.4941 69.7642 18.4941 69.4133C18.4941 69.067 18.4212 68.7616 18.2754 68.4973C18.1296 68.2375 17.929 68.0188 17.6738 67.8411C17.4232 67.6679 17.1338 67.538 16.8057 67.4514C16.4821 67.3648 16.138 67.3215 15.7734 67.3215ZM22.5 76.1702L12 76.1702L12 74.8987L22.5 74.8988L22.5 76.1702ZM22.5 79.9945L12 79.9945L12 78.723L22.5 78.723L22.5 79.9945ZM13.709 90.8628L19.3965 90.8628L19.3965 92.1343L12 92.1343L12 90.9244L13.709 90.8628ZM15.2676 91.1021L15.2812 91.6285C14.7891 91.6285 14.3333 91.5761 13.9141 91.4712C13.4993 91.371 13.1393 91.2069 12.834 90.9791C12.5286 90.7512 12.2894 90.4527 12.1162 90.0836C11.9476 89.7144 11.8633 89.2655 11.8633 88.7369C11.8633 88.3768 11.9157 88.0464 12.0205 87.7457C12.1253 87.4494 12.2871 87.1942 12.5059 86.98C12.7246 86.7658 13.0094 86.5995 13.3603 86.481C13.7113 86.3671 14.1328 86.3101 14.625 86.3101L19.3965 86.3101L19.3965 87.5748L14.6113 87.5748C14.2786 87.5748 14.0029 87.6112 13.7842 87.6841C13.57 87.7616 13.3991 87.8642 13.2715 87.9918C13.1484 88.1239 13.0618 88.2698 13.0117 88.4293C12.9616 88.5933 12.9365 88.7619 12.9365 88.9351C12.9365 89.4729 13.0391 89.899 13.2441 90.2134C13.4538 90.5279 13.734 90.7535 14.085 90.8902C14.4404 91.0315 14.8346 91.1021 15.2676 91.1021ZM17.9746 95.7467L9.15625 95.7467L9.15625 94.4752L19.3965 94.4752L19.3965 95.6373L17.9746 95.7467ZM15.7598 100.73L15.6162 100.73C15.0784 100.73 14.5794 100.666 14.1191 100.539C13.6634 100.411 13.2669 100.224 12.9297 99.9782C12.5924 99.7366 12.3304 99.4381 12.1436 99.0827C11.9567 98.7272 11.8633 98.3193 11.8633 97.859C11.8633 97.3896 11.9408 96.9749 12.0957 96.6149C12.2506 96.2549 12.4762 95.9495 12.7725 95.6989C13.0687 95.4482 13.4242 95.2477 13.8389 95.0973C14.2536 94.9515 14.7207 94.8512 15.2402 94.7965L16.0059 94.7965C16.5527 94.8512 17.0426 94.9538 17.4756 95.1041C17.9085 95.2545 18.2777 95.4528 18.583 95.6989C18.8929 95.9495 19.1276 96.2526 19.2871 96.608C19.4512 96.9635 19.5332 97.3737 19.5332 97.8385C19.5332 98.3034 19.4421 98.7158 19.2598 99.0758C19.082 99.4358 18.8268 99.7389 18.4941 99.985C18.1615 100.231 17.7627 100.416 17.2978 100.539C16.8376 100.666 16.3249 100.73 15.7598 100.73ZM15.6162 99.4586L15.7598 99.4586C16.1289 99.4586 16.4753 99.4199 16.7988 99.3424C17.127 99.2649 17.4141 99.1442 17.6602 98.9801C17.9108 98.8206 18.1068 98.6155 18.248 98.3649C18.3939 98.1142 18.4668 97.8157 18.4668 97.4694C18.4668 97.1504 18.4121 96.8724 18.3027 96.6354C18.1934 96.403 18.0452 96.2047 17.8584 96.0407C17.6761 95.8766 17.4665 95.7422 17.2295 95.6373C16.9971 95.5371 16.7555 95.4619 16.5049 95.4118L14.7344 95.4118C14.4154 95.5029 14.1146 95.6305 13.832 95.7946C13.554 95.9586 13.3284 96.1774 13.1553 96.4508C12.9867 96.7243 12.9023 97.0683 12.9023 97.483C12.9023 97.8248 12.973 98.1188 13.1143 98.3649C13.2601 98.6155 13.4583 98.8206 13.709 98.9801C13.9596 99.1442 14.2467 99.2649 14.5703 99.3424C14.8984 99.4199 15.2471 99.4586 15.6162 99.4586Z" fill="black" />
                </svg>
            </button>
            <hr style={{ position: 'relative', bottom: '.75rem' }} />
            <div>
                <Projects
                    data={data}
                    location={location}
                />
            </div>
        </Layout>
    );
}

export default ProjectsTemplate

export const pageQuery = graphql`query ProjectQuery($uid: String!) {
  project: prismicProject(uid: {eq: $uid}) {
    data {
      title {
        text
      }
      body {
        __typename
        ... on PrismicProjectDataBodyImageGallery {
          items {
            image {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 720
                    quality: 80
                    tracedSVGOptions: {color: "#000000", turnPolicy: TURNPOLICY_MINORITY, blackOnWhite: false}
                    placeholder: TRACED_SVG
                    layout: CONSTRAINED
                  )
                }
              }
            }
            alt
          }
        }
        ... on PrismicProjectDataBodyText {
          primary {
            text {
              html
            }
          }
        }
        ... on PrismicProjectDataBodyVideo {
          primary {
            link {
              html
              embed_url
            }
          }
        }
      }
    }
  }
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
            description {
              html
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
