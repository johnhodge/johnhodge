import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import styles from "./blog-post.module.scss";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        file {
          details {
            image {
              width
              height
            }
          }
          url
        }
        title
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const BlogPost = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const src = node.data.target.fields.file["en-US"].url;
        const alt = node.data.target.fields.title["en-US"];
        const imgClass = "inline-post-img";
        return <img class={imgClass} src={src} alt={alt} />;
      },
    },
  };

  const imageData = data.contentfulBlogPost.heroImage.file
  const metaImage = {
    src: `https:${imageData.url}`,
    width: imageData.details.image.width,
    height: imageData.details.image.height,
  }

  return (
    <Layout>
      <SEO 
        title={data.contentfulBlogPost.title} 
        metaImage={metaImage}
        metaAuthor={data.contentfulBlogPost.author.name}

        //TODO: Add description and keywords to Contentful
        // description={data.contentfulBlogPost.description}
        // metaKeywords={data.contentfulBlogPost.keywords}
      />
      

      <div className={styles.blogFeaturedImgContainer}>
        <img
          className={styles.blogFeaturedImg}
          src={`https:${data.contentfulBlogPost.heroImage.file.url}`}
          alt={data.contentfulBlogPost.heroImage.title}
          title={data.contentfulBlogPost.heroImage.title}
        ></img>
      </div>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishDate}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
          options,
        }}
      />
    </Layout>
  );
};
export default BlogPost;
