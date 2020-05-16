import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Image from "../components/Image"
import BlogPostStyles from "../styles/modules/blogpost.module.scss"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, date, description } = frontmatter

  return (
    <Layout>
      <SEO description={description} title={title} />
      <Container>
        <article className={BlogPostStyles.blogPost}>
          <h1>{title}</h1>
          <p>
            Published in <time>{date}</time>
          </p>
          <div className="mt-5">{/* cover here */}</div>
          <p
            className={BlogPostStyles.blogPostParagraph}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`
