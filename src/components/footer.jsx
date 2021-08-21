import * as React from 'react';
import { graphql, Link } from 'gatsby';

const Footer = ({ data }) => {
  var today = new Date();
  var year = today.getFullYear();
  console.log(data);
  return (
    <footer>
      {year}©{/* {data.site.siteMetadata.title} */}
    </footer>
  );
};
export default Footer;
