// Repo model based on the structure of github api at
// https://api.github.com/users/{user}/repos
export interface Repo {
    name: string,
    full_name: string,
    description: string,
    git_url: string,
    clone_url: string,
    svn_url: string,
    watchers_count: number,
    stargazers_count: number,
    language: string,
    has_issues: boolean,
    open_issues_count: number
}