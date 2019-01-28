module.exports = {
  siteMetadata: {
    title: 'Poop',
    siteUrl: 'https://nikita-seleznev.com',
  },
  plugins: [
    // 'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'nikita-seleznev',
        accessToken: 'MC5XNWtQQXlrQUFDa0FGR2ky.fu-_vTVwGe-_vS7vv71n77-9Smnvv70b77-9VildFHFl77-977-977-9OFXvv71k77-9Pu-_vTg',
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
