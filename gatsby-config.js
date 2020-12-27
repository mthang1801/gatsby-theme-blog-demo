/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    // create gatsby-transition
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.jsx`),
      },
    },
    // create loading
    `gatsby-plugin-nprogress`
  ],
}
