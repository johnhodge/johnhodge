import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";
import styles from "./blog.module.scss";

const Index = () => {
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
      <Head title="Home" />
      <h1>Hello!</h1>
      <p>I'm John, I work in solutions and I play around with FM synthesis.</p>
      <h2>Recent posts.</h2>
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

export default Index;
