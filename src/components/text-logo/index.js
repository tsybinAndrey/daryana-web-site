import React from 'react'
import {Link} from 'gatsby'

import * as pageStyles from './index.module.css'

const TextLogo = ({to}) => {
  return (
    <h1 className={pageStyles.title}>
      <Link to={to}>
        DARYANA OSOTKINA
      </Link>
    </h1>
  )
}

export default TextLogo
