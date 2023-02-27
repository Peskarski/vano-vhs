import * as React from "react";
import { createUseStyles } from 'react-jss';
import Layout from "../../components/Layout";

const useStyles = createUseStyles(() => ({
  img: {
    width: '300px',
    height: '375px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',

    '@media (max-width: 767px)': {
      flexDirection: 'column-reverse',
    },
  },
  text: {
    margin: '40px 0 0 40px',
    width: '700px',
    '@media (max-width: 767px)': {
      width: '100%',
      margin: '0 0 20px 0',
    },
  },
  subscribe: {
    width: '360px',
  }
}));

export default function ListIndexPage() {
  const cx = useStyles();
  return (
    <Layout
      title="About me"
      description="About Vano VHS"
    >
      <section className="section">
        <div className="container">
          <div className="content">
            <div className={cx.container}>
              <img src="img/about.png" className={cx.img} />
              <div className={cx.text}>
                <h2>Who is Vano VHS?</h2>
                <p>
                Hello my Goodfellas! My name is Ivan Piatouski, better known as Vano VHS. I take your favorite movies and breakdown them on detail level, especially the crime masterpieces. If you like to analyze films, scripts and movie characters, enjoy!
                </p>
                <a
                  href="https://www.youtube.com/@vanovhs/videos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="img/SUBSCRIBE.png" className={cx.subscribe} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
