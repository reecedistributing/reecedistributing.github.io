import Auth0Lock from 'auth0-lock'
import config from '~/config.json'
import uuid from 'uuid'
import { unsetToken } from '../utils/auth';
import jwt_decode from 'jwt-decode'

const LOCAL_TOKEN_KEY = 'accessToken'

if (process.browser) {
  window.jwt_decode = jwt_decode
}
export default {
  namespaced: true,
  state: {
    user: null,
    lock: null,
    AUTH0_COMPONENT_ID: uuid(),
    auth_token: null
  },

  mutations: {
    setUser (state, user) {
      state.user = user || null
    },

    setLock (state, lock) {
      state.lock = lock
    }
  },

  actions: {

    logOut ({state, commit, dispatch}) {
        unsetToken();
    //   sessionStorage.removeItem(LOCAL_TOKEN_KEY)
      // return to same location. Vue router will handle auth route validation
      if (state.lock) state.lock.logout({ returnTo: `${window.location.origin}` })
    },

    waitForAuthentication ({state, commit, dispatch, getters}) {
      return new Promise(
        (resolve, reject) => {
          console.log('loading')
          let lock = getters.lock;
          lock.on('authenticated',
            authResult => {
              console.log('authResult:', authResult)
              dispatch('saveAccessToken', authResult.accessToken)
              resolve(authResult)
            }
          );
          lock.on('authorization_error',
            authError => {
              dispatch('notifications/notify', {
                text: `${authError.errorDescription}`,
                color: 'error'
              }, {
                root: true
              })
            }
          );
        }
      )
    },

    saveAccessToken ({state}, token) {

    },

    async loadUserInfo ({state, commit, getters, dispatch}) {
      let token = getters.accessToken
      if (!token) {
        if (!process.browser) return
        let res = await dispatch('waitForAuthentication')
        let { accessToken } = res
        token = accessToken
      }
      getters.lock.getUserInfo(token, async (error, profile) => {
        console.log('info recieveds')
        if (error) {
          console.error(error)
          await dispatch('notifications/notify', {
            text: error
          })
          return
        }
        console.log(profile)
        console.log(token)
        try {
        } catch (e) { console.error(e) }

        commit('setUser', profile)
      })
    },

    showLock ({state, getters}) {
      getters.lock.show()
    }
  },

  getters: {

    isAuthenticated (state) {
      return !!state.user
    },

    loggedUser (state) {
      return state.user
    },

    accessToken () {
      if (!process.browser) return null
      let localToken // = sessionStorage.getItem(LOCAL_TOKEN_KEY)
      return localToken || null
    },

    lock (state) {
      console.log(arguments)
      if (state.lock) return state.lock

      let container = state.AUTH0_COMPONENT_ID;
      let lock = new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_DOMAIN, {
        closable: false,
        auth: {
          responseType: 'token',
          redirectUrl: `${window.location.origin}/auth/signed-in`,
          params: {
            scope: 'openid profile email'
            // state: secret
          },
          container
        }
      })
      state.lock = lock
      return lock
    }
  }
}
