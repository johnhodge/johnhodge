export type PersonMeta = {
  firstName: string;
  lastName: string;
  headline: string;
};

type Image = {
  url: string;
  title: string;
  description: string;
  width: number;
  height: number;
};

type BasicPost = {
  title: string;
  headline: string;
  body: string;
  icon: Image;
};

type Employment = {
  jobTitle: string;
  headline: string;
  body: string;
  items: [
    {
      name: string;
      logo: Image;
    }
  ];
};

type Clients = {
  headline: string;
  clientsCollection: {
    items: [
      {
        name: string;
        logo: Image;
      }
    ];
  };
};

type BasicPerson = {
  firstName: string;
  lastName: string;
  headshot: Image;
};

type Testimonials = {
  items: [
    {
      excerpt: string;
      body: string;
      author: BasicPerson;
    }
  ];
};

export type HeroData = {
  headline: string;
  subhead: string;
  headshot: Image;
};

export interface Person extends BasicPerson {
  sys: [Object];
  headline: string;
  subhead: string;
  skills: [BasicPost];
  technology: [BasicPost];
  philosophy: [BasicPost];
  employment: Employment;
  clients: Clients;
  testimonials: Testimonials;
}
