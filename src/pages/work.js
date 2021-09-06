import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Seo from "../components/seo"
import TextLogo from "../components/text-logo"
import Subtitle from "../components/subtitle"
import { useTranslations } from "../components/use-translations"

import * as style from "./work.module.css"

const Gallery = () => {
  // TODO
  // Switch to "gatsby-plugin-image" for better performance and a simpler API
  // See https://gatsby.dev/migrate-images to learn how.
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
      <div
        className="p-grid p-justify-center p-nogutter"
        style={{backgroundColor: "#eeeeee"}}
      >
        <div className="p-col-12 p-nogutter">
          <TextLogo to={homeLink} />
          <Subtitle text="WORK" />
        </div>
        <div className="p-col-12 p-lg-10 p-xl-9 p-nogutter">
          <div className={style.gallery}>
            <Gallery />
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
