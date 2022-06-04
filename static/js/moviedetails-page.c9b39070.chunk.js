"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[756],{3484:function(n,e,t){t.d(e,{W:function(){return a}});var r,o=t(168),i=t(6031),c=t(184),a=function(n){var e=n.children;return(0,c.jsx)(s,{children:e})},s=i.ZP.div(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 15px;\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-bottom: 24px;\n"])))},8914:function(n,e,t){t.d(e,{i:function(){return s}});var r=t(5861),o=t(885),i=t(7757),c=t.n(i),a=t(2791),s=function(n,e,t){var i=(0,a.useState)(t),s=(0,o.Z)(i,2),l=s[0],u=s[1],d=(0,a.useState)(!1),p=(0,o.Z)(d,2),f=p[0],x=p[1],h=(0,a.useState)(),m=(0,o.Z)(h,2),g=m[0],v=m[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,n();case 4:t=e.sent,u(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(e.t0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),e),{data:l,loading:f,error:g}}},797:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var r,o,i,c,a,s,l,u,d,p,f,x,h,m,g,v,Z,b,j,w=t(168),y=t(885),k=t(2791),P=t(6871),C=t(6031),_=t(184),S=function(){var n=(0,P.s0)(),e=(0,P.TH)().state,t=(0,k.useState)((function(){return e?"".concat(e.prevUrl.pathname).concat(e.prevUrl.search):"/"})),r=(0,y.Z)(t,1)[0];return(0,_.jsx)(z,{children:(0,_.jsx)(U,{onClick:function(){n(r)},children:" Go back"})})},z=C.ZP.div(r||(r=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n"]))),U=C.ZP.button(o||(o=(0,w.Z)(["\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  transition: color 250ms ease-in-out;\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(n){return n.theme.buttonBgColor}),(function(n){return n.theme.buttonTextColor}),(function(n){return n.theme.accentColor})),O=t(3484),T=t(8708),A=t(8914),D=t(8235),W=t(8777),B=t(9366),H=function(){var n=(0,P.UO)().movieId,e=(0,A.i)((function(){return(0,W.Y5)(n)}),[n],void 0),t=e.data,r=e.loading,o=e.error;return r?(0,_.jsx)(T.a,{}):(o&&D.Am.error("Sorry, server error, there are no films details",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),t&&(0,_.jsx)(G,{children:(0,_.jsxs)(I,{children:[(0,_.jsx)(Y,{children:(0,_.jsx)(q,{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):B,alt:t.title})}),(0,_.jsxs)(E,{children:[(0,_.jsx)(L,{children:t.title}),(0,_.jsxs)(N,{children:["User score: ",(0,_.jsxs)(R,{children:[10*t.vote_average,"%"]})]}),(0,_.jsx)(N,{children:"Overview:"}),(0,_.jsx)(V,{children:t.overview}),(0,_.jsxs)(F,{children:[(0,_.jsx)(N,{children:"Genres:"}),(0,_.jsx)(J,{children:t.genres.map((function(n){return(0,_.jsx)(K,{children:n.name},n.id)}))})]})]})]})}))},G=C.ZP.div(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),I=C.ZP.div(c||(c=(0,w.Z)(["\n  display: flex;\n  margin-bottom: 30px;\n"]))),Y=C.ZP.div(a||(a=(0,w.Z)(["\n  display: block;\n  width: 480px;\n  height: 720px;\n  border-radius: 20px;\n  overflow: hidden;\n  margin-right: 50px;\n  object-fit: contain;\n"]))),q=C.ZP.img(s||(s=(0,w.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n"]))),E=C.ZP.div(l||(l=(0,w.Z)(["\n  max-width: 480px;\n"]))),L=C.ZP.h2(u||(u=(0,w.Z)(["\n  font-style: normal;\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 40px;\n  color: ",";\n  margin: 0;\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.infoTitleColor})),N=C.ZP.p(d||(d=(0,w.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 24px;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"])),(function(n){return n.theme.infoTextColor})),R=C.ZP.span(p||(p=(0,w.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 32px;\n  color: ",";\n"])),(function(n){return n.theme.infoDescrColor})),V=C.ZP.span(f||(f=(0,w.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 32px;\n  color: ",";\n  margin: 0;\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.infoDescrColor})),F=C.ZP.div(x||(x=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: baseline;\n"]))),J=C.ZP.ul(h||(h=(0,w.Z)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),K=C.ZP.li(m||(m=(0,w.Z)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 32px;\n  padding: 0px 5px;\n  border: 2px solid ",";\n  border-radius: 10px;\n  color: ",";\n  margin-left: 5px;\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.infoDescrColor})),M=t(501),Q=function(){return(0,_.jsxs)(X,{children:[(0,_.jsx)($,{children:"Additional information"}),(0,_.jsxs)(nn,{children:[(0,_.jsx)(en,{children:(0,_.jsx)(tn,{to:"cast",children:"Cast"})}),(0,_.jsx)(en,{children:(0,_.jsx)(tn,{to:"reviews",children:"Reviews"})})]})]})},X=C.ZP.div(g||(g=(0,w.Z)(["\n  /* display: flex;\n  align-items: center; */\n  margin-bottom: 15px;\n"]))),$=C.ZP.p(v||(v=(0,w.Z)(["\n  display: block;\n  font-weight: 700;\n  font-size: 24px;\n  margin: 0;\n  margin-bottom: 15px;\n  color: ",";\n  margin-bottom: 15px;\n"])),(function(n){return n.theme.titleNavDetailsColor})),nn=C.ZP.ul(Z||(Z=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n"]))),en=C.ZP.li(b||(b=(0,w.Z)(["\n  margin-left: 15px;\n  &:first-child {\n    margin-left: 0;\n  }\n"]))),tn=(0,C.ZP)(M.OL)(j||(j=(0,w.Z)(["\n  display: block;\n  padding: 15px;\n  border: none;\n  border-radius: 15px;\n  text-decoration: none;\n  background-color: ",";\n  color: ",";\n  transition: color 250ms ease-in-out;\n  &.active {\n    color: ",";\n  }\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(n){return n.theme.buttonBgColor}),(function(n){return n.theme.buttonTextColor}),(function(n){return n.theme.accentColor}),(function(n){return n.theme.accentColor})),rn=(0,k.lazy)((function(){return t.e(53).then(t.bind(t,9139))})),on=(0,k.lazy)((function(){return t.e(163).then(t.bind(t,6280))})),cn=function(){return(0,_.jsxs)(O.W,{children:[(0,_.jsx)(S,{}),(0,_.jsx)(H,{}),(0,_.jsx)(Q,{}),(0,_.jsx)("div",{children:(0,_.jsxs)(P.Z5,{children:[(0,_.jsx)(P.AW,{path:"cast",element:(0,_.jsx)(k.Suspense,{fallback:(0,_.jsx)(T.a,{}),children:(0,_.jsx)(rn,{})})}),(0,_.jsx)(P.AW,{path:"reviews",element:(0,_.jsx)(k.Suspense,{fallback:(0,_.jsx)(T.a,{}),children:(0,_.jsx)(on,{})})})]})})]})}},8777:function(n,e,t){t.d(e,{uV:function(){return p},Y5:function(){return u},Hx:function(){return d},bI:function(){return l},wr:function(){return s}});var r=t(4569),o=t.n(r),i=function(n){return o().get(n)},c="a4073c3aa9b0e56e387e6992db67c6da",a="https://api.themoviedb.org/3",s=function(){return i("".concat(a,"/trending/movie/week?api_key=").concat(c))},l=function(n){return i("".concat(a,"/search/movie/?api_key=").concat(c,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},u=function(n){return i("".concat(a,"/movie/").concat(n,"?api_key=").concat(c))},d=function(n){return i("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))},p=function(n){return i("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"))}},9366:function(n,e,t){n.exports=t.p+"static/media/movie-poster-coming-soon.7c02dcee67d3c6af8ac5.jpg"}}]);
//# sourceMappingURL=moviedetails-page.c9b39070.chunk.js.map