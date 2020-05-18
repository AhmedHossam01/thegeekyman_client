import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogCardsContainer from "../components/BlogCardsContainer"

const TagPage = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges: posts, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={tag} />

      <section>
        <Container className="mt-5">
          <Row>
            <Col>
              <Hero title={`The Geeky Man | ${tagHeader}`} />
            </Col>
          </Row>
        </Container>
      </section>

      <article>
        <Container>
          <BlogCardsContainer posts={posts} />
        </Container>
      </article>
    </Layout>
  )
}

export default TagPage

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
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
            date
            tags
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
