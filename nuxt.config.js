module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'reece-distributing-web-catalog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A client for the Reece Distributing Web Catalog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cutive+Mono|Great+Vibes' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  modules: [
    '@nuxtjs/sitemap'
  ],

  // for https://github.com/nuxt-community/sitemap-module
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://reecedistributing.com',
    cacheTime: 1000 * 60 * 15,
    generate: false, // Enable me when using nuxt generate
    exclude: [
      '/secret',
      '/admin/**',
      '/products/new'
    ],
    routes: [
      // '/page/1',
      // {
      //   url: '/page/2',
      //   changefreq: 'daily',
      //   priority: 1,
      //   lastmodISO: '2017-06-30T13:30:00.000Z'
      // }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~/plugins/vuetify'
  ],
  css: ['~/assets/app.styl'],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
