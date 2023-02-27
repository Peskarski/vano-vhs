/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Tile from './Tile';

const GodfatherRollTemplate = (props) => {
  const { data } = props;
  const { edges: lists } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline" >
      {lists &&
        lists.map(({ node: post }) => (
          <Tile post={post} key={post.title} />
        ))}
    </div >
  );
};

GodfatherRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};


export default function GodfatherRoll() {
  return (
    <StaticQuery
      query={graphql`
        query GodftherRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "godfather-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <GodfatherRollTemplate data={data} count={count} />}
    />
  );
}
