webpackJsonp([3],{"0RCL":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},"4pEC":function(t,e,r){"use strict";var a=r("Xxa5"),i=r.n(a),s=r("exGp"),n=r.n(s),o=r("Dd8w"),c=r.n(o),u=r("NYxO");e.a={methods:c()({add:function(){var t=n()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.addProduct({product:this.product});case 2:this.notify({text:"Product added to inquiry."});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),remove:function(){var t=n()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.removeProduct({product:this.product});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},Object(u.mapActions)("notifications",["notify"]),Object(u.mapActions)("inquiries",["addProduct","removeProduct"])),computed:c()({},Object(u.mapState)("inquiries",{currentInquiry:"current"})),props:["product"]}},BcRc:function(t,e,r){"use strict";var a=r("uzmZ"),i=r("fz8a"),s=!1;var n=function(t){s||r("VqwI")},o=r("VU/8")(a.a,i.a,!1,n,null,null);o.options.__file="components/products/Table.vue",e.a=o.exports},GRsy:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-flex",[r("v-tabs",{attrs:{dark:"",grow:"",default:"views[activeView]"},model:{value:t.activeView,callback:function(e){t.activeView=e},expression:"activeView"}},[r("v-toolbar",{attrs:{"not-extended":""}},[t.desktopBreakpoint?r("v-toolbar-title",[t._v("Products")]):t._e(),r("v-layout",[r("v-flex",{attrs:{sm8:"","offset-sm2":"","justify-content":"space-around"}},[r("form",{on:{submit:function(e){e.preventDefault(),t.searchProducts(e)}}},[r("v-text-field",{class:t.searchClasses,attrs:{autofocus:!1,solo:"",label:"Search","append-icon":"keyboard_voice","prepend-icon":"search","text-color":"black"},on:{blur:function(e){e.preventDefault(),t.deactivateSearch(e)},focus:function(e){e.preventDefault(),t.activateSearch(e)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])],1),t.user?r("v-btn",{staticClass:"elevation-1 primary white--text mr-3",attrs:{nuxt:!0,to:{name:"products-new"},icon:!t.desktopBreakpoint,flat:!1}},[t.desktopBreakpoint?r("span",[t._v("New Product")]):t._e(),t.desktopBreakpoint?t._e():r("v-icon",[t._v("add")])],1):t._e()],1),r("v-tabs-bar",[r("v-tabs-slider",{attrs:{color:"accent"}}),t._l(t.views,function(e,a){return r("v-tabs-item",{key:a,attrs:{nuxt:!0,target:a,href:"#"+a,ripple:""},on:{click:function(e){t.switchView(a)}}},[t._v(t._s(a))])})],2),r("v-tabs-items",t._l(t.views,function(e,a){return r("v-tabs-content",{key:a,attrs:{id:a}},[r("v-layout",[t.$vuetify.breakpoint.smAndUp?r("v-flex",{staticClass:"mt-4",attrs:{xs3:""}},[r("v-card",{staticClass:"secondary pl-0 mt-4",attrs:{flat:""}},[r("v-card-text",[r("v-card",{staticClass:"floating-card-custom mb-1 pa-3"},[r("v-card-text",[r("v-toolbar",{attrs:{flat:""}},[r("v-list",[r("v-list-tile",[r("v-list-tile-content",[r("v-list-tile-title",[t._v("Filters")])],1)],1)],1)],1),r("v-divider"),r("v-list",{attrs:{"three-line":"",subheader:""}},[r("v-subheader",[t._v("User Controls")]),r("v-list-tile"),r("v-list-tile",[r("v-list-tile-content",[r("v-list-tile-title",[t._v("Category")]),r("v-list-tile-sub-title",[t._v("Filter by category")])],1)],1)],1)],1)],1)],1)],1)],1):t._e(),r("v-flex",{attrs:{sm9:"",xs12:""}},[r("keep-alive",[r(e,{tag:"component",attrs:{products:t.products,loading:t.loading,initial_sort_attr:t.sortBy.attribute,initial_sort_ascending:t.sortBy.ascending},on:{sort:t.updateRouteWithSortParams}})],1)],1)],1)],1)})),r("v-container",[r("v-layout",{attrs:{"justify-center":""}},[r("v-pagination",{attrs:{length:t.pageCount,"total-visible":"7"},model:{value:t.pageNum,callback:function(e){t.pageNum=e},expression:"pageNum"}})],1)],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},Op1H:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"container--product-grid",attrs:{column:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"mt-4",attrs:{xs10:"",md6:"","offset-md3":"","justify-space-around":""}},[t.loading?r("v-progress-linear",{attrs:{transition:"fade-transition",indeterminate:!0,color:"info"}}):t._e()],1),r("v-flex",{staticClass:"text-lg-right",attrs:{xs2:"","offset-md3":""}},[r("div",{staticClass:"text-xs-center"},[r("v-menu",{attrs:{"offset-y":"",scrollable:"",left:"",bottom:"","close-on-content-click":!1,"nudge-width":400},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[r("v-btn",{attrs:{slot:"activator",flat:"",icon:"",large:""},on:{click:t.toggleSortOptions},slot:"activator"},[r("v-icon",[t._v("sort")])],1),r("v-card",[r("v-card-title",[t._v("Sort Options")]),r("v-card-text",[r("v-divider"),r("v-list",[r("v-list-tile",[r("v-list-tile-content",[r("v-select",{attrs:{label:"Sort By",items:t.sortable},model:{value:t.sortAttribute,callback:function(e){t.sortAttribute=e},expression:"sortAttribute"}})],1)],1),r("v-list-tile",[r("v-list-tile-content",[r("v-radio-group",{staticClass:"text-xs-center",attrs:{row:""},model:{value:t.ascending,callback:function(e){t.ascending=e},expression:"ascending"}},[r("v-radio",{attrs:{label:"ascending",value:!0}}),r("v-radio",{attrs:{label:"descending",value:!1}}),r("v-spacer")],1)],1)],1)],1)],1)],1)],1)],1)])],1)],1),r("v-flex",{attrs:{xs12:""}},[r("v-container",{staticClass:"lighten-4",attrs:{fluid:"","grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-start":"","align-start":""}},t._l(t.products,function(e){return r("v-flex",t._b({key:e.id},"v-flex",((a={})["lg"+e.flex]=!0,a),!1),[r("ProductCard",{attrs:{product:e}})],1);var a}))],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},PZW8:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".faded[data-v-fb16ccc0]{opacity:.9}.floating-card-custom[data-v-fb16ccc0]{margin-bottom:34px;bottom:34px}",""])},"Q+CH":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.currentInquiry.products[t.product.id]?r("v-tooltip",{attrs:{top:""}},[r("v-btn",{attrs:{slot:"activator",icon:""},on:{click:function(e){t.removeProduct({product:t.product})}},slot:"activator"},[r("v-icon",{attrs:{icon:""}},[t._v("remove_shopping_cart")])],1),r("span",[t._v("Remove product from inquiry")])],1):r("v-tooltip",{attrs:{top:""}},[r("v-btn",{attrs:{slot:"activator",icon:""},on:{click:t.add},slot:"activator"},[r("v-icon",{attrs:{icon:""}},[t._v("add_shopping_cart")])],1),r("span",[t._v("Add product to inquiry")])],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},Qakm:function(t,e,r){var a=r("joLu");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("598c0293",a,!1,{sourceMap:!1})},Qgt9:function(t,e,r){var a=r("PZW8");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("118f04c4",a,!1,{sourceMap:!1})},T2Xr:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-card",[r("v-card",{staticClass:"lowkey_link elevation-0",attrs:{to:{name:"products-id",params:{id:t.product.id}},nuxt:!0}},[r("v-card-media",{attrs:{src:t.product.main_img_url,height:"200px"}},[r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-layout",{attrs:{"fill-height":""}},[r("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}})],1)],1)],1),r("v-card-title",[r("div",[r("h3",{staticClass:"headline mb-0",domProps:{textContent:t._s(t.product.name)}}),r("div",[t._v(t._s(t.product.description))])])])],1),r("v-card",{staticClass:"elevation-0"},[r("v-card-actions",[r("v-spacer"),r("add-remove-buttons",{attrs:{product:t.product}}),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("bookmark")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("share")])],1)],1)],1)],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},UiKi:function(t,e,r){"use strict";r("NYxO");var a=r("lgnk");e.a={props:{product:{required:!0,type:Object}},components:{AddRemoveButtons:a.a}}},UjS2:function(t,e,r){var a=r("fC4c");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("7dd55bd6",a,!1,{sourceMap:!1})},VqwI:function(t,e,r){var a=r("0RCL");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("5452921c",a,!1,{sourceMap:!1})},dNPn:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".container--product-grid{height:100%;overflow-y:scroll}",""])},fC4c:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},"fD//":function(t,e,r){"use strict";var a=r("Dd8w"),i=r.n(a),s=r("Xxa5"),n=r.n(s),o=r("exGp"),c=r.n(o),u=r("nU52"),l=r("BcRc"),d=r("NYxO");e.a={data:function(){return{mini:!0,searchRef:"searlalskf;lajls;",search:"",searchActive:!0,loading:!1,products:[],pageCount:1,pageNum:1,sortBy:{attribute:"updatedAt",ascending:!0},views:{grid:"ProductGrid",table:"ProductTable"},activeView:"grid"}},asyncData:function(){var t=c()(n.a.mark(function t(e){var r,a,i,s,o,c,u,l,d,p,v,f,h,m,g,_,x=e.store,b=e.query;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=b.page,a=void 0===r?1:r,i=b.view,s=void 0===i?"grid":i,o=b.search,c=void 0===o?"":o,u=b.sort_ascending,l=void 0===u?"false":u,d=b.sort_attribute,p=void 0===d?"updatedAt":d,l=JSON.parse(l),v={ascending:l,attribute:p},a=parseInt(a),f=!!c,h=15,t.next=8,x.dispatch("products/getProducts",{num:a,size:h,search:c,orderBy:v});case 8:return m=t.sent,g=m.products,_=m.pagination.pageCount,t.abrupt("return",{products:g,pageCount:_,pageNum:a,activeView:s,search:c,searchActive:f,sortBy:v});case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),computed:i()({desktopBreakpoint:function(){return this.$vuetify.breakpoint.mdAndUp},activeComponent:function(){return this.views[this.activeView]},searchClasses:function(){var t=[],e=this.searchActive?"elevation-1":"elevation-0",r=this.searchActive?"":"faded";return t.push(e,r),this.$store.state.dark&&t.push("black"),t}},Object(d.mapState)("auth",["user"])),methods:{searchProducts:function(){var t=c()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,e=this.search,this.$router.push({query:i()({},this.$route.query,{page:1,search:e})}),this.loading=!1;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),tryDeactivate:function(){!this.search.length&&this.deactivateSearch()},activateSearch:function(){this.searchActive=!0},deactivateSearch:function(){this.searchActive=!1},updateRouteWithPageNumber:function(){var t=this.pageNum;this.$router.push({query:i()({},this.$route.query,{page:t})})},updateRouteWithSortParams:function(t){var e=t.ascending,r=t.attribute;this.$router.push({query:i()({},this.$route.query,{sort_ascending:e,sort_attribute:r})})},switchView:function(t){this.$router.push({query:i()({},this.$route.query,{view:t})})}},watch:{pageNum:function(){console.log("updated"),this.updateRouteWithPageNumber()},sortBy:{deep:!0}},components:{ProductGrid:u.a,ProductTable:l.a}}},fz8a:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card-title",[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:t.loading,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){return[r("v-tooltip",{attrs:{bottom:""}},[r("span",{attrs:{slot:"activator"},slot:"activator"},[t._v(t._s(e.header.text))]),r("span",[t._v(t._s(e.header.text))]),r("v-divider")],1)]}},{key:"items",fn:function(e){return t._l(t.headers,function(a){return r("td",{staticClass:"text-xs-right"},[r("nuxt-link",{staticClass:"lowkey_link",attrs:{to:{name:"products-id",params:{id:e.item.id}},tag:"div"}},[t._v(" "+t._s(a.render?a.render(e.item[a.value]):e.item[a.value]))])],1)})}}])})],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},h2p5:function(t,e,r){"use strict";var a=r("UiKi"),i=r("T2Xr"),s=!1;var n=function(t){s||r("UjS2")},o=r("VU/8")(a.a,i.a,!1,n,null,null);o.options.__file="components/products/Card.vue",e.a=o.exports},hp28:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("fD//"),i=r("GRsy"),s=!1;var n=function(t){s||r("Qgt9")},o=r("VU/8")(a.a,i.a,!1,n,"data-v-fb16ccc0",null);o.options.__file="pages/products/index.vue",e.default=o.exports},joLu:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},"ky+E":function(t,e,r){"use strict";var a=r("h2p5");e.a={data:function(t){return{menu:!1,hints:!1,message:!1,sortAttribute:null,ascending:!1,sortOptionsActive:!1,sortable:[{text:"name",value:"name"},{text:"description",value:"description"},{text:"Created (Date)",value:"createdAt",render:function(t){return new Date(parseInt(t)).toLocaleDateString()}},{text:"Updated (Date)",value:"updatedAt",render:function(t){return new Date(parseInt(t)).toLocaleDateString()}}]}},props:{products:{type:Array,required:!0},loading:{type:Boolean,required:!1,default:!1},initial_sort_attr:{type:String,required:!0},initial_sort_ascending:{type:Boolean,required:!0}},components:{ProductCard:a.a},watch:{ascending:function(){this.emitSort()},sortAttribute:function(){this.emitSort()}},methods:{emitSort:function(){this.$emit("sort",{ascending:this.ascending,attribute:this.sortAttribute})},activateSortOptions:function(){this.sortOptionsActive=!0},deactivateSortOptions:function(){this.sortOptionsActive=!1},toggleSortOptions:function(){this.sortOptionsActive=!this.sortOptionsActive}},mounted:function(){this.sortAttribute=this.initial_sort_attr,this.ascending=this.initial_sort_ascending}}},lgnk:function(t,e,r){"use strict";var a=r("4pEC"),i=r("Q+CH"),s=!1;var n=function(t){s||r("Qakm")},o=r("VU/8")(a.a,i.a,!1,n,null,null);o.options.__file="components/inquiries/AddRemoveButtons.vue",e.a=o.exports},nU52:function(t,e,r){"use strict";var a=r("ky+E"),i=r("Op1H"),s=!1;var n=function(t){s||r("uWb8")},o=r("VU/8")(a.a,i.a,!1,n,null,null);o.options.__file="components/products/Grid.vue",e.a=o.exports},uWb8:function(t,e,r){var a=r("dNPn");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r("rjj0")("e651691a",a,!1,{sourceMap:!1})},uzmZ:function(t,e,r){"use strict";e.a={data:function(){return{search:"",pagination:{descending:!this.initial_sort_ascending,sortBy:this.initial_sort_attr},totalItems:0,selected:[],headers:[{text:"name",value:"name"},{text:"description",value:"description"},{text:"Created (Date)",value:"createdAt",render:function(t){return new Date(parseInt(t)).toLocaleDateString()}},{text:"Updated (Date)",value:"updatedAt",render:function(t){return new Date(parseInt(t)).toLocaleDateString()}}]}},watch:{pagination:{handler:function(){var t=this.pagination,e=t.sortBy,r=t.descending,a=(t.page,t.rowsPerPage,{attribute:e,ascending:!r});this.$emit("sort",a)},deep:!0}},computed:{items:function(){return this.products}},props:{products:{type:Array,required:!0},loading:{type:Boolean,required:!0},initial_sort_attr:{type:String,required:!0},initial_sort_ascending:{type:Boolean,required:!0}}}}});