module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: 'Paola Barboglio | Web Development',
    description: 'Paola Barboglio | Web Development',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'paola-portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
