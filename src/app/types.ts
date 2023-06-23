export type PersonMeta = {
  firstName: string;
  lastName: string;
  headline: string;
};

export type MediaImage = {
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
  icon: MediaImage;
};

type Employment = {
  jobTitle: string;
  headline: string;
  body: string;
  items: [
    {
      name: string;
      logo: MediaImage;
    }
  ];
};

type Clients = {
  headline: string;
  clientsCollection: {
    items: [
      {
        name: string;
        logo: MediaImage;
      }
    ];
  };
};

type BasicPerson = {
  firstName: string;
  lastName: string;
  headshot: MediaImage;
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
  headshot: MediaImage;
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
