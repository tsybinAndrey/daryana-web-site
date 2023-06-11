const path = require('path')
const fs = require('fs')

function generateGDocsPluginConf(folderId, destination) {
  return {
    resolve: '@fs/gatsby-plugin-drive',
    options: {
      folderId,
      key: JSON.parse(process.env.GOOGLE_SERVICE_FILE),
      destination,
      exportGDocs: true,
      exportMimeType: 'image/jpg',
    }
  }
}

const environment = process.env.NODE_ENV

if (environment === 'development') {
  require('dotenv').config()
}

const galleryLeftIds = {
  folderId: process.env.GALLERY_LEFT_FOLDER_ID,
  destination: path.join(__dirname, 'src/images/gallery-left'),
}
const galleryRightIds = {
  folderId: process.env.GALLERY_RIGHT_FOLDER_ID,
  destination: path.join(__dirname, 'src/images/gallery-right'),
}
const shopPhotosIds = {
  folderId: process.env.GALLERY_SHOP_FOLDER_ID,
  destination: path.join(__dirname, 'src/images/shop-photos')
}

const gdocsPaths = [galleryLeftIds,galleryRightIds,shopPhotosIds]

const plugins = [
  `gatsby-plugin-react-helmet`
]

// Trigger GDocs API only if folders does not exists
// Use yarn clean:gallery command to delete photos
for (const gDocId of gdocsPaths) {
  if (!fs.existsSync(gDocId.destination)) {
    const gDocConf = generateGDocsPluginConf(gDocId.folderId, gDocId.destination)
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
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-SZQSFMB9SB",
      ],
      pluginConfig: {
        head: true,
      },
    },
  },
])

module.exports = {
  siteMetadata: {
    title: `Photographer Daryana Osotkina`,
    description: `Your photography, videography guide`,
    author: `@AndreiTcybin`,
  },
  plugins,
}
