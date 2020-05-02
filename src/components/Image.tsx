import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image: React.FC<IProps> = ({ filename, alt, className }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })
      if (!image) {
        return null
      }

      return (
        <Img
          className={className}
          alt={alt}
          fluid={image.node.childImageSharp.fluid}
          draggable={false}
        />
      )
    }}
  />
)

interface IProps {
  className?: string
  alt: string
  filename: string
}

export default Image
