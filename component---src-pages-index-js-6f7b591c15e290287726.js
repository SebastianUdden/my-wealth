(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(156),u=t(154),c=t(148),i=t.n(c),l=(t(74),t(149)),s=t(146),d=t(175),m=t.n(d),f=(t(161),t(177)),g=t.n(f),p=t(178),v=t.n(p),h=function(){var e=g()(m.a.mark(function e(n,t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("url: ",n),e.next=3,v.a.get(n,{params:{token:t}}).then(function(e){return console.log("GET-response: ",e),e&&e.data}).catch(function(e){return console.log("GET-error: ",e),e});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),E=function(){var e=g()(m.a.mark(function e(n,t,r){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(n,t,{params:{token:r}}).then(function(e){return console.log("POST-response: ",e),e&&e.data&&e.data}).catch(function(e){return console.log("POST-error: ",e),e});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(){var e=g()(m.a.mark(function e(n,t){var r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete(n).then(function(e){return console.log("DELETE-response: ",e),e&&e.data&&e.data}).catch(function(e){return console.log("DELETE-error: ",e),e});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),y="https://guarded-cove-61734.herokuapp.com";function w(){var e=i()(["\n  width: 100%;\n  min-width: 50vw;\n  padding: 0.5rem;\n  background-color: ",";\n  color: ",";\n  border: none;\n  border-bottom: 1px solid ",";\n  outline: none;\n  resize: none;\n"]);return w=function(){return e},e}var k=function(e){var n=e.value,t=e.setValue,r=e.rows,o=e.setRows;return a.a.createElement(S,{id:"ChatInput",placeholder:"Message...",rows:r,value:n,onChange:function(e){var n=e.target.rows;e.target.rows=1;var r=~~(e.target.scrollHeight/24);r===n&&(e.target.rows=r),r>=25&&(e.target.rows=25,e.target.scrollTop=e.target.scrollHeight),t(e.target.value),o(r<25?r:25)}})},S=l.a.textarea(w(),s.a.darkerGrey,s.a.white,s.a.white);function x(){var e=i()(["\n  padding: 0.6rem 0.6rem;\n  font-size: 1.5em;\n  border: none;\n  border-radius: 10rem;\n  background-color: ",";\n  color: ",";\n"]);return x=function(){return e},e}function j(){var e=i()(["\n  width: 100%;\n  min-width: 50vw;\n  padding: 0.5rem;\n  background-color: ",";\n  color: ",";\n  border: none;\n  border-bottom: 1px solid ",";\n  outline: none;\n  border: 1px solid red;\n  height: 100%;\n"]);return j=function(){return e},e}function O(){var e=i()(["\n  background-color: ",";\n  padding: 1rem;\n  display: flex;\n  justify-content: space-evenly;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]);return O=function(){return e},e}var T=function(e,n){setTimeout(function(){e(""),n(1),window.scrollTo(0,document.body.scrollHeight)},100)},C=function(e){var n=e.userId,t=e.setDbUpdate,o=e.dbUpdate,u=e.token,c=Object(r.useState)(""),i=c[0],l=c[1],s=Object(r.useState)(1),d=s[0],m=s[1],f=Object(r.useState)(!1),g=f[0],p=f[1],v=function(e){var n=Object(r.useState)(!1),t=n[0],a=n[1];function o(n){n.key===e&&a(!0)}var u=function(n){n.key===e&&a(!1)};return Object(r.useEffect)(function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",u),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",u)}},[]),t}("Enter");return Object(r.useEffect)(function(){setTimeout(function(){return T(l,m)},200)},[]),v&&!g&&i&&(p(!0),E(y+"/messages",{text:i,user:n},u).then(function(e){console.log("userId: ",n),console.log("CHAT-CREATE-KEYPRESS-response: ",e),t(!o),document.getElementById("ChatInput").focus(),setTimeout(function(){return T(l,m)},200),setTimeout(function(){return p(!1)},1e3)})),a.a.createElement(a.a.Fragment,null,a.a.createElement(I,null,a.a.createElement(k,{id:"ChatInput",placeholder:"Message...",value:i,setValue:l,rows:d,setRows:m}),a.a.createElement(U,{onClick:function(){i&&!g&&(p(!0),E(y+"/messages",{text:i,user:n},u).then(function(e){console.log("userId: ",n),console.log("CHAT-CREATE-BUTTON-response: ",e),t(!o),document.getElementById("ChatInput").focus(),setTimeout(function(){return T(l,m)},200)}))}},"➣")))},I=l.a.div(O(),s.a.darkerGrey),U=(l.a.textarea(j(),s.a.darkerGrey,s.a.white,s.a.white),l.a.button(x(),s.a.white,s.a.darkGrey));function G(){var e=i()(["\n  width: 3rem;\n  height: 3rem;\n  border-radius: 5rem;\n  margin: "," 0.5rem 0 0;\n"]);return G=function(){return e},e}var L=function(e){var n=e.image,t=e.currentUser;return a.a.createElement(A,{currentUser:t,src:n,alt:"Avatar"})},A=l.a.img(G(),function(e){return e.currentUser?0:"1.2rem"});function R(){var e=i()(["\n  background-color: ",";\n  color: ",";\n  border-radius: 1rem;\n  margin-left: 0.5rem;\n  padding: 0 0.3rem;\n  :hover {\n    color: ",";\n  }\n"]);return R=function(){return e},e}function V(){var e=i()(["\n  margin: 0.1rem 0.8rem;\n  padding: 0;\n  color: ",";\n"]);return V=function(){return e},e}function M(){var e=i()(["\n  margin: 0 1rem;\n  padding: 0;\n  color: ",";\n"]);return M=function(){return e},e}function q(){var e=i()(["\n  background-color: ",";\n  margin: 0 0.2rem;\n  padding: 0.5rem 0.7rem;\n  display: flex;\n  justify-content: ",";\n  align-items: flex-start;\n  border-radius: 1rem;\n  word-break: break-word;\n\n  :hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n"]);return q=function(){return e},e}function F(){var e=i()(["\n  color: ",";\n  margin: 0.5rem 0;\n  padding: 1rem 0.5rem;\n  border-radius: 0.3rem;\n  display: flex;\n  flex-direction: ",";\n  max-width: 100%;\n"]);return F=function(){return e},e}var D=function(e){var n=e.message,t=e.users,o=e.setDbUpdate,u=e.dbUpdate,c=e.currentUser,i=e.token,l=Object(r.useState)(!1),s=l[0],d=l[1],m=t&&t.find(function(e){return e._id===n.user});return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{currentUser:c},a.a.createElement(L,{currentUser:c,image:m&&m.image}),a.a.createElement("div",null,!c&&a.a.createElement(B,null,m&&m.username),a.a.createElement(H,{empty:!n.text||!n.text.trim(),currentUser:c,onClick:function(){return d(!s)}},n.text," ",c&&s&&a.a.createElement(z,{onClick:function(){b(y+"/messages/"+n._id,i).then(function(e){console.log("response: ",e),o(!u)})}},"✕")),a.a.createElement(_,null,n.createdAt&&new Date(n.createdAt).toLocaleString()))))},P=l.a.div(F(),s.a.white,function(e){return e.currentUser?"row-reverse":"row"}),H=l.a.p(q(),function(e){return e.currentUser?s.a.darkishGrey:s.a.brightGrey},function(e){return e.empty?"flex-end":"space-between"},s.a.brightGrey),_=l.a.p(M(),s.a.brightGrey),B=l.a.p(V(),s.a.brightGrey),z=l.a.span(R(),s.a.brightGrey,s.a.white,s.a.white);function J(){var e=i()(["\n  min-height: 50vh;\n"]);return J=function(){return e},e}function N(){var e=i()(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  padding: 0.5rem 0.8rem 4rem;\n"]);return N=function(){return e},e}var W=function(e){var n=e.users,t=e.setLoggedIn,o=e.token,u=Object(r.useState)(void 0),c=u[0],i=u[1],l=Object(r.useState)(!1),s=l[0],d=l[1],m=n&&n.find(function(e){return localStorage.getItem("username")===e.username});return console.log("currentUser: ",m),Object(r.useEffect)(function(){n&&Array.isArray(n)&&0!==n.length&&!n.find(function(e){return localStorage.getItem("username")===e.username})&&t(!1),h(y+"/messages",o).then(function(e){console.log("messages: ",e),i(e)})},[s]),a.a.createElement(K,null,a.a.createElement(Q,null,c&&Array.isArray(c)&&c.map(function(e){var t=n&&n.find(function(n){return n._id===e.user});return a.a.createElement(D,{key:e._id,message:e,users:n,setDbUpdate:d,dbUpdate:s,currentUser:localStorage.getItem("username")===(t&&t.username),token:o})}),a.a.createElement(C,{userId:m&&m._id,messages:c,setMessages:i,setDbUpdate:d,dbUpdate:s,token:o})))},K=l.a.div(N()),Q=l.a.div(J());function Y(){var e=i()(["\n  display: flex;\n  background-color: ",";\n  border: none;\n  border-bottom: 1px solid ",";\n  outline: none;\n  color: ",";\n  margin: 1rem;\n  padding: 0.5rem;\n"]);return Y=function(){return e},e}var X=function(e){var n=e.placeholder,t=e.type,r=e.value,o=e.setValue;return a.a.createElement(Z,{placeholder:n,type:t,value:r,onChange:function(e){return o(e.target.value)}})},Z=l.a.input(Y(),s.a.darkerGrey,s.a.white,s.a.white);function $(){var e=i()(["\n  color: orange;\n\n  :hover {\n    color: white;\n    cursor: pointer;\n  }\n"]);return $=function(){return e},e}function ee(){var e=i()(["\n  background-color: ",";\n  color: ",";\n  padding: 0.5rem 3rem;\n  margin: 1rem;\n\n  :hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n"]);return ee=function(){return e},e}function ne(){var e=i()(["\n  margin-top: 1rem;\n  text-align: center;\n"]);return ne=function(){return e},e}var te=function(e){var n=e.setLoggedIn,t=e.setSignup,o=Object(r.useState)(!1),u=o[0],c=o[1],i=Object(r.useState)(""),l=i[0],s=i[1],d=Object(r.useState)(""),m=d[0],f=d[1],g=Object(r.useState)(""),p=g[0],v=g[1],E=Object(r.useState)(0),b=E[0],w=E[1];return Object(r.useEffect)(function(){setTimeout(function(){return c(!0)},200)},[]),Object(r.useEffect)(function(){h(y+"/users").then(function(e){console.log("Login-users: ",e),v(e)})},[b]),a.a.createElement(re,null,u&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Login"),a.a.createElement(X,{placeholder:"Username",type:"text",value:l,setValue:s}),a.a.createElement(X,{placeholder:"Password",type:"password",value:m,setValue:f}),a.a.createElement(ae,{onClick:function(){w(b+1),ue(l,m,n,p)}},"Login"),b>0&&a.a.createElement("p",{style:{color:"red"}},"Invalid login (",b,")"),a.a.createElement("p",null,"Sign up ",a.a.createElement(oe,{onClick:function(){return t(!0)}},"here"))))},re=l.a.div(ne()),ae=l.a.button(ee(),s.a.darkerGrey,s.a.white,s.a.grey),oe=l.a.span($()),ue=function(e,n,t,r){localStorage.clear(),r&&r.find(function(t){return t.username===e&&t.password===n})?(localStorage.setItem("username",e),localStorage.setItem("password",n),t(!0)):(t(!1),console.log("not loggedIn, set"))};function ce(){var e=i()(["\n  background-color: ",";\n  color: ",";\n  padding: 0.5rem 3rem;\n  margin: 1rem;\n\n  :hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n"]);return ce=function(){return e},e}function ie(){var e=i()(["\n  text-align: center;\n"]);return ie=function(){return e},e}var le=function(e){var n=e.setLoggedIn,t=e.setSignup,o=e.token,u=Object(r.useState)(!1),c=u[0],i=u[1],l=Object(r.useState)(""),s=l[0],d=l[1],m=Object(r.useState)(""),f=m[0],g=m[1],p=Object(r.useState)(""),v=p[0],E=p[1],b=Object(r.useState)(""),w=b[0],k=b[1],S=Object(r.useState)(""),x=S[0],j=S[1],O=Object(r.useState)(""),T=O[0],C=O[1],I=Object(r.useState)(""),U=I[0],G=I[1],L=Object(r.useState)(""),A=L[0],R=L[1],V=Object(r.useState)(0),M=V[0],q=V[1];return Object(r.useEffect)(function(){setTimeout(function(){return i(!0)},200)},[]),Object(r.useEffect)(function(){h(y+"/users",o).then(function(e){console.log("Signup-users: ",e),R(e)})},[M]),a.a.createElement(se,null,c&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Sign Up"),a.a.createElement(X,{placeholder:"Username",type:"text",value:s,setValue:d}),a.a.createElement(X,{placeholder:"E-mail",type:"text",value:f,setValue:g}),a.a.createElement(X,{placeholder:"Password",type:"password",value:v,setValue:E}),a.a.createElement(X,{placeholder:"First name",type:"text",value:w,setValue:k}),a.a.createElement(X,{placeholder:"Last name",type:"text",value:x,setValue:j}),a.a.createElement(X,{placeholder:"Location",type:"text",value:T,setValue:C}),a.a.createElement(X,{placeholder:"Image url",type:"text",value:U,setValue:G}),a.a.createElement(de,{onClick:function(){q(M+1),me({username:s,email:f,password:v,firstname:w,lastname:x,location:T,image:U},A,o),localStorage.clear(),n(!1),t(!1)}},"Sign Up"),M>0&&a.a.createElement("p",{style:{color:"red"}},"Invalid sign up (",M,")")))},se=l.a.div(ie()),de=l.a.button(ce(),s.a.darkerGrey,s.a.white,s.a.grey),me=function(e,n,t){n&&n.find(function(n){return n.username===e.username||n.email===e.email})||E(y+"/users",e,t).then(function(e){console.log("USER-CREATE-response: ",e)})};function fe(){var e=i()(["\n  height: 5rem;\n  display: flex;\n  align-items: center;\n"]);return fe=function(){return e},e}function ge(){var e=i()(["\n  margin: 0.2rem 0;\n"]);return ge=function(){return e},e}function pe(){var e=i()(["\n  margin: 0;\n"]);return pe=function(){return e},e}function ve(){var e=i()(["\n  background-color: ",";\n  border-radius: 0.5rem;\n  padding: 1rem 1rem 2.5rem;\n  margin: 1rem;\n"]);return ve=function(){return e},e}var he=function(e){var n=e.user;return a.a.createElement(Ee,null,a.a.createElement(we,null,a.a.createElement(L,{image:n.image}),a.a.createElement(be,null,n.username)),a.a.createElement(ye,null,"Name: ",n.firstname," ",n.lastname),a.a.createElement(ye,null,"Location: ",n.location))},Ee=l.a.div(ve(),s.a.darkGrey),be=l.a.h2(pe()),ye=l.a.p(ge()),we=l.a.div(fe()),ke=function(e){var n=e.users;return a.a.createElement("div",null,n&&Array.isArray(n)&&n.map(function(e){return a.a.createElement(he,{user:e})}))};function Se(){var e=i()(["\n  background-color: ",";\n  color: ",";\n  width: 100%;\n  padding: 0.8rem 0;\n  margin: 1rem 0.5rem;\n  border: none;\n\n  :hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n"]);return Se=function(){return e},e}function xe(){var e=i()(["\n  display: flex;\n  justify-content: stretch;\n"]);return xe=function(){return e},e}function je(){var e=i()(["\n  color: ",";\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n"]);return je=function(){return e},e}var Oe=function(){var e=Object(r.useState)("Chat"),n=e[0],t=e[1],o=Object(r.useState)([]),u=o[0],c=o[1],i=Object(r.useState)(!1),l=i[0],s=i[1],d=Object(r.useState)(!1),m=d[0],f=d[1],g=Object(r.useState)(void 0),p=g[0],v=g[1];return Object(r.useEffect)(function(){v(localStorage.getItem("username")),h(y+"/users",p).then(function(e){c(e),s(e.find(function(e){return e.username===localStorage.getItem("username")}))})},[]),a.a.createElement(a.a.Fragment,null,!l&&!m&&a.a.createElement(Te,null,a.a.createElement(te,{setSignup:f,setLoggedIn:s})),!l&&m&&a.a.createElement(Te,null,a.a.createElement(le,{setLoggedIn:s,setSignup:f})),l&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Ce,null,a.a.createElement(Ie,{onClick:function(){return t("Users")}},"Users"),a.a.createElement(Ie,{onClick:function(){return t("Chat")}},"Chat"),a.a.createElement(Ie,{onClick:function(){localStorage.clear(),s(!1)}},"Sign Out")),a.a.createElement(Te,null,"Users"===n&&a.a.createElement(ke,{users:u,setLoggedIn:s,token:p}),"Chat"===n&&a.a.createElement(W,{users:u,setLoggedIn:s,token:p}))))},Te=l.a.div(je(),s.a.white),Ce=l.a.div(xe()),Ie=l.a.button(Se(),s.a.darkGrey,s.a.white,s.a.grey);n.default=function(){return a.a.createElement(o.a,null,a.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),a.a.createElement(Oe,null))}},146:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r={black:"#111",white:"#fff",darkerGrey:"#222",darkishGrey:"#333",darkGrey:"#3a3a3a",grey:"#444",brightGrey:"#666"}},150:function(e,n,t){"use strict";t.d(n,"b",function(){return s});var r=t(0),a=t.n(r),o=t(4),u=t.n(o),c=t(33),i=t.n(c);t.d(n,"a",function(){return i.a});t(151);var l=a.a.createContext({}),s=function(e){return a.a.createElement(l.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},151:function(e,n,t){var r;e.exports=(r=t(153))&&r.default||r},152:function(e){e.exports={data:{site:{siteMetadata:{title:"MyChat"}}}}},153:function(e,n,t){"use strict";t.r(n);t(34);var r=t(0),a=t.n(r),o=t(4),u=t.n(o),c=t(55),i=t(2),l=function(e){var n=e.location,t=i.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},n.default=l},154:function(e,n,t){"use strict";var r=t(155),a=t(0),o=t.n(a),u=t(4),c=t.n(u),i=t(158),l=t.n(i);function s(e){var n=e.description,t=e.lang,a=e.meta,u=e.keywords,c=e.title,i=r.data.site,s=n||i.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(a)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},n.a=s},155:function(e){e.exports={data:{site:{siteMetadata:{title:"MyChat",description:"The modular web tools, started with a chat.",author:"@gatsbyjs"}}}}},156:function(e,n,t){"use strict";var r=t(152),a=t(0),o=t.n(a),u=t(4),c=t.n(u),i=t(150),l=t(146),s=function(e){var n=e.siteTitle;return o.a.createElement("header",{style:{background:l.a.black}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(i.a,{to:"/",style:{color:l.a.white,textDecoration:"none"}},n))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var d=s,m=(t(157),function(e){var n=e.children;return o.a.createElement(i.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 0.2rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,n),o.a.createElement("footer",null)))},data:r})});m.propTypes={children:c.a.node.isRequired};n.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-6f7b591c15e290287726.js.map