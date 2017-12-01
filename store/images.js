// https://cloudinary.com/documentation/javascript_integration

import { client } from './apollo-client'
import { CREATE_IMAGE } from './graphql/mutations'
import { } from './graphql/queries'

export const UPLOAD_PRESET = 'agswqxij'
export const API_KEY = '761392187415866'
export const CLOUD_NAME = 'dvh5bpl34'

export default {
  namespaced: true,
  state: _ => ({
    cloudinary: {
      config: {
        uploadPreset: UPLOAD_PRESET,
        apiKey: API_KEY,
        cloudName: CLOUD_NAME
      }
    }
  }),

  getters: {
  },

  actions: {

    async create ({ commit, dispatch, state }, { cl_secure_url, cl_public_id, cl_cloud_name }) {
      let { image } = await client.mutate({
        mutation: CREATE_IMAGE,
        variables: {
          cloudinary: { cl_secure_url, cl_public_id, cl_cloud_name }
        }
      })
      return image
    }

  }
}
