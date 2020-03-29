'use strict'

module.exports = {
  siteMetadata: {
    title: 'Ortalio',
    metaTitle: 'Ortalio - Słowa, Muzyka, Głos | Lyrics, Music, Vocal',
    description: 'Electronic music project',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Resi Respati',
      url: 'https://twitter.com/resir014',
      email: 'resir014@gmail.com'
    },
    social: {
      facebook: 'https://www.facebook.com/ortalio',
      soundcloud: 'https://soundcloud.com/ortalio',
      audiomack: 'https://audiomack.com/artist/ortalio',
      instagram: 'https://instagram.com/ptrmarkiewicz',
      twitter: 'https://twitter.com/ptrmarkiewicz',
      youtube: 'https://www.youtube.com/channel/UC0WpPMCoe5blLkgiMgefwKQ',
      spotify: 'https://open.spotify.com/artist/6xg2rA6a086VVphZr5OT51?si=92NiVpZJSyWkXToVQkJCYg',
      applemusic: 'https://itunes.apple.com/us/artist/ortalio/1464205874',
      deezer: 'https://www.deezer.com/pl/artist/313751',
      bandcamp: 'https://ortalio.bandcamp.com/',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/content/assets`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-easy-import")(),
          require("postcss-custom-properties")({ preserve: false }),
          require("postcss-color-function")(),
          require("autoprefixer")({ browsers: ["last 2 versions"] }),
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
