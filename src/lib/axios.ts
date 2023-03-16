import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
})

// https://api.github.com/search/issues?q=repo:dexheart/github_blog
// q=${texto}%20repo:${username}/${repo}
