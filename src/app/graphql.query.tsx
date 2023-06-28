export const GetWebsiteData = `query GetWebsiteData {
  person(id: "2dHdqDmhdvsyfrhkYq7G8n") {
    sys {
      id
    }
    firstName
    lastName
    headline
    subhead
    headshot {
      ...assetData
    }
    clients: projectsCollection(
      limit: 6
      order: title_ASC
      where: { type_not: "Employment - W2" }
    ) {
      items {
        headline
        clientsCollection(limit: 1) {
          items {
            name
            logo {
              ...assetData
            }
          }
        }
      }
    }
    employment: projectsCollection(
      limit: 4
      where: { type: "Employment - W2" }
      order: endDate_DESC
    ) {
      items {
        jobTitle
        headline
        body
        clientsCollection(limit: 1) {
          items {
            name
            logo {
              ...assetData
            }
          }
        }
      }
    }
    testimonials: testimonialsCollection(limit: 6) {
      items {
        excerpt
        body
        author {
          firstName
          lastName
          headshot {
            ...assetData
          }
          employment: projectsCollection(
            limit: 1
            where: { type: "Employment - W2" }
            order: startDate_DESC
          ) {
            items {
              jobTitle
              clientsCollection(limit: 1) {
                items {
                  name
                  logo {
                    ...assetData
                  }
                }
              }
            }
          }
        }
      }
    }
    skills: skillCollection(limit: 6) {
      items {
        title
        headline
        body
        icon {
          ...assetData
        }
      }
    }
    technology: technologyCollection(limit: 6) {
      items {
        title
        headline
        body
        icon {
          ...assetData
        }
      }
    }
    philosophy: philosophyCollection {
      items {
        title
        headline
        body
        icon {
          ...assetData
        }
      }
    }
  }
}
fragment assetData on Asset {
  url
  title
  description
  width
  height
  contentType
}
`;
export const GetSiteMeta = `query GetSiteMeta {
  person(id: "2dHdqDmhdvsyfrhkYq7G8n") {
    firstName
    lastName
    headline
  }
}`;
