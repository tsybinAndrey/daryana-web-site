import React from "react"
import Seo from "../../components/seo"
import MainNavigation from "../../components/main-navigation"

const PortfolioPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext
  const pageTitle = locale === "ru" ? "Портфолио" : "Portfolio"

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

export default PortfolioPage
