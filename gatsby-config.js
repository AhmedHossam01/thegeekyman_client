module.exports = {
  siteMetadata: {
    title: `The Geeky Man`,
    description: `A blog website from geeks to geeks.`,
    author: `Ahmed Hossam`,
    siteUrl: "https://www.thegeekyman.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogposts`,
        path: `${__dirname}/src/blogposts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Geeky Man`,
        short_name: `TheGeekyMan`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
              wrapperStyle:
                "box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.2); margin: 1rem 0;",
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              lineNumbers: true,
            },
          },
          `gatsby-remark-reading-time`,
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-166904696-1",
        head: false,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
  ],
}
