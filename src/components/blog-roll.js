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
          return category === undefined ||
            (category === edge.node.category && slug !== edge.node.slug) ? (
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
              {console.log(edge.node.heroImage.file.url)}
            </Link>
          ) : (
            ''
          );
        })}
      </ol>
    )}></StaticQuery>
);

export default BlogRoll;
