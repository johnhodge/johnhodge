// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-templates-blog-post-jsx": () => import("./../../../src/templates/blog-post.jsx" /* webpackChunkName: "component---src-templates-blog-post-jsx" */),
  "component---src-templates-posts-jsx": () => import("./../../../src/templates/posts.jsx" /* webpackChunkName: "component---src-templates-posts-jsx" */)
}

