"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[581],{7504:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(501),c=e(6871),i=e(184),a=function(n){var t=n.movie,e=(0,c.TH)();return(0,i.jsx)("div",{children:(0,i.jsxs)(r.rU,{to:{pathname:"/movies/".concat(t.id),state:{from:e}},children:[(0,i.jsx)("img",{src:t.poster_path?"".concat("https://image.tmdb.org/t/p/w400").concat(t.poster_path):"../../../public/sorry-poster.jpg",alt:t.title}),(0,i.jsxs)("h2",{children:[" ",t.original_title]})]})})},o=function(n){var t=n.movies;return(0,i.jsx)("ul",{children:t.results.map((function(n){return(0,i.jsx)("li",{children:(0,i.jsx)(a,{movie:n})},n.id)}))})}},1581:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var r=e(885),c=e(2791),i=e(7504),a=e(1207),o=e(184);function u(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],u=t[1];return(0,c.useEffect)((function(){a.PV().then(u)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trending movies"}),e&&(0,o.jsx)(i.Z,{movies:e})]})}},1207:function(n,t,e){e.d(t,{PV:function(){return l},Mc:function(){return d},mv:function(){return h}});var r=e(5861),c=e(7757),i=e.n(c),a=e(4569),o=e.n(a),u=(e(5462),"025512eaa3724bc89359bc473e706bcf"),s="https://api.themoviedb.org/3/";function p(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(i().mark((function n(){var t,e,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n.next=3,o().get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function l(){return p("".concat(s,"trending/movie/day?api_key=").concat(u))}function d(n){return p("".concat(s,"movie/").concat(n,"?api_key=").concat(u,"&language=en-US&append_to_response=reviews,credits,videos"))}function h(n){return p("".concat(s,"search/movie/?api_key=").concat(u,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))}}}]);
//# sourceMappingURL=581.0357e16c.chunk.js.map