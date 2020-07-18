import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo"
import LogoImage from "../components/logo-image";

import style from "./work.module.css"

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
            <a href="#">
              <Img
                key={image.node.base.split(".")[0]}
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[0]}
              />
            </a>
          </div>
        ))}
      </div>
      <div className={style.photoColumnRight}>
        {rightColumn.map(image => (
          <div
            key={image.node.base.split(".")[0]}
            className={style.photoElement}
          >
            <a href="#">
              <Img
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[0]}
              />
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

const Work = () => {
  return (
    <>
      <SEO title="Work" />
      <div className={style.work}>
        <div className={style.header}>
          <div>
            <a href="/">Home | Домой</a>
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
