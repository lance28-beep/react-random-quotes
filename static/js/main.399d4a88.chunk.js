(this["webpackJsonprandom-qoute"]=this["webpackJsonprandom-qoute"]||[]).push([[0],{30:function(t,e,c){},52:function(t,e,c){},53:function(t,e,c){},59:function(t,e,c){},61:function(t,e,c){"use strict";c.r(e);var o=c(0),n=c.n(o),a=c(8),r=c.n(a),s=(c(30),c(15)),u=c(14),i=c.n(u),d=c(7),l=(c(52),c(11)),b=Object(l.b)({name:"quotes",initialState:{quotes:null},reducers:{randomQoutes:function(t,e){t.quotes=e.payload}}}),j=b.actions.randomQoutes,h=function(t){return t.quotes.quotes},f=b.reducer,O=c(24),q=c.n(O),v=(c(53),c(2));var m=function(t){var e=t.Click,c=t.color,o=Object(d.c)(h);return Object(v.jsxs)("div",{className:"handlers",children:[Object(v.jsx)("a",{id:"tweet-quote",target:"blanck",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=".concat(encodeURIComponent('"'+(null===o||void 0===o?void 0:o.quote)+'" '+(null===o||void 0===o?void 0:o.author))),children:Object(v.jsx)(q.a,{})}),Object(v.jsx)("button",{id:"new-quote",onClick:e,style:{backgroundColor:"".concat(c)},children:"Random"})]})};c(59);var x=function(t){var e=t.quote,c=t.author;return Object(v.jsxs)("div",{className:"quotes",children:[Object(v.jsxs)("h1",{id:"text",children:[Object(v.jsx)("span",{children:'"'}),e]}),Object(v.jsx)("span",{id:"author",children:c})]})};var p=function(){var t=Object(d.c)(h),e=Object(o.useState)([]),c=Object(s.a)(e,2),n=c[0],a=c[1],r=Object(d.b)(j),u=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],l=Object(o.useState)("#161623"),b=Object(s.a)(l,2),f=b[0],O=b[1];return Object(o.useEffect)((function(){return i.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){a(t.data.quotes[Math.floor(Math.random()*t.data.quotes.length-1)])})),function(){}}),[a]),Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("div",{className:"background__design",style:{backgroundColor:"".concat(f)},children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"container__quotes",id:"quote-box",children:[Object(v.jsx)(x,{quote:(null===t||void 0===t?void 0:t.quote)||(null===n||void 0===n?void 0:n.quote),author:(null===t||void 0===t?void 0:t.author)||(null===n||void 0===n?void 0:n.author)}),Object(v.jsx)(m,{Click:function(){O(u[Math.floor(Math.random()*u.length-1)]),i.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){a(t.data.quotes[Math.floor(Math.random()*t.data.quotes.length-1)])})),r(j(n))},color:f})]})})})})},g=Object(l.a)({reducer:{quotes:f}});r.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(d.a,{store:g,children:Object(v.jsx)(p,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.399d4a88.chunk.js.map