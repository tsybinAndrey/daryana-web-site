import React from 'react'

import SEO from "../../components/seo"
import { useTranslations } from "../../components/use-translations"

const ContactPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext

  const translations = useTranslations(locale)
  const homeLink = isDefaultLocale ? "/" : `/${locale}/`

  return (
    <>
      <SEO
        title={translations.shop.title}
        description={translations.shop.description}
      />
    </>
  )
}

export default ContactPage
