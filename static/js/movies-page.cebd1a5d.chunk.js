"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{3484:function(n,e,t){t.d(e,{W:function(){return c}});var r,o=t(168),i=t(6031),a=t(184),c=function(n){var e=n.children;return(0,a.jsx)(u,{children:e})},u=i.ZP.div(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 15px;\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-bottom: 24px;\n"])))},6736:function(n,e,t){t.d(e,{r:function(){return h}});var r,o,i,a,c,u,s=t(168),l=t(501),d=t(6871),p=t(6031),f=t(9366),g=t(184),h=function(n){var e=n.id,t=n.title,r=n.img,o=(0,d.TH)();return(0,g.jsx)(x,{children:(0,g.jsxs)(m,{to:"/movies/".concat(e),state:{prevUrl:o},children:[(0,g.jsx)(v,{children:(0,g.jsx)(b,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):f,alt:t})}),(0,g.jsx)(y,{children:(0,g.jsx)(Z,{children:t})})]})})},x=p.ZP.li(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),m=(0,p.ZP)(l.OL)(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n\n  border-radius: 4px;\n  text-decoration: none;\n  padding: 10px;\n  background-color: ",";\n  transition: box-shadow 250ms ease-in-out;\n  &:hover {\n    cursor: pointer;\n    color: ",";\n    box-shadow: 0 0 20px 5px rgba(255, 107, 1, 0.251),\n      0 0 15px 3px rgb(255, 107, 1);\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.accentColor})),v=p.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 350px;\n  border-radius: 4px;\n  overflow: hidden;\n"]))),b=p.ZP.img(a||(a=(0,s.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n"]))),y=p.ZP.div(c||(c=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n  height: 60px;\n"]))),Z=p.ZP.h3(u||(u=(0,s.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  color: ",";\n"])),(function(n){return n.theme.cardTitleColor}))},5174:function(n,e,t){t.d(e,{O:function(){return c}});var r,o=t(168),i=t(6031),a=t(184),c=function(n){var e=n.children;return(0,a.jsx)(u,{children:e})},u=i.ZP.ul(r||(r=(0,o.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))},8914:function(n,e,t){t.d(e,{i:function(){return u}});var r=t(5861),o=t(885),i=t(7757),a=t.n(i),c=t(2791),u=function(n,e,t){var i=(0,c.useState)(t),u=(0,o.Z)(i,2),s=u[0],l=u[1],d=(0,c.useState)(!1),p=(0,o.Z)(d,2),f=p[0],g=p[1],h=(0,c.useState)(),x=(0,o.Z)(h,2),m=x[0],v=x[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,n();case 4:t=e.sent,l(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(e.t0);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),e),{data:s,loading:f,error:m}}},6854:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,o,i,a,c=t(885),u=t(3484),s=t(8708),l=t(5174),d=t(6736),p=t(168),f=t(2791),g=t(8185),h=t(6031),x=t(184),m=function(n){var e=n.onSubmit,t=(0,f.useState)(""),r=(0,c.Z)(t,2),o=r[0],i=r[1];return(0,x.jsx)(v,{children:(0,x.jsxs)(b,{children:[(0,x.jsx)(y,{type:"submit",onClick:function(n){n.preventDefault(),e(o),i("")},children:(0,x.jsx)("span",{children:(0,x.jsx)(g.dVI,{size:24})})}),(0,x.jsx)(Z,{type:"text",autoComplete:"off",autoFocus:!0,name:"searchQuery",placeholder:"Search movies",value:o,onChange:function(n){var e=n.target.value.trim().toLowerCase();i(e)}})]})})},v=h.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n"]))),b=h.ZP.form(o||(o=(0,p.Z)(["\n  position: relative;\n"]))),y=h.ZP.button(i||(i=(0,p.Z)(["\n  padding: 5px;\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  border: none;\n  background-color: initial;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 3;\n  cursor: pointer;\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.inputTextColor}),(function(n){return n.theme.accentColor})),Z=h.ZP.input(a||(a=(0,p.Z)(["\n  width: 400px;\n  height: 32px;\n  padding: 10px;\n  font-size: 21px;\n  border: none;\n  outline: none;\n  color: rgba(249, 249, 249, 0.67);\n  background: ",";\n  border-radius: 5px;\n"])),(function(n){return n.theme.inputBgColor})),j=t(8914),w=t(501),k=t(8235),C=t(8777),P=function(){var n=(0,w.lr)(),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=t.get("query");null===o&&(o="war");var i=(0,j.i)((function(){return(0,C.bI)(o)}),[o],void 0),a=i.data,p=i.loading,f=i.error;return p?(0,x.jsx)(s.a,{}):(f&&k.Am.error("Sorry, server error, there are no search films",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),0===(null===a||void 0===a?void 0:a.results.length)&&k.Am.error("Sorry, there are no films matching your search query. Please try again.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),(0,x.jsxs)(u.W,{children:[(0,x.jsx)(m,{onSubmit:function(n){r({query:n})}}),a&&(0,x.jsx)(l.O,{children:a.results.map((function(n){return(0,x.jsx)(d.r,{title:n.title,id:n.id,img:n.poster_path},n.id)}))})]}))}},8777:function(n,e,t){t.d(e,{uV:function(){return p},Y5:function(){return l},Hx:function(){return d},bI:function(){return s},wr:function(){return u}});var r=t(4569),o=t.n(r),i=function(n){return o().get(n)},a="a4073c3aa9b0e56e387e6992db67c6da",c="https://api.themoviedb.org/3",u=function(){return i("".concat(c,"/trending/movie/week?api_key=").concat(a))},s=function(n){return i("".concat(c,"/search/movie/?api_key=").concat(a,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},l=function(n){return i("".concat(c,"/movie/").concat(n,"?api_key=").concat(a))},d=function(n){return i("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))},p=function(n){return i("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(a,"&language=en-US"))}},9366:function(n,e,t){n.exports=t.p+"static/media/movie-poster-coming-soon.7c02dcee67d3c6af8ac5.jpg"}}]);
//# sourceMappingURL=movies-page.cebd1a5d.chunk.js.map