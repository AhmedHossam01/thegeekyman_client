import React from "react"
import BlogCard from "../components/BlogCard"
import { Row, Col } from "react-bootstrap"

const BlogCardsContainer = ({ posts }) => {
  return (
    <Row className="mt-5">
      {posts.map(post => {
        const node = post.node
        const {
          title,
          slug,
          description,
          featuredImage,
          tags,
        } = node.frontmatter
        const readingTime = node.fields.readingTime.text

        return (
          <Col lg={4} md={6}>
            <BlogCard
              title={title}
              content={description}
              image={featuredImage.childImageSharp.fluid}
              link={slug}
              readingTime={readingTime}
              tags={tags}
            />
          </Col>
        )
      })}
    </Row>
  )
}

export default BlogCardsContainer
