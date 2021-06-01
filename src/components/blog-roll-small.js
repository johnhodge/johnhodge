import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styles from './blog-roll.module.scss';

const BlogRollSmall = ({ slug, category, header }) => (
  <StaticQuery
    query={graphql`
      query blogRollSmall {
        allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
          edges {
            node {
              category_ref {
                name
              }
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
      <div id={styles.blogRollSmall}>
        {data.allContentfulBlogPost.edges.filter(
          (edge) =>
            !category ||
            (category === edge.node.category_ref.name &&
              slug !== edge.node.slug)
        ).length > 0 ? (
          <div className={styles.blogRoll}>
            {header ? <h3>{header}</h3> : ''}
            <div className={styles.blogRollPosts}>
              {data.allContentfulBlogPost.edges
                .slice(0, 3)
                .filter(
                  (edge) =>
                    !category ||
                    (category === edge.node.category_ref.name &&
                      slug !== edge.node.slug)
                )
                .map((edge, i) => {
                  console.log(edge);
                  return (
                    <Link
                      className={styles.blogRollPostsLink}
                      to={`/blog/${edge.node.slug}`}
                      title={`Link to the article "${edge.node.title}"`}
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
                  );
                })}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    )}></StaticQuery>
);

export default BlogRollSmall;
