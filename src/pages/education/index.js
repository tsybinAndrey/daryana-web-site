import React from "react"
import Seo from "../../components/seo"
import MainNavigation from "../../components/main-navigation"

const EducationPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext
  const pageTitle = locale === "ru" ? "Обучение" : "Education"

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

export default EducationPage
