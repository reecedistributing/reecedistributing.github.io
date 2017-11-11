// https://cloudinary.com/documentation/javascript_integration

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
  }
}
