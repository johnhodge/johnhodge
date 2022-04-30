import { useStaticQuery, graphql } from "gatsby";

export const useSiteData = () => {
  const { site, allContentfulCompany } = useStaticQuery(
    graphql`
      {
        site {
          ...gatsbySiteData
        }
        allContentfulCompany {
          edges {
            ...contentfulSiteData
          }
        }
      }
    `
  );
  return [site, { allContentfulCompany }];
};
export default useSiteData;
