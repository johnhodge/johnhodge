import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import JsonLd from '../components/json-ld';
import Seo from '../components/seo';

const BlogPost = ({ data, location }) => {
  const post = data.contentfulBlogPost;
  var cleanHTML = post.body.childMarkdownRemark.html;

  let datestampOptions = {
    // Leaving this code here in case we want to change the timestamp formatting.
    // weekday: 'short',
    // year: 'numeric',
    // month: 'short',
    // day: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    timeZone: 'America/New_York',
    timeZoneName: 'short',
  };
  const createdAtTz = new Date(
    data.contentfulBlogPost.createdAt
  ).toLocaleString('en-US', datestampOptions);
  const updatedAtTz = new Date(
    data.contentfulBlogPost.updatedAt
  ).toLocaleString('en-US', datestampOptions);

  const imageData = data.contentfulBlogPost.heroImage;
  const metaImage = {
    src: `https:${imageData.file.url}`,
    width: imageData.file.details.image.width,
    height: imageData.file.details.image.height,
    altDescription: imageData.description,
    contentType: imageData.file.contentType,
  };

  const metaArticle = {
    article_published_time: data.contentfulBlogPost.createdAt,
    article_modified_time: data.contentfulBlogPost.updatedAt,
    article_author: data.contentfulBlogPost.author.name,
    article_section: data.contentfulBlogPost.category.name,
  };

  return (
    <Layout
      location={location}
      featuredImage={post.heroImage.file.url}
      pageTitle={post.title}
      createdAt={createdAtTz}
      post={post}>
      <Seo
        metaTitle={data.contentfulBlogPost.title}
        metaImage={metaImage}
        metaArticle={metaArticle}
        metaAuthor={data.contentfulBlogPost.author.name}
        description={data.contentfulBlogPost.description.description}
        metaKeywords={data.contentfulBlogPost.keywords}
        pathname={`/insights/${data.contentfulBlogPost.slug}`}
      />
      <JsonLd>
        {{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: location.origin,
          name: 'BrightShell, LLC',
        }}
      </JsonLd>
      <section>
        {updatedAtTz === createdAtTz ? (
          ''
        ) : (
          <p>
            <em>Updated: {updatedAtTz}</em>
          </p>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
          itemProp='articleBody'
        />
      </section>
    </Layout>
  );
};
export const query = graphql`
  query Blog($slug: String = "") {
    contentfulBlogPost(slug: { eq: $slug }) {
      ...postEntryData
    }
  }
`;
export default BlogPost;
