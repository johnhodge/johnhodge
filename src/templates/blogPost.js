import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoPlayer from '../components/video-player';

import styles from './blog-post.module.scss';

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      category
      tags
      videoSrcURL
      videoTitle
      author {
        name
      }
      formattedPublishDate: publishDate(formatString: "MMMM Do, YYYY, h:mm a")
      isoPublishDate: publishDate
      updatedAt
      heroImage {
        description
        file {
          contentType
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
      description {
        description
      }
      keywords
    }
  }
`;

const BlogPost = ({ data }) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const src = node.data.target.fields.file['en-US'].url;
        const alt = node.data.target.fields.title['en-US'];
        const imgClass = 'inline-post-img';
        return <img class={imgClass} src={src} alt={alt} />;
      },
    },
  };

  const imageData = data.contentfulBlogPost.heroImage;
  const metaImage = {
    src: `https:${imageData.file.url}`,
    width: imageData.file.details.image.width,
    height: imageData.file.details.image.height,
    altDescription: imageData.description,
    contentType: imageData.file.contentType,
  };
  const metaArticle = {
    article_published_time: data.contentfulBlogPost.isoPublishDate,
    article_modified_time: data.contentfulBlogPost.updatedAt,
    article_author: data.contentfulBlogPost.author.name,
    article_section: data.contentfulBlogPost.category,
    article_tag: data.contentfulBlogPost.tags,
  };

  return (
    <Layout>
      <SEO
        metaTitle={data.contentfulBlogPost.title}
        metaImage={metaImage}
        metaArticle={metaArticle}
        metaAuthor={data.contentfulBlogPost.author.name}
        description={data.contentfulBlogPost.description.description}
        metaKeywords={data.contentfulBlogPost.keywords}
        pathname={`/blog/${data.contentfulBlogPost.slug}`}
      />

      <div
        itemProp='text'
        itemScope
        itemType='https://schema.org/CreativeWork'
        className={styles.blogFeaturedImgContainer}>
        <img
          className={styles.blogFeaturedImg}
          src={`https:${data.contentfulBlogPost.heroImage.file.url}`}
          alt={data.contentfulBlogPost.heroImage.title}
          title={data.contentfulBlogPost.heroImage.title}></img>
      </div>
      <h1>
        <span
          itemProp='headline'
          itemScope
          itemType='https://schema.org/CreativeWork'>
          {data.contentfulBlogPost.title}
        </span>
      </h1>
      <p>
        Published by{' '}
        <span itemProp='author' itemScope itemType='https://schema.org/Person'>
          {data.contentfulBlogPost.author.name}
        </span>{' '}
        on{' '}
        <span
          itemProp='datePublished'
          itemScope
          itemType='https://schema.org/CreativeWork'>
          {data.contentfulBlogPost.formattedPublishDate}
        </span>
      </p>
      {data.contentfulBlogPost.category === 'General' ? (
        <VideoPlayer
          videoSrcURL={data.contentfulBlogPost.videoSrcURL}
          videoTitle={data.contentfulBlogPost.videoTitle}
        />
      ) : (
        ''
      )}
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
