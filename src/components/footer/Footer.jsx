import React from "react";

const Footer = () => {
  return (
    <footer classname="footer">
      <div classname="footer__container container">
        <h1 classname="footer__title">Nathali</h1>

        <ul classname="footer__list">
          <li>
            <a href="#about" classname="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" classname="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" classname="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div classname="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank" rel="noopener noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank" rel="noopener noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.twitter.com/"
            className="footer__social-link"
            target="_blank" rel="noopener noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span classname="footer__copy">&#169;TechNathSolutions. All rigths reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;