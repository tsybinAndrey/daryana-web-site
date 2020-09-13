/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)
  const langs = ['en', 'ru']

  Object.keys(locales).map((lang) => {
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`

    return createPage({
      ...page,
      path: localizedPath,
      context: {
        ...page.context,
        locale: lang,
        isDefaultLocale: locales[lang].default,
        dateFormat: locales[lang].dateFormat,
      }
    })
  })
}
