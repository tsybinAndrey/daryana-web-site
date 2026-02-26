import React from "react"
import Seo from "../components/seo"
import MainNavigation from "../components/main-navigation"

const ClientGalleryPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext
  const pageTitle = locale === "ru" ? "Галерея клиентов" : "Client Gallery"

  return (
    <>
      <Seo lang={locale} title={`${pageTitle} | Daryana Osotkina`} description={pageTitle} />
      <main>
        <MainNavigation locale={locale} isDefaultLocale={isDefaultLocale} />
        <h1>{pageTitle}</h1>
      </main>
    </>
  )
}

export default ClientGalleryPage
