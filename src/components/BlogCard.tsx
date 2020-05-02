/// <reference path="../../declaration.d.ts" />

import React from "react"
import BlogCardStyles from "../styles/modules/blogcard.module.scss"
import { Card, CardTitle, CardBody, Button } from "shards-react"
import { Link } from "gatsby"
import Image from "./Image"

const BlogCard: React.FC<IProps> = ({ title, image, content, link }) => {
  return (
    <Card className={BlogCardStyles.blogCard}>
      <Image
        className={BlogCardStyles.blogCardImage}
        alt="temp"
        filename={image}
      />
      <CardBody>
        <CardTitle> {title} </CardTitle>
        <p> {content} </p>
        <Button>
          {/* TODO: change the as to title */}
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
}

export default BlogCard
