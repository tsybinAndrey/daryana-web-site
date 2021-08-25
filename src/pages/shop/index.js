import React from 'react'
import {Card} from 'primereact/card'

import * as pageStyles from "./index.module.css"
import SEO from "../../components/seo"
import Image from "../../components/background-image"
import { useTranslations } from "../../components/use-translations"

const ShopPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext

  const translations = useTranslations(locale)
  const homeLink = isDefaultLocale ? "/" : `/${locale}/`

  const header = (imgPath) => <img src={`/${imgPath}`} alt="Logo" />
  const footer = (price) => (
    <div
      className={pageStyles.price}  
    >
      <span>{price}</span>
    </div>
  )

  return (
    <>
      <SEO
        title={translations.shop.title}
        description={translations.shop.description}
      />
      <div className="p-grid p-justify-center p-nogutter">
        <div className="p-col-11 p-nogutter">
          <div
            className={pageStyles.cardContainer}
          >
            {translations.shop.prices.map((shotType) => {
              return (
                <Card
                  key={shotType.title}
                  className={`p-m-3 ${pageStyles.cardFontSize}`}
                  title={shotType.title}
                  subTitle={shotType.subtitle}
                  header={header(shotType.image)}
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
        </div>
      </div>
    </>
  )
}

export default ShopPage
