/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `For Kids By Kids Bio Blog`,
    description: `Articles about the environment`,
    author: `FKBKBB`,
  },
  plugins: [
    "gatsby-remark-images",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `For Kids By Kids Bio Blog`,
        short_name: `kbb`,
        start_url: `/`,
        background_color: `blue`,
        theme_color: `blue`,
        icon: `src/images/earth-globe-americas_1f30e.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
