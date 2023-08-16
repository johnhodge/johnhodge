import { PostData } from '@/app/types';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';

export function GetMdxDataContent(fileLocation: string) {
  const fileContents = readFileSync(fileLocation);
  const { data, content } = matter(fileContents);
  return { data, content };
}
export function GetMdxData(fileLocation: string): PostData {
  const fileContents = readFileSync(fileLocation);
  const { data } = matter(fileContents);
  return {
    title: data.title,
    excerpt: data.excerpt,
    icon: data.icon,
    date: data.date,
    author: { firstName: data.firstName, lastName: data.lastName },
  };
}

export function GetSubFolders(directoryLocation: string) {
  const folders = readdirSync(directoryLocation);
  return folders;
}
