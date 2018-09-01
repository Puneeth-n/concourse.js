import { Base64 } from 'js-base64'

const authorizationHeaderName = 'Authorization'

const basicAuthToken = (username, password) =>
  Base64.encode(`${username}:${password}`)

const basicAuthHeaderValue = (username, password) =>
  `Basic ${basicAuthToken(username, password)}`
const bearerAuthHeaderValue = (token) =>
  `Bearer ${token}`

export const basicAuthHeader = (username, password) => ({
  [authorizationHeaderName]: basicAuthHeaderValue(username, password)
})
export const bearerAuthHeader = (token) => ({
  [authorizationHeaderName]: bearerAuthHeaderValue(token)
})