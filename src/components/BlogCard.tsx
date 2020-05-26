/// <reference path="../../declaration.d.ts" />

import React from "react"
import BlogCardStyles from "../styles/modules/blogcard.module.scss"
import { Card, CardTitle, CardBody, Button } from "shards-react"
import { Link } from "gatsby"
import ThumbnailImage from "./ThumbnailImage"
import randomColor from "random-material-color"

const BlogCard: React.FC<IProps> = ({
  title,
  image,
  content,
  link,
  readingTime,
  tags,
}) => {
  return (
    <Card className={BlogCardStyles.blogCard}>
      <ThumbnailImage
        className={BlogCardStyles.blogCardImage}
        alt={title}
        image={image}
      />
      <CardBody>
        <CardTitle className="d-flex justify-content-between flex-column">
          <Link style={{ color: "black" }} to={link}>
            {title}
          </Link>
          <time
            className="font-weight-light mt-2"
            style={{ fontSize: ".9rem" }}
          >
            {readingTime}
          </time>
        </CardTitle>
        <p>
          {tags.map((tag, index) => {
            return (
              <Link
                className="mr-2 text-white px-2 rounded shadow-sm"
                to={`tags/${tag}`}
                style={{ backgroundColor: randomColor.getColor() }}
              >
                {tag}
              </Link>
            )
          })}
        </p>
        <p> {content} </p>
        <Button>
          <Link to={link} className={BlogCardStyles.blogCardButton}>
            Read more &rarr;
          </Link>
        </Button>
      </CardBody>
    </Card>
  )
}

interface IProps {
  title: string
  content: string
  image: string
  link: string
  readingTime: string
  tags: any
}

export default BlogCard
