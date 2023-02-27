import * as React from "react";
import { Helmet } from "react-helmet";
import { createUseStyles } from 'react-jss';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import '@fontsource/fira-sans';
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const useStyles = createUseStyles(() => ({
  layout: {
    borderBottom: '1px solid white',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',

    '& .navbar-item': {
      fontSize: '18px',
      color: 'black',
    },

    '& .social': {
      marginTop: '30px',
      whiteSpace: 'nowrap',
      '@media (min-width: 768px)': {
        marginTop: '30px',
      },

      '@media (max-width: 460px)': {
        marginLeft: '-36px',
      },

      '@media (max-width: 420px)': {
        marginTop: '-4px',
      },

      '& a': {
        padding: '1.1em 0.4em 0 0.4em',
      }
    },

    '& footer': {
      display: 'flex',
      justifyContent: 'center',

      '@media (max-width: 420px)': {
        height: '120px !important',

        '& .columns': {
          flexDirection: 'column !important',
        },
      },
    },

    '& .video-container': {
      '@media (max-width: 767px)': {
        width: '100% !important',

        '& iframe': {
          width: '100% !important',
        }
      },
    }
  },
  children: {
    marginBottom: '100px',
    minHeight: '78vh',

    '@media (max-width: 767px)': {
      '& .gatsby-image-wrapper img': {
        height: 'unset !important'
      }
    },
  }
}));

const TemplateWrapper = ({ children, title, description }) => {
  const { title: metaTitle, description: metaDescription } = useSiteMetadata();
  const cx = useStyles();

  return (
    <div className={cx.layout}>
      <Helmet>
        <html lang="ru" />
        <title>{title || metaTitle}</title>
        <meta name="description" content={description || metaDescription} />
        <meta name="verify-admitad" content="63a74fe524" />
        <meta name="propeller" content="3707f7a5d992c3f8f098981fa8d530d3"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/android-chrome-512x512.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/android-chrome-512x512.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/android-chrome-512x512.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/android-chrome-512x512.png`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title || metaTitle} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/android-chrome-512x512.png`}
        />
        <meta name="monetag" content="0d42dc8b12ee5b2d494d861f12426e55"></meta>
        <script src="https://uwoaptee.com/pfe/current/tag.min.js?z=5752884" data-cfasync="false" async></script>
      </Helmet>
      <Navbar />
      <div className={cx.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
