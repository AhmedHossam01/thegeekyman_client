exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(
    `./src/templates/blogPostTemplate.tsx`
  )

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
}
