import { BasicPostData, PostData } from '@/app/types';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';

export function GetMdxDataContent(fileLocation: string) {
  const fileContents = readFileSync(fileLocation);
  const { data, content } = matter(fileContents);
  return { data, content };
}
export function GetMdxBasicData(fileLocation: string): BasicPostData {
  const fileContents = readFileSync(fileLocation);
  const { data } = matter(fileContents);
  return {
    title: data.title,
    subhead: data.subhead,
    excerpt: data.excerpt,
  };
}

export function GetMdxData(fileLocation: string): PostData {
  const fileContents = readFileSync(fileLocation);
  const { data } = matter(fileContents);
  return {
    title: data.title,
    subhead: data.subhead,
    excerpt: data.excerpt,
    icon: data.icon,
    date: data.date,
    author: {
      firstName: data.author.firstName,
      lastName: data.author.lastName,
    },
  };
}

export function GetSubFolders(directoryLocation: string) {
  const folders = readdirSync(directoryLocation);
  return folders;
}
