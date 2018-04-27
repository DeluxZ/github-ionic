// Gist model based on the structure of github api at
// https://api.github.com/users/{user}/gists
export interface Gist {
  id: string,
  html_url: string,
  files: GistFile,
  created_at: string,
  updated_at: string,
  description: string,
  comments: number,
  fileCount: number
}

export interface GistFile {
  filename: string,
  type: string,
  language: string,
  raw_url: string,
  size: number;
}
