export const GetWebsiteData = `query GetWebsiteData{
  person(id: "2dHdqDmhdvsyfrhkYq7G8n") {
    sys {
      id
    }
    firstName
    lastName
    headline
    subhead
    headshot {
      url
      title
      description
      width
      height
    }
    clients: projectsCollection(
      limit: 6
      where: { type_not: "Employment - W2" }
    ) {
      items {
        headline
        clientsCollection(limit: 1) {
          items {
            name
            logo {
              url
              title
              description
              width
              height
            }
          }
        }
      }
    }
    employment: projectsCollection(
      limit: 4
      where: { type: "Employment - W2" }, order: endDate_DESC
    ) {
      items {
        jobTitle
        headline
        body
        clientsCollection(limit: 1) {
          items {
            name
            logo {
              url
              title
              description
              width
              height
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
            url
            title
            description
            width
            height
          }
          projectsCollection(limit: 1, where: { type: "Employment - W2" }, order: startDate_DESC) {
            items {
              jobTitle
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
          url
          title
          description
          width
          height
        }
      }
    }
    technology: technologyCollection(limit: 6) {
      items {
        title
        headline
        body
        icon {
          url
          title
          description
          width
          height
        }
      }
    }
    philosophy: philosophyCollection {
      items {
        title
        headline
        body
        icon {
          url
          title
          description
          width
          height
        }
      }
    }
  }
}
`;
export const GetSiteMeta = `query GetSiteMeta {
  person(id: "2dHdqDmhdvsyfrhkYq7G8n") {
    firstName
    lastName
    headline
  }
}`;
