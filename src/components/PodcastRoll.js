import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import Content, { HTMLContent } from '../components/Content';

class PodcastRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className='podcastroll'>
        {posts &&
          posts.map(({ node: post }) => (
            <div className='podcast-post' key={post.id}>
              <article className={`podcast-post__inner`}>
                <HTMLContent
                  content={post.excerpt}
                  className='podcast-post__excerpt'
                />
                <Link className='btn' to={post.fields.slug}>
                  Show Notes →
                </Link>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

PodcastRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PodcastRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "podcast-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 120, format: HTML)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PodcastRoll data={data} count={count} />}
  />
);
