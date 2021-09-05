import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Seo from "../components/seo"
import LogoImage from "../components/logo-image";
import { useTranslations } from "../components/use-translations"

import * as style from "./work.module.css"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      left: allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "gallery-left" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      right: allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "gallery-right" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const leftColumn = data.left.edges
  const rightColumn = data.right.edges

  return (
    <>
      <div className={style.photoColumnLeft}>
        {leftColumn.map(image => (
          <div
            key={image.node.base.split(".")[0]}
            className={style.photoElement}
          >
            <Img
              key={image.node.base.split(".")[0]}
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
            />
          </div>
        ))}
      </div>
      <div className={style.photoColumnRight}>
        {rightColumn.map(image => (
          <div
            key={image.node.base.split(".")[0]}
            className={style.photoElement}
          >
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
            />
          </div>
        ))}
      </div>
    </>
  )
}

const Work = ({ pageContext }) => {
  const { locale, isDefaultLocale } = pageContext

  const translations = useTranslations(locale)
  const homeLink = isDefaultLocale ? "/" : `/${locale}/`
  
  return (
    <>
      <Seo
        title={translations.work.title}
        description={translations.work.description}
      />
      <div className={style.work}>
        <div className={style.header}>
          <div>
            <a href={homeLink}>{translations.menu.home}</a>
          </div>
          <div>
            <LogoImage className={style.logoImg}/>
          </div>
        </div>
        <div className={style.gallery}>
          <Gallery />
        </div>
      </div>
    </>
  )
}

export default Work
