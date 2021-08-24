import React from 'react'
import {Card} from 'primereact/card'

import SEO from "../../components/seo"
import Image from "../../components/background-image"
import { useTranslations } from "../../components/use-translations"

const ContactPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext

  const translations = useTranslations(locale)
  const homeLink = isDefaultLocale ? "/" : `/${locale}/`

  const header = <Image />
  const footer = <span>25 000 rub</span>
  return (
    <>
      <SEO
        title={translations.shop.title}
        description={translations.shop.description}
      />
      <div className="p-grid p-justify-center p-nogutter">
        <div className="p-col-11 p-nogutter">
          <div className="p-d-flex p-flex-column p-flex-md-row p-jc-center p-ai-center p-flex-wrap">
            {[1,2,3,4,5].map(() => {
              return (
                <Card
                  className="p-m-2 p-component"
                  style={{width: "20em"}}
                  title="Портретная съемка в студии"
                  subTitle="Индивидуальная съемка для одного человека"
                  header={header}
                  footer={footer}
                >
                  В стоимость входит:<br/>
                  <ul>
                    <li>Аренда студии на 2 часа</li>
                    <li>20 кадров в авторской обработке и ретуши</li>
                    <li>Видеоролик до 1 минуты</li>
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

export default ContactPage
