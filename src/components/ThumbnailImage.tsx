import React from "react"
import Img from "gatsby-image"

const ThumbnailImage: React.FC<IProps> = ({ alt, className, image }) => {
  return <Img className={className} alt={alt} fluid={image} draggable={false} />
}
interface IProps {
  className?: string
  alt: string
  image: any
}

export default ThumbnailImage
