module.exports = function (migration) {
  const footnote = migration.editContentType('footnote');
  footnote.deleteField('footnoteOder');
};
