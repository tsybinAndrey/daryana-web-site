import React from 'react'
import {Card} from 'primereact/card'
import {Divider} from 'primereact/divider'

import * as pageStyles from "./index.module.css"
import SEO from "../../components/seo"
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
        <Divider align="left">
            <div className="p-d-inline-flex p-ai-center">
                <b>{translations.shop.commonInfo.title}</b>
            </div>
          </Divider>
          <div className="p-text-normal">
            <ul className="p-component" style={{listStyle: "none"}}>
              {translations.shop.commonInfo.list.map((info) =>(
                <li key={info}>
                  <i className="pi pi-check" style={{'fontSize': '2em'}}></i>
                  {info}
                </li>
              ))}
            </ul>
          </div>
          <Divider align="left">
            <div className="p-d-inline-flex p-ai-center">
                <b>{translations.shop.shop}</b>
            </div>
          </Divider>
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
          <Divider align="left">
            <div className="p-d-inline-flex p-ai-center">
                <b>{translations.shop.terms.title}</b>
            </div>
          </Divider>
          <div className="p-text-normal">
            <ul className="p-component" style={{color: "#707070"}}>
              {translations.shop.terms.list.map((term) => (
                <li>{term}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopPage
