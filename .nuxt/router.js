import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _9fccc362 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _518d3d8c = () => import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */).then(m => m.default || m)
const _41f83f08 = () => import('../pages/products/new.vue' /* webpackChunkName: "pages/products/new" */).then(m => m.default || m)
const _fcfd3366 = () => import('../pages/admin/nested/index.vue' /* webpackChunkName: "pages/admin/nested/index" */).then(m => m.default || m)
const _07a808f5 = () => import('../pages/products/_slug/index.vue' /* webpackChunkName: "pages/products/_slug/index" */).then(m => m.default || m)
const _0ea4a7b7 = () => import('../pages/products/_slug/edit.vue' /* webpackChunkName: "pages/products/_slug/edit" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _9fccc362,
			name: "index"
		},
		{
			path: "/products",
			component: _518d3d8c,
			name: "products"
		},
		{
			path: "/products/new",
			component: _41f83f08,
			name: "products-new"
		},
		{
			path: "/admin/nested",
			component: _fcfd3366,
			name: "admin-nested"
		},
		{
			path: "/products/:slug",
			component: _07a808f5,
			name: "products-slug"
		},
		{
			path: "/products/:slug/edit",
			component: _0ea4a7b7,
			name: "products-slug-edit"
		}
    ],
    fallback: false
  })
}
