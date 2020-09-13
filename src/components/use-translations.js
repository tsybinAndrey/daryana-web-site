import { graphql, useStaticQuery } from "gatsby"

export const useTranslations = (locale) => {
  const { rawData } = useStaticQuery(query)

  const [translations] = rawData.edges
    .filter((edge) => edge.node.name === locale)
    .map((edge) => edge.node.childTranslationsJson)

  return translations
}

export const query = graphql`
  query useTranslations {
    rawData: allFile(filter: {sourceInstanceName: {eq: "translations"}}) {
      edges {
        node {
          name
          sourceInstanceName
          childTranslationsJson {
            phone
            menu {
              contact
              home
              work
            }
            work {
              description
              title
            }
            contact {
              description
              title
            }
            index {
              description
              title
            }
          }
        }
      }
    }
  }
`