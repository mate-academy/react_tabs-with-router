(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=c(6),b=c.n(i),j=(c(14),c(15),c(16),c(2)),r=(c(0),c(1)),l=function(e){var t=e.tabs,c=Object(j.h)().tabId,a=t.find((function(e){return e.id===c}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{"data-cy":"tab",className:b()({"is-active":(null===a||void 0===a?void 0:a.id)===e.id}),children:Object(r.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"tab-content",children:(null===a||void 0===a?void 0:a.content)||"Please select a tab"})]})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(l,{tabs:d})]})},h=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:"Home"}),Object(r.jsx)(n.c,{to:"tabs",className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{path:"/",element:Object(r.jsx)("h1",{className:"title",children:"Home page"})}),Object(r.jsx)(j.b,{path:"/home",element:Object(r.jsx)(j.a,{to:"/"})}),Object(r.jsxs)(j.b,{path:"tabs",children:[Object(r.jsx)(j.b,{index:!0,element:Object(r.jsx)(o,{})}),Object(r.jsx)(j.b,{path:":tabId",element:Object(r.jsx)(o,{})})]}),Object(r.jsx)(j.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2bb6f2eb.chunk.js.map