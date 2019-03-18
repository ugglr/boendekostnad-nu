import React from "react";

//Simple Line Icons Import
import "../../vendor/simple-line-icons/css/simple-line-icons.css";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <ul className="list-inline mb-5">
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
          {/* TWITTER SOCIAL ICON */}
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
          {/* FACEBOOK SOCIAL ICON */}
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
        </ul>
        <p className="text-muted small mb-0">
          Copyright &copy; Boendekostnad.nu 2018
        </p>
        <p className="text-muted small mb-0">
          Disclaimer: Vi tar inget ansvar om hur din kalkyl används och vi
          förbehåller oss rätten att vår kalyleringsalgorithm inte totalt
          återspeglar verkligheten. Detta är ett verktyg för att estimera
          boendekostnader och ska bestraktas som ett i raden av hjälpmedel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
