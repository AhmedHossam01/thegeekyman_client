import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Hero from "../components/Hero"
import BlogCard from "../components/BlogCard"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

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
