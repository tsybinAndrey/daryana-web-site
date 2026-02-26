import React, { useState } from "react"
import { Link } from "gatsby"

import Seo from "../../components/seo"
import TextLogo from "../../components/text-logo"
import Subtitle from "../../components/subtitle"

import freeLessons from "../../data/education/free-lessons.json"
import advancedLessons from "../../data/education/advanced-lessons.json"
import * as styles from "./index.module.css"

const EducationPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext
  const homeLink = isDefaultLocale ? "/" : `/${locale}/`
  const [activeTab, setActiveTab] = useState("free")
  const contactLink = isDefaultLocale ? "/contact" : `/${locale}/contact`

  return (
    <>
      <Seo
        title="Education"
        description="Free and advanced photography lessons with practical structure and clear progression."
      />
      <div
        className="p-grid p-justify-center p-nogutter"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <div className="p-col-12 p-nogutter">
          <TextLogo to={homeLink} />
          <Subtitle text="EDUCATION" />
        </div>

        <div className="p-col-11 p-lg-10 p-xl-9">
          <h1 className={styles.pageTitle}>Lessons</h1>

          <div
            className={styles.tabButtons}
            role="tablist"
            aria-label="Education lesson types"
          >
            <button
              type="button"
              className={`${styles.tabButton} ${
                activeTab === "free" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("free")}
            >
              Free lessons
            </button>
            <button
              type="button"
              className={`${styles.tabButton} ${
                activeTab === "advanced" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("advanced")}
            >
              Advanced lessons
            </button>
          </div>

          {activeTab === "free" ? (
            <div className={styles.cardGrid}>
              {freeLessons.map(lesson => (
                <article key={lesson.id} className={styles.lessonCard}>
                  <h2>{lesson.title}</h2>
                  <p className={styles.metaText}>{lesson.format}</p>
                  <p>{lesson.description}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.cardGrid}>
              {advancedLessons.map(lesson => (
                <article key={lesson.id} className={styles.lessonCard}>
                  <h2>{lesson.title}</h2>
                  <p className={styles.metaText}>
                    {lesson.duration} · {lesson.lessonCount} lessons
                  </p>
                  <p>{lesson.description}</p>
                  <Link
                    to={
                      lesson.ctaLink === "/contact"
                        ? contactLink
                        : lesson.ctaLink
                    }
                    className={styles.ctaLink}
                  >
                    {lesson.ctaLabel}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default EducationPage
