module.exports = function (migration) {
  const professional = migration
    .createContentType('professional')
    .name('Professional')
    .displayField('companyName')
    .description(
      "The professional experience that will appear on the person's page."
    );

  professional.createField('companyName').type('Symbol').name('Company Name');
  professional.createField('position').type('Symbol').name('Position');
  professional.createField('department').type('Symbol').name('Department');

  const education = migration
    .createContentType('education')
    .name('Education')
    .displayField('degreeName')
    .description("The education that will appear on the person's page.");

  education.createField('schoolName').type('Symbol').name('School Name');
  education.createField('degreeName').type('Symbol').name('Degree Name');

  const hobby = migration
    .createContentType('hobby')
    .name('Hobby')
    .displayField('hobbyName')
    .description("A hobby that will appear on the person's page.");

  hobby.createField('hobbyName').type('Symbol').name('Hobby Name');
  hobby
    .createField('hobbyDescription')
    .type('Symbol')
    .name('Hobby Description');

  const person = migration.editContentType('person');
  person.createField('firstName').type('Symbol').name('First Name');
  person.moveField('firstName').afterField('name');

  person.createField('lastName').type('Symbol').name('Last Name');
  person.moveField('lastName').afterField('firstName');

  person
    .createField('homePageHeadline')
    .type('Symbol')
    .name('Home Page Headline');
  person.moveField('homePageHeadline').afterField('lastName');

  person.createField('homePageBio').type('Symbol').name('Home Page Bio');
  person.moveField('homePageBio').afterField('homePageHeadline');

  person.createField('aboutPageBio').type('Symbol').name('About Page Bio');
  person.moveField('aboutPageBio').afterField('homePageBio');

  person
    .createField('professional')
    .type('Array')
    .name('Professional')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['professional'] }],
    });

  person
    .createField('education')
    .type('Array')
    .name('Education')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['education'] }],
    });

  person
    .createField('hobbies')
    .type('Array')
    .name('Hobbies')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['hobby'] }],
    });

  person.deleteField('title');
  person.deleteField('company');
  person.deleteField('shortBio');
  person.deleteField('facebook');
};
