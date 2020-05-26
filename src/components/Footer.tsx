import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import FooterStyles from "../styles/modules/footer.module.scss"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const result = useStaticQuery(graphql`
    query otherTags {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          # totalCount
        }
      }
    }
  `)

  const tags = result.allMarkdownRemark.group

  return (
    <footer className={FooterStyles.footer}>
      <Container>
        <Row>
          <Col md={6} lg={3}>
            <div className={FooterStyles.footerBlock}>
              <h4 className={FooterStyles.footerHeading}>About</h4>
              <p className={FooterStyles.footerParagraph}>
                The Geeky Man is a personal blog website by Ahmed Hossam. It's
                made to share author's thoughts as a geek. Main topics of
                interests in this website are: Full-Stack JavaScript, Web
                Development, Cross-Platform Development and self-help tips for
                software developers!
              </p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className={FooterStyles.footerBlock}>
              <h4 className={FooterStyles.footerHeading}>Tags</h4>
              <div>
                {tags.map(tag => (
                  <Link to="/" className={FooterStyles.footerLink}>
                    {tag.fieldValue}
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className={FooterStyles.footerBlock}>
              <h4 className={FooterStyles.footerHeading}>Pages</h4>
              <div>
                <Link to="/" className={FooterStyles.footerLink}>
                  Home
                </Link>
                <a
                  href="https://www.linkedin.com/in/ahmedhossam01/"
                  target="_blank"
                  className={FooterStyles.footerLink}
                >
                  About
                </a>
                <Link to="/404" className={FooterStyles.footerLink}>
                  404
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className={FooterStyles.footerBlock}>
              <h4 className={FooterStyles.footerHeading}>Info</h4>
              <p className="text-white">
                If you need something else contact me 😀
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
