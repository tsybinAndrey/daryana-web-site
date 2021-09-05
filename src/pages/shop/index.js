import React from 'react'
import {Card} from 'primereact/card'
import {Divider} from 'primereact/divider'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

import * as pageStyles from "./index.module.css"
import Seo from "../../components/seo"
import TextLogo from '../../components/text-logo'
import { useTranslations } from "../../components/use-translations"
import Subtitle from '../../components/subtitle'

function getPhotoByFileName(fileName, images) {
  for (let image of images) {
    if (image.node.base === fileName) {
      return image
    }
  }
  return null
}

const ShopPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      shop: allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "shop-photos" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`)

  const shopPhotos = data.shop.edges

  const { locale, isDefaultLocale } = pageContext

  const translations = useTranslations(locale)
  const homeLink = isDefaultLocale ? "/" : `/${locale}/`

  const header = (fluid, alt) => <Img fluid={fluid} alt={alt} />

  const footer = (price) => (
    <div
      className={pageStyles.price}  
    >
      <span>{price}</span>
    </div>
  )

  return (
    <>
      <Seo
        title={translations.shop.title}
        description={translations.shop.description}
      />
      <div
        className="p-grid p-justify-center p-nogutter"
        style={{backgroundColor: "#eeeeee"}}
      >
        <div>
          <TextLogo to={homeLink} />
          <Subtitle text="SHOP" />
        </div>
        <div className="p-col-11 p-nogutter">
          {/* <Divider align="left">
            <div className="p-d-inline-flex p-ai-center">
                <b>{translations.shop.shop}</b>
            </div>
          </Divider> */}
          <div
            className={pageStyles.cardContainer}
          >
            {translations.shop.prices.map((shotType) => {
              const image = getPhotoByFileName(shotType.image, shopPhotos)

              return (
                <Card
                  key={shotType.title}
                  className={`p-m-3 ${pageStyles.cardFontSize}`}
                  title={shotType.title}
                  subTitle={shotType.subtitle}
                  header={header(
                    image.node.childImageSharp.fluid,
                    image.node.base.split(".")[0],
                  )}
                  footer={footer(shotType.price)}
                >
                  <b>{shotType.includesText}</b><br/>
                  <ul
                    className={pageStyles.includesList}
                  >
                    {shotType.includesList.map((sometext) => (
                      <li
                        key={sometext}
                      >{sometext}</li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
          <Divider align="left">
            <div className={`p-d-inline-flex p-ai-center ${pageStyles.dividerContent}`}>
                <b>{translations.shop.terms.title}</b>
            </div>
          </Divider>
          <div className="p-text-normal">
            <ul className="p-component" style={{color: "#707070"}}>
              {translations.shop.terms.list.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopPage
