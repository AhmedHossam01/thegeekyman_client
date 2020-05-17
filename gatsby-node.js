const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(
    `./src/templates/blogPostTemplate.tsx`
  )
  const tagTemplate = path.resolve("./src/templates/tagPageTemplate.tsx")

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }

      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }) => {
    const slug = node.frontmatter.slug

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug,
      },
    })
  })

  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
