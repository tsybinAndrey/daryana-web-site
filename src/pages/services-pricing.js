import React from "react"
import Seo from "../components/seo"
import MainNavigation from "../components/main-navigation"

const ServicesPricingPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext
  const pageTitle = locale === "ru" ? "Услуги и цены" : "Services & Pricing"

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

export default ServicesPricingPage
