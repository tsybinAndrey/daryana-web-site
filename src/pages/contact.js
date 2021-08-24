import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import * as style from "./contact.module.css"
import { useTranslations } from "../components/use-translations"

const ContactPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext

  const translations = useTranslations(locale)
  const homeLink = isDefaultLocale ? "/" : `/${locale}/`

  return (
    <>
      <SEO
        title={translations.contact.title}
        description={translations.contact.description}
      />
      <div className={style.contact}>
        <div className={style.contactTitle}>
          <h1>DARYANA OSOTKINA</h1>
          <h2>Photography</h2>
          <p><Link to={homeLink}>{translations.menu.home}</Link></p>
        </div>
        <div className={style.contactContent}>
          <h3>{translations.menu.contact}</h3>
          <p>@OSOTKINADARYANA</p>
          <p>{translations.phone}: +79824410176</p>
          <p>email: osotkinaph@mail.ru</p>
          <p>
            <a
              target="_blank"
              title="Contact Me On WhatsApp"
              href="https://wa.me/79824410176?text=Hi%2C%20I%20wanna%20get%20some%20info!"
            >WhatsApp</a>
            &nbsp;
            <a
              target="_blank"
              title="Contact Me On Telegram"
              href="https://t.me/osotkinaph"
            >Telegram</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default ContactPage
