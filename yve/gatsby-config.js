// https://www.gatsbyjs.org/docs/gatsby-config/

const siteMetadata = {
  name: `Angel Lines`,
  author: `@yvevestal`,
  description: `A Decentralized Site Landing`,
  social: [],
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-chakra-ui',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        ...siteMetadata,
        display: 'minimal-ui',
        theme_color: 'slategray',
        background_color: 'ghostwhite',
        icon: 'src/assets/favicon.png',
        lang: 'en-US',
        start_url: '/',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
};
