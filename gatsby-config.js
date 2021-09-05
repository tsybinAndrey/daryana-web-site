const path = require('path')
const fs = require('fs')

function generateGDocsPluginConf(destination) {
  return {
    resolve: '@fs/gatsby-plugin-drive',
    options: {
      folderId: process.env.GALLERY_LEFT_FOLDER_ID,
      key: JSON.parse(process.env.GOOGLE_SERVICE_FILE),
      destination: destination,
      exportGDocs: true,
      exportMimeType: 'image/jpg',
    }
  }
}

const environment = process.env.NODE_ENV

if (environment === 'development') {
  require('dotenv').config()
}

const galleryLeftPath = path.join(__dirname, 'src/images/gallery-left')
const galleryRightPath = path.join(__dirname, 'src/images/gallery-right')
const shopPhotosPath = path.join(__dirname, 'src/images/shop-photos')

const gdocsPaths = [galleryLeftPath,galleryRightPath,shopPhotosPath]

const plugins = [
  `gatsby-plugin-react-helmet`
]

// Trigger GDocs API only if folders does not exists
// Use yarn clean:gallery command to delete photos
for (const gDocPath of gdocsPaths) {
  if (!fs.existsSync(gDocPath)) {
    const gDocConf = generateGDocsPluginConf(gDocPath)
    plugins.push(gDocConf)
  }
}

plugins.push(...[
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
  }
])

module.exports = {
  siteMetadata: {
    title: `Photographer Daryana Osotkina`,
    description: `Your photography, videography guide`,
    author: `@AndreiTcybin`,
  },
  plugins,
}
