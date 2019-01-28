const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const pageMaker = () => data => {
    data.edges.forEach(({ node }) => {
      const { uid } = node
      createPage({
        component: path.resolve(`src/templates/project.js`),
        path: uid,
        context: {
          uid,
        },
      })
    })
  }

  const pages = await graphql(`
    {
      allPrismicProject(limit: 2000) {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  for (const key in pages.data) {
    pageMaker(key)(pages.data[key])
  }
}
