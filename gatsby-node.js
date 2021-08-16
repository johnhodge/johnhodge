const path = require('path');
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      query post {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
              category {
                id
                name
              }
              metadata {
                tags {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for blog posts
  const blogPostTemplate = path.resolve(`src/templates/blog-post.jsx`);
  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    const blogSlug = node.slug;
    createPage({
      path: `insights/${blogSlug}`,
      component: blogPostTemplate,
      context: {
        slug: blogSlug,
        blogPost: true,
      },
    });
  });

  // Create pages for blog listing
  const blogTemplate = path.resolve(`src/templates/posts.jsx`);
  createPage({
    path: `insights`,
    component: blogTemplate,
    context: {
      slug: `insights`,
      id: null,
      name: `Insights`,
      type: `blog`,
      blog: true,
    },
  });

  // Create pages for category listing
  const categoryTemplate = path.resolve(`src/templates/posts.jsx`);
  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    const categorySlug = node.category.name.toLowerCase().replace(/\W/gm, `-`);
    createPage({
      path: `category/${categorySlug}`,
      component: categoryTemplate,
      context: {
        slug: categorySlug,
        id: node.category.id,
        name: node.category.name,
        type: `category`,
        category: true,
      },
    });
  });

  // Create pages for tag listing
  const tagTemplate = path.resolve(`src/templates/posts.jsx`);
  result.data.allContentfulBlogPost.edges.map((node) => {
    node.node.metadata.tags.map((item) => {
      const tagSlug = item.name.toLowerCase().replace(/\W/gm, `-`);
      createPage({
        path: `tag/${tagSlug}`,
        component: tagTemplate,
        context: {
          slug: tagSlug,
          id: item.id,
          name: item.name,
          type: `tag`,
          tag: true,
        },
      });
    });
  });
};
