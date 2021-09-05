import React from "react"
import Seo from "../components/seo"
import * as style from "./contact.module.css"
import { useTranslations } from "../components/use-translations"
import TextLogo from "../components/text-logo"
import Subtitle from "../components/subtitle"

const ContactPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext

  const translations = useTranslations(locale)
  const homeLink = isDefaultLocale ? "/" : `/${locale}/`

  return (
    <>
      <Seo
        title={translations.contact.title}
        description={translations.contact.description}
      />
      <div className={style.contact}>
        <div>
          <TextLogo to={homeLink} />
          <Subtitle text="Photography" />
        </div>
        <div className={style.contactContent}>
          <h3>{translations.menu.contact}</h3>
          <p>@OSOTKINADARYANA</p>
          <p>{translations.phone}: +79824410176</p>
          <p>email: osotkinaph@mail.ru</p>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              title="Contact Me On WhatsApp"
              href="https://wa.me/79824410176?text=Hi%2C%20I%20wanna%20get%20some%20info!"
            >WhatsApp</a>
            &nbsp;
            <a
              target="_blank"
              rel="noreferrer"
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
