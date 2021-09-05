import React from 'react'

import * as pageStyles from './index.module.css'

const Subtitle = ({text}) => {
  return <h2 className={pageStyles.subtitle}>{text}</h2>
}

export default Subtitle
