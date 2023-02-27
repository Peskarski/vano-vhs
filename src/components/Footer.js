import * as React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import youtube from "../img/social/YT.svg";
import facebook from "../img/social/TW.svg";
import twitter from "../img/social/TW_.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" style={{ backgroundColor: '#fccd04', padding: 0, height: '80px' }}>
        <div className="content has-text-centered">
          <div className="container">
            <div style={{ maxWidth: "100vw", display: 'flex', flexDirection: 'row' }} className="columns">
              <div style={{ margin: '44px 36px 0 8px' }}>
                <a href="https://www.patreon.com/bePatron?u=79936642" data-patreon-widget-type="become-patron-button">Become a Patron!</a>
              </div>
              <div className="column is-4 social">
                <a
                  title="youtube"
                  href="https://www.youtube.com/@vanovhs/videos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: "1.7em", height: "1.7em" }}
                  />
                </a>
                <a title="facebook" href="https://www.facebook.com/vanovhs" target="_blank" rel="noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1.7em", height: "1.7em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/VanoVhs" target="_blank" rel="noreferrer">
                  <img
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1.7em", height: "1.7em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
