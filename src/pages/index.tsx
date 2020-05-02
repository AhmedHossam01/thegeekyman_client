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
      placeholderImage: file(relativePath: { eq: "hero.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const heroImage = data.placeholderImage.childImageSharp.fluid.src

  return (
    <Layout>
      <SEO title="Home" />

      <section>
        <Container className="mt-5">
          <Row>
            <Col>
              <Hero
                image={heroImage}
                title="The Geeky Man"
                paragraph="i need to make this capitalize. or anywat adjust the typography of the whole website"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <article>
        <Container>
          <Row className="mt-5">
            <Col lg={4} md={6}>
              <BlogCard
                title="test"
                content="testaroo"
                image="hero.jpeg"
                link="/"
              />
            </Col>
            <Col lg={4} md={6}>
              <BlogCard
                title="test"
                content="testaroo"
                image="hero.jpeg"
                link="/"
              />
            </Col>
            <Col lg={4} md={6}>
              <BlogCard
                title="test"
                content="testaroo"
                image="hero.jpeg"
                link="/"
              />
            </Col>
            <Col lg={4} md={6}>
              <BlogCard
                title="test"
                content="testaroo"
                image="hero.jpeg"
                link="/"
              />
            </Col>
          </Row>
        </Container>
      </article>
    </Layout>
  )
}

export default IndexPage
