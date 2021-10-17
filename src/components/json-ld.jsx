import React from "react";
import Helmet from "react-helmet";

export const JsonLd = ({
  schemaType,
  articleBody,
  articleSection,
  wordCount,
  abstract,
  givenName,
  familyName,
  image,
  dateCreated,
  dateModified,
  headline,
  inLanguage,
  keywords,
  url,
  legalName,
  name,
  caption,
  contentSize,
  contentUrl,
  encodingFormat,
  height,
  width,
}) => (
  <Helmet>
    {schemaType.toLowerCase() === "article" ? (
      <script type="application/ld+json">
        {JSON.stringify(
          {
            "@context": `https://schema.org`,
            "@type": `Article`,
            articleSection,
            wordCount,
            abstract,
            image,
            creator: {
              "@type": `Person`,
              givenName,
              familyName,
            },
            author: {
              "@type": `Person`,
              givenName,
              familyName,
            },
            publisher: {
              "@type": `Organization`,
              name,
              url,
              legalName,
              logo: {
                "@type": `ImageObject`,
                caption,
                contentSize,
                contentUrl,
                encodingFormat,
                height,
                width,
              },
            },
            dateCreated,
            dateModified,
            datePublished: dateCreated,
            headline,
            inLanguage,
            keywords,
            articleBody,
          },
          null,
          ` `
        )}
      </script>
    ) : (
      ""
    )}
  </Helmet>
);

export default JsonLd;
