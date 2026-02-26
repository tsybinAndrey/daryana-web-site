import React from "react"
import { Link } from "gatsby"

const getLocalizedPath = (path, locale, isDefaultLocale) => {
  if (isDefaultLocale) {
    return path
  }

  return `/${locale}${path}`
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio/" },
  { label: "Services & Pricing", path: "/services-pricing/" },
  { label: "Education", path: "/education/" },
  { label: "Events", path: "/events/" },
  { label: "About", path: "/about/" },
  { label: "Contact", path: "/contact/" },
]

const MainNavigation = ({ locale, isDefaultLocale }) => (
  <nav aria-label="Main Navigation">
    <ul>
      {navItems.map((item) => (
        <li key={item.path}>
          <Link to={getLocalizedPath(item.path, locale, isDefaultLocale)}>{item.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default MainNavigation
