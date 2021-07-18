import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './about.module.scss';

const About = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPerson {
        aboutPageBio
        professional {
          position
          companyName
          department
        }
        education {
          schoolName
          degreeName
        }
        hobbies {
          hobbyName
          hobbyDescription
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO
        metaTitle='About'
        description="I'm a NYC based Solution's Engineer and I work in Adtech with some of the smartest people in the solar system."
        pathname='/about'
      />
      <h1>About.</h1>
      <p>{data.contentfulPerson.aboutPageBio}</p>

      <h2 className={styles.aboutHeader}>Profesh</h2>
      {data.contentfulPerson.professional.map((profesh, i) => {
        return (
          <div key={i}>
            <h3>
              <span
                itemProp='jobTitle'
                itemScope
                itemType='https://schema.org/Person'>
                {profesh.position}
              </span>
              :{' '}
              <span
                itemProp='employee'
                itemScope
                itemType='https://schema.org/Person'>
                {profesh.companyName}
              </span>
            </h3>
            <p>{profesh.department}</p>
          </div>
        );
      })}

      <h2 className={styles.aboutHeader}>Education</h2>
      {data.contentfulPerson.education.map((edu, i) => {
        return (
          <div key={i}>
            <h3>{edu.degreeName}</h3>
            <p
              itemProp='alumniOf'
              itemScope
              itemType='https://schema.org/Person'>
              {edu.schoolName}
            </p>
          </div>
        );
      })}

      <h2 className={styles.aboutHeader}>Fun</h2>
      {data.contentfulPerson.hobbies.map((hobby, i) => {
        return (
          <div key={i}>
            <h3 itemProp='knows' itemScope itemType='https://schema.org/Person'>
              {hobby.hobbyName}
            </h3>
            <p>{hobby.hobbyDescription}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default About;
