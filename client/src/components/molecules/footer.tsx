import * as React from "react";

const Footer = () => {

return (
  <footer className="page-footer blue-grey darken-2">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">MVF Take Home Test</h5>
          <p className="grey-text text-lighten-4">
            Thank you for this task. I had fun!
          </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <ul>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://github.com/RitaGlushkova/github-user-languages"
              >
                GitHub Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">© 2022 Created by Margarita Glushkova</div>
    </div>
  </footer>
);
};

export default Footer;