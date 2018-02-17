import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

const KEYS = {
  TOKEN: 'token',
  USER: 'user',
  SECRET: 'secret',
  LOGOUT: 'logout'
}

const STORAGE = process.browser ? window.sessionStorage : {};

export const setToken = (token) => {
  if (process.SERVER_BUILD) return
  STORAGE.setItem(KEYS.TOKEN, token)
}

export const unsetToken = () => {
  if (process.SERVER_BUILD) return
  STORAGE.removeItem(KEYS.TOKEN)
  STORAGE.setItem('logout', Date.now())
}

export const getUserFromLocalStorage = () => {
  const json = STORAGE.getItem(KEYS.USER)
  return json ? JSON.parse(json) : undefined
}

export const setSecret = (secret) => STORAGE.setItem(KEYS.SECRET, secret)

export const checkSecret = (secret) => STORAGE.secret === secret
