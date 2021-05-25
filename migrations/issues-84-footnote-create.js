module.exports = function (migration) {
  // New footnote content type.
  const footnote = migration
    .createContentType('footnote')
    .name('Footnote')
    .displayField('resourceName');
  footnote
    .createField('resourceName')
    .type('Symbol')
    .required(true)
    .name('Resource Name')
    .validations([{ unique: true }]);
  footnote
    .createField('footnoteText')
    .type('Text')
    .required(true)
    .name('Footnote Text');

  // Create a new footnote field in the blog post content type.
  const blogPost = migration.editContentType('blogPost');
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
