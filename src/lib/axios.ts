import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/users/',
})

export const apiSearch = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})

// https://api.github.com/search/issues?q=erro repo:diego3g/faladev
// q=${texto}%20repo:${username}/${repo}
