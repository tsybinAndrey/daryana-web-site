const path = require('path')
const environment = process.env.NODE_ENV

if (environment === 'development') {
  require('dotenv').config()
}


module.exports = {
  siteMetadata: {
    title: `Photographer Daryana Osotkina`,
    description: `Your photography, videography guide`,
    author: `@AndreiTcybin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: '@fs/gatsby-plugin-drive',
      options: {
        folderId: process.env.GALLERY_LEFT_FOLDER_ID,
        key: JSON.parse(process.env.GOOGLE_SERVICE_FILE),
        destination: path.join(__dirname, 'src/images/gallery-left'),
        exportGDocs: true,
        exportMimeType: 'image/jpg',
      }
    },
    {
      resolve: '@fs/gatsby-plugin-drive',
      options: {
        folderId: process.env.GALLERY_RIGHT_FOLDER_ID,
        key: JSON.parse(process.env.GOOGLE_SERVICE_FILE),
        destination: path.join(__dirname, 'src/images/gallery-right'),
        exportGDocs: true,
        exportMimeType: 'image/jpg',
      }
    },
    {
      resolve: '@fs/gatsby-plugin-drive',
      options: {
        folderId: process.env.GALLERY_SHOP_FOLDER_ID,
        key: JSON.parse(process.env.GOOGLE_SERVICE_FILE),
        destination: path.join(__dirname, 'src/images/shop-photos'),
        exportGDocs: true,
        exportMimeType: 'image/jpg',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `translations`,
        path: `${__dirname}/src/translations`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `DaryanaPhoto`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-81233047-2`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
