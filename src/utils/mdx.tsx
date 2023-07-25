import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';

export function GetDataContent(fileLocation: string) {
  const fileContents = readFileSync(fileLocation);
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function GetSubFolders(directoryLocation: string) {
  const folders = readdirSync(directoryLocation);
  return folders;
}
