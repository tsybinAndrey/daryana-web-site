import React from "react"
import { Link } from "gatsby"

import Seo from "../seo"
import TextLogo from "../text-logo"
import Subtitle from "../subtitle"

import events from "../../data/events/events.json"
import * as styles from "../../pages/events/index.module.css"

const EventDetailPage = ({ pageContext, slug }) => {
  const { locale, isDefaultLocale } = pageContext
  const homeLink = isDefaultLocale ? "/" : `/${locale}/`
  const event = events.find(item => item.slug === slug)

  if (!event) {
    return (
      <div
        className="p-grid p-justify-center p-nogutter"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <div className="p-col-12 p-nogutter">
          <TextLogo to={homeLink} />
          <Subtitle text="EVENTS" />
        </div>
        <div className="p-col-11 p-lg-9 p-xl-8">
          <h1 className={styles.pageTitle}>Event not found</h1>
          <p>The requested event page is not available yet.</p>
          <Link to={isDefaultLocale ? "/events" : `/${locale}/events`}>
            Back to events
          </Link>
        </div>
      </div>
    )
  }

  const eventsLink = isDefaultLocale ? "/events" : `/${locale}/events`

  return (
    <>
      <Seo title={event.title} description={event.summary} />
      <div
        className="p-grid p-justify-center p-nogutter"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <div className="p-col-12 p-nogutter">
          <TextLogo to={homeLink} />
          <Subtitle text="EVENTS" />
        </div>

        <div className="p-col-11 p-lg-9 p-xl-8">
          <div className={styles.detailHeader}>
            <Link to={eventsLink} className={styles.backLink}>
              ← Back to upcoming events
            </Link>
            <h1 className={styles.pageTitle}>{event.title}</h1>
            <p className={styles.metaText}>
              {event.date} · {event.location} · {event.price}
            </p>
            <p>{event.summary}</p>
          </div>

          <section className={styles.detailSection}>
            <h2 className={styles.sectionTitle}>Agenda</h2>
            <ul>
              {event.agenda.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.detailSection}>
            <h2 className={styles.sectionTitle}>Who this is for</h2>
            <ul>
              {event.audience.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.detailSection}>
            <h2 className={styles.sectionTitle}>What to bring</h2>
            <ul>
              {event.whatToBring.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.detailSection}>
            <h2 className={styles.sectionTitle}>Registration</h2>
            <p>Place Timepad embed code here when integration is ready.</p>
            <div
              id={event.timepadContainerId}
              className={styles.registrationPlaceholder}
            >
              Timepad embed container placeholder: #{event.timepadContainerId}
            </div>
            <p>
              If the embed is unavailable, register directly:{" "}
              <a href={event.registrationLink} target="_blank" rel="noreferrer">
                {event.registrationLink}
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default EventDetailPage
