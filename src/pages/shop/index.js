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
                <b>{translations.shop.commonInfo}</b>
            </div>
          </Divider>
          <div className="p-text-normal">
            <p className="p-component">
              <ul style={{listStyle: "none"}}>
                <li>
                  <i className="pi pi-check" style={{'fontSize': '2em'}}></i>
                  Опыт съемок не обязателен
                </li>
                <li>
                  <i className="pi pi-check" style={{'fontSize': '2em'}}></i>
                  Отсутствие опыта приветствуется
                </li>
                <li>
                  <i className="pi pi-check" style={{'fontSize': '2em'}}></i>
                  Я помогу вам с позированием, стилизацией и ощущение комфорта
                </li>
              </ul>
            </p>
          </div>
          <Divider align="left">
            <div className="p-d-inline-flex p-ai-center">
                <b>Магазин</b>
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
                <b>{translations.shop.terms}</b>
            </div>
          </Divider>
          <div className="p-text-normal">
            <p className="p-component" style={{color: "#707070"}}>
              <ul>
                <li>
                  Локация зависит от концепции съемки. Съемка может проходить на улице или в фотостудии (студия оплачивается отдельно);
                </li>
                <li>
                  Все кадры на выходе будут в цвете и черно-белой обработке. Примеры и стилистику работ можно посмотреть на сайте;
                </li>
                <li>
                  Я самостоятельно выбираю кадры на обработку. Исходники не передаются заказчику;
                </li>
                <li>
                  Бронь даты и времени осуществляется после предоплаты в размере 5 000 рублей;
                </li>
                <li>
                  Предоплата невозвратная;
                </li>
                <li>
                  Перенос возможен 1 раз и не позднее, чем за 4 дня до фотосессии;
                </li>
                <li>
                  Срок выполнения работы 2 недели;
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopPage
