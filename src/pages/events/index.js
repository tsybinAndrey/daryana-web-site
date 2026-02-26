import React from "react"
import { Link } from "gatsby"

import Seo from "../../components/seo"
import TextLogo from "../../components/text-logo"
import Subtitle from "../../components/subtitle"

import events from "../../data/events/events.json"
import * as styles from "./index.module.css"

const EventsPage = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext
  const homeLink = isDefaultLocale ? "/" : `/${locale}/`
  const eventBasePath = isDefaultLocale ? "/events" : `/${locale}/events`

  return (
    <>
      <Seo
        title="Events"
        description="Upcoming photography events, workshops, and practical sessions."
      />
      <div
        className="p-grid p-justify-center p-nogutter"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <div className="p-col-12 p-nogutter">
          <TextLogo to={homeLink} />
          <Subtitle text="EVENTS" />
        </div>

        <div className="p-col-11 p-lg-9 p-xl-8">
          <h1 className={styles.pageTitle}>Upcoming events</h1>
          <div className={styles.eventList}>
            {events.map(event => (
              <Link
                to={`${eventBasePath}/${event.slug}`}
                key={event.slug}
                className={styles.eventCard}
              >
                <h2>{event.title}</h2>
                <p className={styles.metaText}>
                  {event.date} · {event.location} · {event.price}
                </p>
                <p>{event.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EventsPage
