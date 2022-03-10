import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import JsonLd from "../components/seo/json-ld";
import Seo from "../components/seo/seo";
import Footnotes from "../components/footnotes/footnotes";
import * as styles from "./blog-post.module.scss"

const BlogPost = ({ data, location }) => {
  const post = data.contentfulBlogPost;
  const cleanHTML = post.body.childMarkdownRemark.html;

  const datestampOptions = {
    // Leaving this code here in case we want to change the timestamp formatting.
    // weekday: 'short',
    // year: 'numeric',
    // month: 'short',
    // day: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    timeZone: "America/New_York",
    timeZoneName: "short",
  };
  const createdAtTz = new Date(post.createdAt).toLocaleString(
    "en-US",
    datestampOptions
  );
  const updatedAtTz = new Date(post.updatedAt).toLocaleString(
    "en-US",
    datestampOptions
  );

  const imageData = post.seoHeroImage;
  const metaImage = {
    url: imageData.file.url,
    width: imageData.file.details.image.width,
    height: imageData.file.details.image.height,
    description: imageData.description,
    contentType: imageData.file.contentType,
  };

  const authorName = post.author.firstName;

  const metaArticle = {
    article_published_time: post.createdAt,
    article_modified_time: post.updatedAt,
    article_author: authorName,
    article_section: post.category.name,
  };

  return (
    <Layout
      location={location}
      featuredImage={post.heroImage.file.url}
      pageTitle={post.title}
      createdAt={createdAtTz}
      post={post}
      authorName={authorName}
    >
      <Seo
        location={location}
        baseUrl={`${location.origin}${location.pathname}`}
        metaTitle={post.title}
        metaImage={metaImage}
        metaArticle={metaArticle}
        metaAuthor={authorName}
        description={post.description.description}
        metaKeywords={post.keywords ? post.keywords.join(", ") : null}
        pathname={`/insights/${post.slug}`}
        metaLang={post.node_locale}
      />
      <JsonLd
        schemaType="article"
        articleBody={post.body.body}
        articleSection={post.category.name}
        wordCount={post.body.childMarkdownRemark.wordCount.words}
        abstract={post.description}
        image={`https:${post.heroImage.file.url}`}
        author={authorName}
        givenName={post.author.firstName}
        dateCreated={post.createdAt}
        dateModified={post.updatedAt}
        headline={post.title}
        inLanguage={post.node_locale}
        keywords={post.keywords ? post.keywords.join(", ") : null}
        name={data.allContentfulCompany.edges[0].node.name}
        url={location.origin}
        legalName={`${data.allContentfulCompany.edges[0].node.name}, LLC`}
        logoName={data.allContentfulCompany.edges[0].node.logo.title}
        caption={data.allContentfulCompany.edges[0].node.logo.title}
        contentSize={`${
          data.allContentfulCompany.edges[0].node.logo.file.details.size / 1000
        }kb`}
        contentUrl={`https:${data.allContentfulCompany.edges[0].node.logo.file.url}`}
        encodingFormat={
          data.allContentfulCompany.edges[0].node.logo.file.contentType
        }
        height={
          data.allContentfulCompany.edges[0].node.logo.file.details.image.height
        }
        width={
          data.allContentfulCompany.edges[0].node.logo.file.details.image.width
        }
      />
      <section>
        {updatedAtTz === createdAtTz ? (
          ""
        ) : (
          <p className={styles.updated}>
            <em>Updated: {updatedAtTz}</em>
            <hr />
          </p>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
          itemProp="articleBody"
        />
        {post.footnotes ? <Footnotes data={post.footnotes} /> : ""}
      </section>
    </Layout>
  );
};
export const query = graphql`
  query Blog($slug: String = "") {
    contentfulBlogPost(slug: { eq: $slug }) {
      ...postEntryData
    }
    allContentfulCompany(
      filter: { id: { eq: "b609af1b-49b4-5251-94fb-32a3da3ebf11" } }
    ) {
      edges {
        ...contentfulSiteData
      }
    }
  }
`;
export default BlogPost;
