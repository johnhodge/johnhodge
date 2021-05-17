import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styles from './blog-roll.module.scss';

const BlogRoll = ({ slug, category }) => (
  <StaticQuery
    query={graphql`
      query blogRoll($category: String, $slug: String) {
        allContentfulBlogPost(
          sort: { fields: publishDate, order: DESC }
          filter: { category: { eq: $category }, slug: { ne: $slug } }
        ) {
          edges {
            node {
              category
              slug
              title
              publishDate(formatString: "MMMM Do, YYYY")
              heroImage {
                description
                file {
                  url
                }
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className={styles.blogRoll}>
        <div className={styles.blogRollPosts}>
          {data.allContentfulBlogPost.edges.map((edge, i) => {
            return !category ||
              (category === edge.node.category && slug !== edge.node.slug) ? (
              <Link
                className={styles.blogRollPostsLink}
                to={`/blog/${edge.node.slug}`}
                key={i}>
                <div className={styles.blogRollPostsLinkContainer}>
                  <img
                    src={edge.node.heroImage.file.url}
                    alt={edge.node.heroImage.description}
                    title={edge.node.heroImage.title}
                  />
                  <h2 className={styles.blogRollPostsLinkContainerHeader}>
                    {edge.node.title}
                  </h2>
                </div>
              </Link>
            ) : (
              ''
            );
          })}
        </div>
      </div>
    )}></StaticQuery>
);

export default BlogRoll;
