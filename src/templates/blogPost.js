import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoPlayer from '../components/video-player';
import BlogRoll from '../components/blog-roll';

import styles from './blog-post.module.scss';

export const query = graphql`
  query ($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author {
        name
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      category_ref {
        name
      }
      description {
        description
      }
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
      id
      keywords
      footnote {
        footnoteText {
          childMarkdownRemark {
            html
          }
        }
        resourceName
      }
      formattedPublishDate: publishDate(formatString: "MMMM Do, YYYY, h:mm a")
      isoPublishDate: publishDate
      slug
      title
      updatedAt
      videoSrcURL
      videoTitle
      videoAutoplay
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
    article_section: data.contentfulBlogPost.category_ref.name,
    // article_tag: data.contentfulBlogPost.tags,
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

      <div className={styles.blogFeaturedImgContainer}>
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
      {data.contentfulBlogPost.category_ref.name === 'Video' ? (
        <VideoPlayer
          videoSrcURL={data.contentfulBlogPost.videoSrcURL}
          videoTitle={data.contentfulBlogPost.videoTitle}
          videoAutoplay={data.contentfulBlogPost.videoAutoplay}
        />
      ) : (
        ''
      )}
      <div
        itemProp='text'
        itemScope
        itemType='https://schema.org/CreativeWork'
        dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
          options,
        }}
      />

      {data.contentfulBlogPost.footnote ? (
        <div>
          <h3>Resources</h3>
          <ol>
            {data.contentfulBlogPost.footnote.map((footnote, i) => {
              return (
                <li
                  key={i}
                  id={i + 1}
                  dangerouslySetInnerHTML={{
                    __html: footnote.footnoteText.childMarkdownRemark.html,
                  }}></li>
              );
            })}
          </ol>
        </div>
      ) : (
        ''
      )}

      <BlogRoll
        category={data.contentfulBlogPost.category_ref.name}
        slug={data.contentfulBlogPost.slug}
      />
    </Layout>
  );
};
export default BlogPost;
