import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import FooterStyles from "../styles/modules/footer.module.scss"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className={FooterStyles.footer}>
      <Container>
        <Row>
          <Col md={6} lg={3}>
            <div className={FooterStyles.footerBlock}>
              <h4 className={FooterStyles.footerHeading}>About</h4>
              <p className={FooterStyles.footerParagraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                quas modi maxime amet deserunt! Tempore itaque natus harum
                excepturi necessitatibus!
              </p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className={FooterStyles.footerBlock}>
              <h4 className={FooterStyles.footerHeading}>Tags</h4>
              <div>
                <Link to="/" className={FooterStyles.footerLink}>
                  Category 1
                </Link>
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
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className={FooterStyles.footerBlock}>
              <h4 className={FooterStyles.footerHeading}>Info</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
