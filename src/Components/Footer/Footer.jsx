import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-line d-flex">
          <div className="d-flex">
            <AiOutlineGithub className="github" />
            <p className="footer-text">© 2022 GitHub, Inc.</p>
          </div>
          <ul className="d-flex footer-lists justify-content-between">
            <li className="footer-list">
              <a className="footer-item" href="#">
                Terms
              </a>
            </li>
            <li className="footer-list">
              <a className="footer-item" href="#">
                Privacy
              </a>
            </li>
            <li className="footer-list">
              <a className="footer-item" href="#">
                Security
              </a>
            </li>
            <li className="footer-list">
              <a className="footer-item" href="#">
                Status
              </a>
            </li>
            <li className="footer-list">
              <a className="footer-item" href="#">
                Docs
              </a>
            </li>
            <li className="footer-list">
              <a className="footer-item" href="#">
                Contact GitHub
              </a>
            </li>
            <li className="footer-list">
              <a className="footer-item" href="#">
                Pricing
              </a>
            </li>
            <li className="footer-list">
              <a className="footer-item" href="#">
                API
              </a>
            </li>
            <li className="footer-list">
              <a className="footer-item" href="#">
                Training
              </a>
            </li>
            <li className="footer-list">
              <a className="footer-item" href="#">
                Blog
              </a>
            </li>
            <li className="footer-list">
              <a className="footer-item" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
