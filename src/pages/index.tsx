import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import BlogCardsContainer from "../components/BlogCardsContainer"
import Pagination from "../components/Pagination"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 6
      ) {
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
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />

      <section>
        <Container className="mt-5">
          <Row>
            <Col>
              <Hero title="The Geeky Man | Home" />
            </Col>
          </Row>
        </Container>
      </section>

      <article>
        <Container>
          <BlogCardsContainer posts={posts} />
        </Container>
      </article>

      <Container>
        <div className="mt-3 mb-5">
          <Pagination
            currentPage={1}
            previousPage={null}
            nextPage={2}
            isLastPage={false}
          />
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
