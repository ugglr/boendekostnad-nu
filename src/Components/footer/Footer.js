import React from "react";

import { Container, Row, Col } from "react-bootstrap";

//Import component styles
import "./footer.css";

//Simple Line Icons Import
import "../../vendor/simple-line-icons/css/simple-line-icons.css";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <Container>
        <Row>
          <Col>
            {/* INSTAGRAM SOCIAL ICON */}
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://www.instagram.com/boendekostnad.nu/"
                // eslint-disable-next-line
                target="_blank"
                rel="noopener"
              >
                <i className="icon-social-instagram" />
              </a>
            </li>
          </Col>
          {/* TWITTER SOCIAL ICON */}
          <Col>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://twitter.com/boendekostnad"
                // eslint-disable-next-line
                target="_blank"
                rel="noopener"
              >
                <i className="icon-social-twitter" />
              </a>
            </li>
          </Col>
          {/* FACEBOOK SOCIAL ICON */}
          <Col>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://www.facebook.com/boendekostnad.nu/"
                // eslint-disable-next-line
                target="_blank"
                rel="noopener"
              >
                <i className="icon-social-facebook" />
              </a>
            </li>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <p className="text-muted small mb-0">
              Copyright &copy; Boendekostnad.nu 2018
            </p>
            <p className="text-muted small mb-0">
              Disclaimer: Vi tar inget ansvar om hur din kalkyl används och vi
              förbehåller oss rätten att vår kalyleringsalgorithm inte totalt
              återspeglar verkligheten. Detta är ett verktyg för att estimera
              boendekostnader och ska bestraktas som ett i raden av hjälpmedel
              när du köper en ny bostad. Vi värnar om den personliga
              integriteten och vi sparar därmed ingen information.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
