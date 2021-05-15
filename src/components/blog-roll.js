import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styles from './blog-roll.module.scss';

const BlogRoll = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
          edges {
            node {
              slug
              title
              publishDate(formatString: "MMMM Do, YYYY")
              heroImage {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <ol className={styles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, i) => {
          return (
            <Link className={styles.blogLink} to={`/blog/${edge.node.slug}`}>
              <li
                className={styles.post}
                key={i}
                style={{
                  backgroundImage: `url(https:${edge.node.heroImage.file.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: '50%',
                  padding: '1.5rem',
                }}>
                <h2 className={styles.blogHeader}>{edge.node.title}</h2>
              </li>
            </Link>
          );
        })}
      </ol>
    )}></StaticQuery>
);

export default BlogRoll;
