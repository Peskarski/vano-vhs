import * as React from "react";
import { createUseStyles } from 'react-jss';
import youtube from "../img/social/YT.svg";
import facebook from "../img/social/TW.svg";
import twitter from "../img/social/TW_.svg";

const useStyles = createUseStyles(() => ({
  patreon: {
    '& button': {
      backgroundColor: 'black',
      color: 'orange',
      height: '36px',
      border: 'none',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  },
  social: {
    margin: '28px auto',
    '@media (max-width: 420px)': {
      margin: '0 -28px -12px 0',
      paddingLeft: '17px !important',
      paddingTop: '20px !important'
    },
  }
}));

const Footer = () => {
  const cx = useStyles();
    return (
      <footer className="footer" style={{ backgroundColor: '#fccd04', padding: 0, height: '80px' }}>
        <div className="content has-text-centered">
          <div className="container">
            <div style={{ maxWidth: "100vw", display: 'flex', flexDirection: 'row' }} className="columns">
              <div style={{ margin: '36px auto 0' }}>
                <a
                  href="https://www.patreon.com/bePatron?u=79936642"
                  className={cx.patreon}
                >
                  <button>Become a Patron!</button>
                </a>
              </div>
              <div className={`column is-4 social ${cx.social}`}>
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

export default Footer;
