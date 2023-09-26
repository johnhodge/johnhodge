import { MouseEventHandler, ReactNode } from 'react';

export type PersonMetaData = {
  firstName: string;
  lastName: string;
  headline: string;
};

export type MediaImageData = {
  url: string;
  title: string;
  description: string;
  width: number;
  height: number;
  contentType: string;
};

export type HeroData = {
  headline: string;
  subhead: string;
  headshot: MediaImageData;
};

type ClientsCollection = {
  items: [
    {
      name: string;
      logo: MediaImageData;
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
  headshot: MediaImageData;
  employment: { items: [Employment] };
};

type Testimonials = {
  excerpt: string;
  body: string;
  author: BasicPerson;
};

type BasicEntry = {
  title: string;
  headline: string;
  body: string;
  icon: MediaImageData;
};

export interface PersonData extends BasicPerson {
  sys: [Object];
  headline: string;
  subhead: string;
  skills: { items: [BasicEntry] };
  technology: { items: [BasicEntry] };
  philosophy: { items: [BasicEntry] };
  clients: { items: [Clients] };
  testimonials: { items: [Testimonials] };
}

export type DynamicRouteData = {
  category: string;
  tag?: string;
  slug?: string;
};

export type DynamicTemplateData = {
  route: DynamicRouteData;
  children?: ReactNode;
  post: PostFileData;
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
  subhead: string;
  excerpt: string;
};

export interface PostData extends BasicPostData {
  icon: string;
  date: string;
  author: AuthorData;
}

export interface PostFileData extends PostData {
  file: FileData;
}

export type TOCData = {
  post: PostFileData;
  route: DynamicRouteData;
  rootDocTitle: string;
  folders: Record<string, TOCEnteryData>;
};

export type TOCEnteryData = {
  root: PostFileData;
  subPages: PostFileData[];
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
  logo?: MediaImageData;
  icon?: MediaImageData;
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

export type SubPageData = {
  filename: string;
  title: string;
  excerpt: string;
  icon: string;
};

export type HeaderData = {
  base: string;
  header?: ReactNode;
  children?: ReactNode;
  data?: PostFileData;
  slug?: string;
};

export type LinkedHeaderProps = {
  children: ReactNode;
  href: string;
};

export type HeaderGroupData = {
  id: string;
  headline: string;
  subhead: string;
  data?: PersonData;
  headshot?: MediaImageData;
  children?: React.ReactNode;
};

export type ImageLoaderData = {
  src: string;
  quality: string;
  width: number;
};

export type AssetData = {
  assetId: string;
  figcaption: boolean;
  priority: boolean;
  size?: 'fit' | 'full';
};

export type MarkdownData = {
  markdown: string;
};
