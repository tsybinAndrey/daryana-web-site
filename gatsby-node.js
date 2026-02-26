/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const events = require(`./src/data/events/events.json`)

const locales = {
  en: {
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
  },
  ru: {
    default: true,
    path: `ru`,
    locale: `ru-RU`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `ru`,
    ogLanguage: `ru_RU`,
  },
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const eventTemplate = path.resolve(`src/templates/event.js`)

  events.forEach(event => {
    createPage({
      path: `/events/${event.slug}`,
      component: eventTemplate,
      context: {
        slug: event.slug,
      },
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.context && page.context.locale) {
    return
  }

  deletePage(page)

  Object.keys(locales).forEach(lang => {
    const localizedPath = locales[lang].default
      ? page.path
      : `/${locales[lang].path}${page.path}`

    createPage({
      ...page,
      path: localizedPath,
      context: {
        ...page.context,
        locale: lang,
        isDefaultLocale: locales[lang].default,
        dateFormat: locales[lang].dateFormat,
      },
    })
  })
}
