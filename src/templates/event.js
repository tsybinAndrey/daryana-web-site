import React from "react"

import EventDetailPage from "../components/events/event-detail-page"

const EventTemplate = props => {
  const { slug } = props.pageContext

  return <EventDetailPage {...props} slug={slug} />
}

export default EventTemplate
