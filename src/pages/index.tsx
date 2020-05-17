import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Hero from "../components/Hero"
import BlogCard from "../components/BlogCard"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
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

export default IndexPage
