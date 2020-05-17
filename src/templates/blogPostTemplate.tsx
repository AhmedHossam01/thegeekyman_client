import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Img from "gatsby-image"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import BlogPostStyles from "../styles/modules/blogpost.module.scss"

deckDeckGoHighlightElement()

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid
  const { title, date, description } = frontmatter
  const readingTime = markdownRemark.fields.readingTime.text

  return (
    <Layout>
      <SEO description={description} title={title} />
      <Container>
        <article className={BlogPostStyles.blogPost}>
          <h1>{title}</h1>
          <div>
            <p>
              Published in <time>{date}</time>
            </p>
            <p className="font-weight-light mt-n2" style={{ color: "#808080" }}>
              {readingTime}
            </p>
          </div>
          <div className={BlogPostStyles.blogPostImageContainer}>
            <Img
              fluid={featuredImgFluid}
              draggable={false}
              className={BlogPostStyles.blogPostImage}
            />
          </div>
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
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
