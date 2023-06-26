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
  contentType: string;
};

type BasicPost = {
  title: string;
  headline: string;
  body: string;
  icon: MediaImage;
};

type ClientsCollection = {
  items: [
    {
      name: string;
      logo: MediaImage;
    }
  ];
};

type Employment = {
  jobTitle: string;
  headline: string;
  body: string;
  clientsCollection: ClientsCollection;
};

type Clients = {
  headline: string;
  clientsCollection: ClientsCollection;
};

type BasicPerson = {
  firstName: string;
  lastName: string;
  headshot: MediaImage;
  employment: { items: [Employment] };
};

type Testimonials = {
  excerpt: string;
  body: string;
  author: BasicPerson;
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
  skills: { items: [BasicPost] };
  technology: { items: [BasicPost] };
  philosophy: { items: [BasicPost] };
  clients: { items: [Clients] };
  testimonials: { items: [Testimonials] };
}
