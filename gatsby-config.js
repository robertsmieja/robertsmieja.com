module.exports = {
  siteMetadata: {
    title: `Robert Smieja`,
    description: `Personal homepage for Robert Smieja`,
    author: `Robert Smieja`,
    siteUrl: `https://robertsmieja.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Robert Smieja`,
        short_name: `Robert Smieja`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to `React`
        allExtensions: true // defaults to false
      }
    },
    `gatsby-plugin-typescript-checker`,
    `gatsby-transformer-sharp`
  ]
}
