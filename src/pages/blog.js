import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "./blog.module.scss";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `);
  return (
    <Layout>
      <SEO
        metaTitle="Blog"
        description="This blog is a space for me to log what I learn in my professional travels as a tech-wise client-facing solutions engineer."
        pathname="/blog"
      />
      <h1>Blog.</h1>
      <ol className={styles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, i) => {
          return (
            <Link className={styles.blogLink} to={`/blog/${edge.node.slug}`}>
              <li
                className={styles.post}
                key={i}
                style={{
                  backgroundImage: `url(https:${edge.node.heroImage.file.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50%",
                  padding: "1.5rem",
                }}
              >
                <h2 className={styles.blogHeader}>{edge.node.title}</h2>
              </li>
            </Link>
          );
        })}
      </ol>
    </Layout>
  );
};

export default Blog;
