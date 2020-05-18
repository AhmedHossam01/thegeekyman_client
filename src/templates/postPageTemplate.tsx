import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BlogCardsContainer from "../components/BlogCardsContainer"
import Container from "react-bootstrap/Container"
import Pagination from "../components/Pagination"

const postPageTemplate = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numberOfPages } = pageContext

  return (
    <Layout>
      <Container>
        <BlogCardsContainer posts={posts} />
      </Container>
      <Container>
        <div className="mt-3 mb-5">
          <Pagination
            currentPage={currentPage}
            previousPage={currentPage - 1}
            nextPage={currentPage + 1}
            isLastPage={currentPage === numberOfPages}
          />
        </div>
      </Container>
    </Layout>
  )
}

export default postPageTemplate

export const postsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
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
