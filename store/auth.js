import Auth0Lock from 'auth0-lock'
import config from '~/config.json'
import uuid from 'uuid'

const LOCAL_TOKEN_KEY = 'accessToken'

export default {
  namespaced: true,
  state: {
    user: null,
    lock: null,
    AUTH0_COMPONENT_ID: uuid()
  },

  mutations: {
    SET_USER (state, user) {
      state.user = user || null
    },

    setLock (state, lock) {
      state.lock = lock
    }
  },

  actions: {

    logOut ({state, commit, dispatch}) {
      sessionStorage.removeItem(LOCAL_TOKEN_KEY)
      // return to same location. Vue router will handle auth route validation
      if (state.lock) state.lock.logout({ returnTo: `${window.location.origin}` })
    },

    waitForAuthentication ({state, commit, dispatch, getters}) {
      return new Promise(
        (resolve, reject) => {
          console.log(getters)
          console.log('loading')
          getters.lock.on('authenticated',
            authResult => {
              console.log('authResult:', authResult)
              dispatch('saveAccessToken', authResult.accessToken)
              resolve(authResult)
            }
          )
        }
      )
    },

    saveAccessToken ({state}, token) {
      sessionStorage.setItem(LOCAL_TOKEN_KEY, token)
      return sessionStorage.getItem(LOCAL_TOKEN_KEY, token)
    },

    async loadUserInfo ({state, commit, getters, dispatch}) {
      let token = getters.accessToken
      if (!token) {
        let { accessToken } = await dispatch('waitForAuthentication')
        token = accessToken
      }
      getters.lock.getUserInfo(token, (error, profile) => {
        console.log('info recieveds')
        if (error) {
          // Handle error
          return
        }

        sessionStorage.setItem('profile', JSON.stringify(profile))
        commit('SET_USER', profile)
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
      let localToken = sessionStorage.getItem(LOCAL_TOKEN_KEY)
      return localToken || null
    },

    lock (state) {
      console.log(arguments)
      if (state.lock) return state.lock

      let container = state.AUTH0_COMPONENT_ID
      let lock = new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_DOMAIN, {
        closable: false,
        auth: {
          responseType: 'token',
          redirectUrl: `${window.location.origin}/`,
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
