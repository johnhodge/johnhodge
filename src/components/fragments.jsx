import { graphql } from "gatsby";

export const postListingData = graphql`
  fragment postListingData on ContentfulBlogPostEdge {
    node {
      title
      slug
      description
      category {
        name
        id
      }
      createdAt
      updatedAt
      heroImage {
        title
        description
        file {
          url
        }
      }
      author {
        name
        id
      }
    }
  }
`;

export const postEntryData = graphql`
  fragment postEntryData on ContentfulBlogPost {
    title
    slug
    description
    category {
      name
      id
    }
    createdAt
    updatedAt
    node_locale
    seoHeroImage {
      title
      description
      file {
        url
        contentType
        details {
          image {
            height
            width
          }
        }
      }
    }
    heroImage {
      title
      description
      file {
        url
        contentType
        details {
          image {
            height
            width
          }
        }
      }
    }
    author {
      name
      id
    }
    body {
      childMarkdownRemark {
        html
      }
    }
  }
`;

export const gatsbySiteData = graphql`
  fragment gatsbySiteData on Site {
    siteMetadata {
      author
      title
      description
      siteUrl
      keywords
      social {
        twitter
        twitterId
        instagram
        github
      }
      metaLinks {
        name
        link
      }
    }
  }
`;

export const contentfulSiteData = graphql`
  fragment contentfulSiteData on ContentfulCompanyEdge {
    node {
      name
      logo {
        title
        description
        file {
          url
          details {
            image {
              height
              width
            }
          }
        }
      }
      seoLogo {
        title
        description
        file {
          url
          contentType
          details {
            image {
              height
              width
            }
          }
        }
      }
    }
  }
`;

export const solutionsData = graphql`
  fragment SolutionsData on ContentfulCompanyEdge {
    node {
      solutions {
        solutionsName
        solutionsDescription
        solutionsAlternateDescription
        solutionsBenefits
        solutionsGraphic {
          title
          description
          file {
            url
            details {
              image {
                height
                width
              }
            }
          }
        }
      }
    }
  }
`;

export const testimonialsData = graphql`
  fragment TestimonialsData on ContentfulCompanyEdge {
    node {
      testimonial {
        id
        firstName
        lastName
        jobTitle
        companyName
        headshot {
          title
          description
          gatsbyImageData(aspectRatio: 1, placeholder: BLURRED)
        }
        testimonial {
          childrenMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
