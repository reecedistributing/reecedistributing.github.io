webpackJsonp([2],{"2vp6":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},"5uCL":function(t,e,a){var r=a("wkSj");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("c4bd0664",r,!0)},BcRc:function(t,e,a){"use strict";function r(t){a("w+9/")}var i=a("F7sC"),n=a("K9ik"),s=a("VU/8"),o=r,c=s(i.a,n.a,!1,o,null,null);e.a=c.exports},DN0Y:function(t,e,a){var r=a("age9");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("87a3d53a",r,!0)},F7sC:function(t,e,a){"use strict";e.a={data:function(){return{search:"",pagination:{descending:!this.initial_sort_ascending,sortBy:this.initial_sort_attr},totalItems:0,selected:[],headers:[{text:"name",value:"name"},{text:"description",value:"description"},{text:"Min Price",value:"price_low",render:function(t){return t?"$"+t:"None"}},{text:"Max Price",value:"price_high",render:function(t){return t?"$"+t:"None"}},{text:"Created (Date)",value:"created_at",render:function(t){return new Date(parseInt(t)).toLocaleDateString()}},{text:"Updated (Date)",value:"updated_at",render:function(t){return new Date(parseInt(t)).toLocaleDateString()}}]}},watch:{pagination:{handler:function(){var t=this.pagination,e=t.sortBy,a=t.descending,r=(t.page,t.rowsPerPage,{attribute:e,ascending:!a});this.$emit("sort",r)},deep:!0}},computed:{items:function(){return this.products.forEach(function(t){var e=t.name+" "+t.description+" "+t.created_at,a=e.toLowerCase().replace(/(\s)/g,"-");console.log(a)}),this.products}},props:{products:{type:Array,required:!0},loading:{type:Boolean,required:!0},initial_sort_attr:{type:String,required:!0},initial_sort_ascending:{type:Boolean,required:!0}}}},K9ik:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,loading:t.loading,pagination:t.pagination,"hide-actions":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headerCell",fn:function(e){return[a("v-tooltip",{attrs:{bottom:""}},[a("span",{attrs:{slot:"activator"},slot:"activator"},[t._v(t._s(e.header.text))]),a("span",[t._v(t._s(e.header.text))]),a("v-divider")],1)]}},{key:"items",fn:function(e){return t._l(t.headers,function(r){return a("td",{staticClass:"text-xs-right"},[a("nuxt-link",{staticClass:"lowkey_link",attrs:{to:{name:"products-slug",params:{slug:e.item.slug}},tag:"div"}},[t._v(" "+t._s(r.render?r.render(e.item[r.value]):e.item[r.value]))])],1)})}}])})],1)],1)],1)},i=[],n={render:r,staticRenderFns:i};e.a=n},KxcQ:function(t,e,a){"use strict";e.a={props:{product:{required:!0,type:Object}}}},NFbd:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-layout",[a("v-flex",{staticClass:"mt-4",attrs:{xs11:"",md6:"","offset-md3":"","justify-space-around":""}},[a("transition",{staticClass:"grey--text",attrs:{name:"slide-x-reverse-transition"}},[t.sortOptionsActive?a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-select",{attrs:{label:"Sort By",items:t.sortable},model:{value:t.sortAttribute,callback:function(e){t.sortAttribute=e},expression:"sortAttribute"}})],1),a("v-flex",{attrs:{xs7:"","justify-space-between":""}},[a("v-radio-group",{staticClass:"text-xs-center",attrs:{row:""},model:{value:t.ascending,callback:function(e){t.ascending=e},expression:"ascending"}},[a("v-radio",{attrs:{label:"ascending",value:!0}}),a("v-radio",{attrs:{label:"descending",value:!1}},[a("v-spacer")],1)],1)],1)],1):t._e()],1),t.loading?a("v-progress-linear",{attrs:{transition:"fade-transition",indeterminate:!0,color:"info"}}):t._e()],1),a("v-flex",{staticClass:"text-lg-right",attrs:{xs1:"","offset-md3":""}},[a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",flat:"",icon:"",large:""},on:{click:t.toggleSortOptions},slot:"activator"},[a("v-icon",[t._v("sort")])],1),a("span",[t._v("Sort Options")])],1)],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-container",{staticClass:"grey lighten-4",attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-start":"","align-start":""}},t._l(t.products,function(e){return a("v-flex",t._b({key:e.slug},"v-flex",(r={},r["lg"+e.flex]=!0,r),!1),[a("ProductCard",{attrs:{product:e}})],1);var r}))],1)],1)],1)},i=[],n={render:r,staticRenderFns:i};e.a=n},NeSL:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nuxt-link",{staticClass:"lowkey_link",attrs:{to:{name:"products-slug",params:{slug:t.product.slug}},tag:"div"}},[a("v-card",[a("v-card-media",{attrs:{src:t.product.main_img_url,height:"250px"}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}})],1)],1)],1),a("v-card-title",[a("div",[a("h3",{staticClass:"headline mb-0 black--text",domProps:{textContent:t._s(t.product.name)}}),a("div",[t._v(t._s(t.product.description))])])]),a("v-card-actions",{staticClass:"white"},[a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{icon:""}},[t._v(t._s(Math.random()>.5?"add_shopping_cart":"remove_shopping_cart"))])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("bookmark")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("share")])],1)],1)],1)],1)},i=[],n={render:r,staticRenderFns:i};e.a=n},RgeR:function(t,e,a){"use strict";var r=a("h2p5");e.a={data:function(t){return{sortAttribute:null,ascending:!1,sortOptionsActive:!1,sortable:[{text:"name",value:"name"},{text:"description",value:"description"},{text:"Min Price",value:"price_low",render:function(t){return t?"$"+t:"None"}},{text:"Max Price",value:"price_high",render:function(t){return t?"$"+t:"None"}},{text:"Created (Date)",value:"created_at",render:function(t){return new Date(parseInt(t)).toLocaleDateString()}},{text:"Updated (Date)",value:"updated_at",render:function(t){return new Date(parseInt(t)).toLocaleDateString()}}]}},props:{products:{type:Array,required:!0},loading:{type:Boolean,required:!1,default:!1},initial_sort_attr:{type:String,required:!0},initial_sort_ascending:{type:Boolean,required:!0}},components:{ProductCard:r.a},watch:{ascending:function(){this.emitSort()},sortAttribute:function(){this.emitSort()}},methods:{emitSort:function(){this.$emit("sort",{ascending:this.ascending,attribute:this.sortAttribute})},activateSortOptions:function(){this.sortOptionsActive=!0},deactivateSortOptions:function(){this.sortOptionsActive=!1},toggleSortOptions:function(){this.sortOptionsActive=!this.sortOptionsActive}},mounted:function(){this.sortAttribute=this.initial_sort_attr,this.ascending=this.initial_sort_ascending}}},"a/Hr":function(t,e,a){var r=a("2vp6");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("db74877c",r,!0)},age9:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},bbhP:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},h2p5:function(t,e,a){"use strict";function r(t){a("DN0Y")}var i=a("KxcQ"),n=a("NeSL"),s=a("VU/8"),o=r,c=s(i.a,n.a,!1,o,null,null);e.a=c.exports},hp28:function(t,e,a){"use strict";function r(t){a("5uCL")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("iL/k"),n=a("p43V"),s=a("VU/8"),o=r,c=s(i.a,n.a,!1,o,null,null);e.default=c.exports},"iL/k":function(t,e,a){"use strict";var r=a("Dd8w"),i=a.n(r),n=a("Xxa5"),s=a.n(n),o=a("exGp"),c=a.n(o),u=a("nU52"),l=a("BcRc");e.a={data:function(){return{search:"",searchActive:!1,loading:!1,products:[],pageCount:1,pageNum:1,sortBy:{attribute:"updated_at",ascending:!0},views:{grid:"ProductGrid",table:"ProductTable"},activeView:"grid"}},asyncData:function(){function t(t){return e.apply(this,arguments)}var e=c()(s.a.mark(function t(e){var a,r,i,n,o,c,u,l,d,v,p,f,h,g,x,_,m=e.store,b=e.query;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=b.page,r=void 0===a?1:a,i=b.view,n=void 0===i?"grid":i,o=b.search,c=void 0===o?"":o,u=b.sort_ascending,l=void 0===u?"false":u,d=b.sort_attribute,v=void 0===d?"updated_at":d,l=JSON.parse(l),p={ascending:l,attribute:v},r=parseInt(r),f=!!c,h=15,t.next=8,m.dispatch("products/getProducts",{num:r,size:h,search:c,orderBy:p});case 8:return g=t.sent,x=g.products,_=g.pagination.pageCount,t.abrupt("return",{products:x,pageCount:_,pageNum:r,activeView:n,search:c,searchActive:f,sortBy:p});case 12:case"end":return t.stop()}},t,this)}));return t}(),computed:{activeComponent:function(){return this.views[this.activeView]}},methods:{searchProducts:function(){function t(){return e.apply(this,arguments)}var e=c()(s.a.mark(function t(){var e;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,e=this.search,this.$router.push({query:i()({},this.$route.query,{page:1,search:e})}),this.loading=!1;case 4:case"end":return t.stop()}},t,this)}));return t}(),tryDeactivate:function(){this.search.length||this.deactivateSearch()},activateSearch:function(){this.searchActive=!0},deactivateSearch:function(){this.searchActive=!1},updateRouteWithPageNumber:function(){var t=this.pageNum;this.$router.push({query:i()({},this.$route.query,{page:t})})},updateRouteWithSortParams:function(t){var e=t.ascending,a=t.attribute;this.$router.push({query:i()({},this.$route.query,{sort_ascending:e,sort_attribute:a})})},switchView:function(t){this.$router.push({query:i()({},this.$route.query,{view:t})})}},watch:{pageNum:function(){console.log("updated"),this.updateRouteWithPageNumber()},sortBy:{deep:!0}},components:{ProductGrid:u.a,ProductTable:l.a}}},nU52:function(t,e,a){"use strict";function r(t){a("a/Hr")}var i=a("RgeR"),n=a("NFbd"),s=a("VU/8"),o=r,c=s(i.a,n.a,!1,o,null,null);e.a=c.exports},p43V:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-tabs",{attrs:{dark:"",grow:"",default:"views[activeView]"},model:{value:t.activeView,callback:function(e){t.activeView=e},expression:"activeView"}},[a("v-toolbar",{staticClass:"primary",attrs:{"not-extended":""}},[a("v-toolbar-side-icon",{staticClass:"white--text text--darken-1"}),a("v-toolbar-title",{staticClass:"white--text"},[t._v("Products")]),t.searchActive?t._e():a("v-spacer"),a("transition",{staticClass:"grey--text",attrs:{name:"slide-x-reverse-transition"}},[t.searchActive?a("v-flex",{attrs:{sm6:"","offset-sm3":"","justify-content":"right"}},[a("form",{on:{submit:function(e){e.preventDefault(),t.searchProducts(e)}}},[a("v-text-field",{attrs:{autofocus:!0,transition:"slide-x-reverse-transition",solo:"",label:"Search","append-icon":"keyboard_voice","prepend-icon":"search",color:"black","text-color":"black"},on:{blur:t.tryDeactivate},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]):t._e()],1),a("v-spacer"),t.searchActive?t._e():a("v-btn",{staticClass:"white--text text--darken-1",attrs:{icon:""},on:{click:t.activateSearch}},[a("v-icon",[t._v("search")])],1),a("v-btn",{staticClass:"white--text text--darken-1",attrs:{icon:""}},[a("v-icon",[t._v("more_vert")])],1)],1),a("v-tabs-bar",[a("v-tabs-slider",{attrs:{color:"yellow"}}),t._l(t.views,function(e,r){return a("v-tabs-item",{key:r,attrs:{nuxt:!0,target:r,href:"#"+r,ripple:""},on:{click:function(e){t.switchView(r)}}},[t._v(t._s(r))])}),a("v-btn",{staticClass:"white--text text--darken-1",attrs:{nuxt:!0,to:{name:"products-new"},flat:!0}},[t._v("New Product")])],2),a("v-tabs-items",t._l(t.views,function(e,r){return a("v-tabs-content",{key:r,attrs:{id:r}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},[a(e,{tag:"component",attrs:{products:t.products,loading:t.loading,initial_sort_attr:t.sortBy.attribute,initial_sort_ascending:t.sortBy.ascending},on:{sort:t.updateRouteWithSortParams}})],1)],1)})),a("v-container",[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs8:""}},[a("v-card",[a("v-card-text",[a("v-pagination",{attrs:{length:t.pageCount},model:{value:t.pageNum,callback:function(e){t.pageNum=e},expression:"pageNum"}})],1)],1)],1)],1)],1)],1)],1)},i=[],n={render:r,staticRenderFns:i};e.a=n},"w+9/":function(t,e,a){var r=a("bbhP");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("f0e9b488",r,!0)},wkSj:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])}});
//# sourceMappingURL=index.8fe59ded26748d4f8832.js.map