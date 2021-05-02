(this.webpackJsonplivres=this.webpackJsonplivres||[]).push([[0],{34:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(17),s=n.n(r),a=n(10),o=(n(34),n(12)),i=n(3),u=n(7),l=n(9),b=n.n(l),j=n(14),x="",f=n(1);function h(e){var t=e.by,n=e.setBy,r=Object(c.useState)(!1),s=Object(u.a)(r,2),a=s[0],o=s[1];return Object(f.jsxs)("div",{className:"relative flex-shrink-0",children:[Object(f.jsxs)("button",{className:"px-4 py-2",onClick:function(){return o(!a)},children:["by ",t," \u2193"," "]}),Object(f.jsx)("ul",{className:"absolute bg-white shadow rounded",children:a&&O.map((function(e,t){return Object(f.jsx)("li",{children:Object(f.jsx)("button",{className:"w-full text-left px-4 py-1 hover:bg-gray-100",onClick:function(){o(!1),n(e)},children:e})},t)}))})]})}var O=["title","description","isbn"];function d(e){var t=e.query,n=e.by,c=e.setBy,r=e.setQuery;return Object(f.jsxs)("div",{className:"flex mx-auto shadow-md w-full sm:w-2/3 xl:w-2/5 mb-4",children:[Object(f.jsx)("input",{className:"px-4 py-2 w-full border-r-100 border-gray-100 ",value:t,onChange:function(e){return r(e.target.value)},placeholder:"Search for books"}),Object(f.jsx)(h,{by:n,setBy:c})]})}var p=n(13);function m(){return Object(f.jsxs)("svg",{className:"h-8 fill-current text-gray-300",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Object(f.jsx)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(f.jsx)("path",{d:"M17 3H7a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2zm0 15l-5-2.18L7 18V5h10v13z"})]})}function v(){return Object(f.jsxs)("svg",{className:"h-8 fill-current text-yellow-400",fill:"inherit",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Object(f.jsx)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(f.jsx)("path",{d:"M17 3H7a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2z"})]})}function k(e){var t=e.book,n=e.bookmarkHandler,r=Object(c.useState)(t.book?Object(p.a)(Object(p.a)({},t.book),{},{bookmark:!0}):t),s=Object(u.a)(r,2),a=s[0],o=s[1];return Object(f.jsxs)("li",{className:"flex shadow-md md:min-h-56 rounded-xl px-3 py-4 bg-white",children:[Object(f.jsx)("div",{className:"h-full w-1/4 md:w-1/3 flex-shrink-0",children:Object(f.jsx)("img",{className:"object-cover h-full w-full",src:a.image,alt:a.title})}),Object(f.jsxs)("div",{className:"flex flex-col justify-between flex-grow pt-3 pl-3",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{className:"font-semibold",children:a.title}),Object(f.jsxs)("p",{className:"text-xs text-gray-400 mb-1.5",children:["ISBN ",a.isbn]}),Object(f.jsx)("p",{className:"text-gray-600",children:a.description})]}),Object(f.jsxs)("div",{className:"flex justify-between pt-2",children:[Object(f.jsxs)("span",{className:"font-semibold",children:[a.price," "]}),a.bookmark?Object(f.jsx)("span",{className:"",children:Object(f.jsx)(v,{})}):Object(f.jsx)("button",{onClick:function(){return n(a,o)},children:Object(f.jsx)(m,{})})]})]})]})}function g(e){var t=e.books,n=Object(a.b)(),c=function(e,t){var c;n((c=e.id,function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/api/bookmarks/").concat(c),{method:"POST"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t((function(e){return Object(p.a)(Object(p.a)({},e),{},{bookmark:!0})}))};return Object(f.jsx)("ul",{className:"grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 pb-4",children:t.map((function(e,t){return Object(f.jsx)(k,{book:e,bookmarkHandler:c},t)}))})}function y(e){var t=e.children;return Object(f.jsxs)("div",{className:"containe md:w-full mx-auto text-gray-800 px-4 md:px-10 pt-1 min-h-screen bg-gray-50 ",children:[Object(f.jsxs)("header",{className:"my-4",children:[Object(f.jsx)("h1",{className:"font-bold text-4xl text-center text-green-500 py-2",children:"Livres"}),Object(f.jsxs)("nav",{className:"text-center",children:[Object(f.jsx)(o.b,{to:"/",activeClassName:"underline text-green-500",className:"px-2 hover:underline text-lg text-green-400",exact:!0,children:"Home"}),Object(f.jsx)(o.b,{to:"/bookmarks",activeClassName:"underline text-green-500",className:"px-2 hover:underline text-lg text-green-400",exact:!0,children:"Bookmarks"})]})]}),Object(f.jsx)("main",{children:t})]})}function w(e){var t=e.onClick,n=e.children;return Object(f.jsx)("button",{className:"shadow px-4 py-2 bg-green-500 text-green-50 rounded",onClick:t,children:n})}function N(){var e=Object(a.b)(),t=Object(i.f)(),n=Object(c.useState)(!1),r=Object(u.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)(""),h=Object(u.a)(l,2),O=h[0],p=h[1],m=Object(c.useState)("title"),v=Object(u.a)(m,2),k=v[0],N=v[1],B=Object(c.useState)(0),C=Object(u.a)(B,2),E=C[0],K=C[1],_=Object(a.c)((function(e){return e}));Object(c.useEffect)((function(){e({type:"CLEAR_BOOKS"}),K(0)}),[e,t]),Object(c.useEffect)((function(){K(0);var t=setTimeout((function(){O&&(o(!0),e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"title",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return function(){var c=Object(j.a)(b.a.mark((function c(r){var s;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("".concat(x,"/api/books/search?query=").concat(e,"&by=").concat(t,"&page=").concat(n)).then((function(e){return e.json()}));case 2:s=c.sent,r({type:"GET_BOOKS",books:s});case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(O,k,0)).then((function(){o(!1)})))}),500);return function(){return clearTimeout(t)}}),[e,O,k]),Object(c.useEffect)((function(){O&&e(function(e,t,n){return function(){var c=Object(j.a)(b.a.mark((function c(r){var s;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("".concat(x,"/api/books/search?query=").concat(e,"&by=").concat(t,"&page=").concat(n)).then((function(e){return e.json()}));case 2:s=c.sent,r({type:"ADD_BOOKS",books:s});case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(O,k,E))}),[e,E]);var H;return H=_?_.length?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{books:_}),Object(f.jsx)("div",{className:"text-center py-8",children:Object(f.jsx)(w,{onClick:function(){K((function(e){return e+1}))},children:"Load More"})})]}):Object(f.jsx)(S,{children:"No books found"}):Object(f.jsx)(S,{className:"text-center",children:"Start typing to search for books"}),Object(f.jsxs)(y,{children:[Object(f.jsx)(d,{query:O,by:k,setBy:N,setQuery:p}),s?Object(f.jsx)(S,{children:"Searching..."}):H]})}var S=function(e){var t=e.children;return Object(f.jsx)("p",{className:"text-center ",children:t})};function B(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e})),n=Object(c.useState)(!0),r=Object(u.a)(n,2),s=r[0],o=r[1],i=Object(c.useState)(0),l=Object(u.a)(i,2),h=l[0],O=l[1];return Object(c.useEffect)((function(){e(function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/api/bookmarks")).then((function(e){return e.json()}));case 2:n=e.sent,t({type:"GET_BOOKS",books:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){o(!1)}))}),[e]),Object(c.useEffect)((function(){h&&e(function(e){return function(){var t=Object(j.a)(b.a.mark((function t(n){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(x,"/api/bookmarks?page=").concat(e)).then((function(e){return e.json()}));case 2:c=t.sent,n({type:"ADD_BOOKS",books:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(h))}),[e,h]),Object(f.jsxs)(y,{children:[s?Object(f.jsx)("p",{className:"text-center",children:"Loading..."}):Object(f.jsx)(g,{books:t}),Object(f.jsx)("div",{className:"py-8 text-center",children:Object(f.jsx)(w,{onClick:function(){return O((function(e){return e+1}))},children:"Load More"})})]})}function C(){return Object(f.jsx)(o.a,{children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"/",component:N,exact:!0}),Object(f.jsx)(i.a,{path:"/bookmarks",component:B,exact:!0})]})})}var E=n(25),K=n(26),_=n(24);var H=Object(E.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKS":return t.books;case"ADD_BOOKS":return[].concat(Object(_.a)(e),Object(_.a)(t.books));case"CLEAR_BOOKS":return null;default:return e}}),Object(E.a)(K.a));s.a.render(Object(f.jsx)(a.a,{store:H,children:Object(f.jsx)(C,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6353e06a.chunk.js.map