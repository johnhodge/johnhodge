module.exports = function (migration) {
  // Create footnote field in the blog post content type.
  const blogPost = migration.editContentType('blogPost');
  // blogPost.deleteField('footnote');

  // Create footnote field in the blog post content type.
  blogPost
    .createField('footnote')
    .name('Footnote')
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['footnote'] }],
    });
};
