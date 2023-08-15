import { MouseEventHandler, ReactNode } from 'react';

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

export type DynamicRoute = {
  params: {
    documentation: string;
    category?: string;
    slug?: string;
  };
};

export type DynamicTemplate = {
  route: DynamicRoute;
  children?: ReactNode;
  post: PostData;
};

export type FileData = {
  rootDirectory: string;
  rootDocsDirectory: string;
  containingDirectory: string;
  fileName: string;
  MDXFilePath: string;
};

type AuthorData = {
  firstName: string;
  lastName: string;
};

export type BasicPostData = {
  title: string;
  excerpt: string;
};

export interface PostData extends BasicPostData {
  icon: string;
  date: string;
  author: AuthorData;
  file: FileData;
}

export type TOCData = {
  post: PostData;
  route: DynamicRoute;
  rootDocTitle: string;
  folders: Record<string, TOCEnteries>;
};

export type TOCEnteries = {
  root: PostData;
  subPages: PostData[];
};

export type EmailData = {
  recipient: {
    firstName: string;
    email: string;
  };
  sender: {
    name: string;
    email: string;
  };
  subject: string;
  previewText: string;
};

export type SendEmailSettings = {
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
};

export type GlobalButtonSettings = {
  size: 'small' | 'large';
  width: 'full' | 'fit';
  color: 'primary' | 'secondary' | 'gray';
  text: string;
} & (ButtonProps | LinkRouteProps);

type ButtonProps = {
  buttonType: 'button';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

type LinkRouteProps = {
  buttonType: 'link' | 'route';
  href: string;
};

export type GlobalCardSettings = {
  logo?: MediaImage;
  icon?: MediaImage;
  iconId?: string;
  iconAlign?: 'start' | 'center' | 'end';
  header?: string;
  subheader?: string;
  shortDescription?: string;
  longDescription?: string;
  body?: string;
  closeDialog?: GlobalButtonSettings;
  openDialog?: GlobalButtonSettings;
  callToAction?: GlobalButtonSettings;
  dialogCallToAction?: GlobalButtonSettings;
  verticalLine: boolean;
  horizontalLine: boolean;
  height?: string;
};

export type SiteMetadata = {
  pageName: string;
  description: string;
  path: string;
  index: boolean;
  follow: boolean;
  cache: boolean;
};
