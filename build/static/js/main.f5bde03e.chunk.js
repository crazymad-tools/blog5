(this.webpackJsonpdemo01=this.webpackJsonpdemo01||[]).push([[0],{36:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n,r,c,o,l=a(0),i=a.n(l),s=a(12),u=a.n(s),m=a(7),p=(a(41),a(31)),h=a(13),d=a(32),E=a(14),v=(a(42),a(1)),g=a(16),f=a.n(g),b=a(3),N={history:null},w=N;var O=(n=v.d.bound,r=v.d.bound,c=function(){function e(){Object(h.a)(this,e),Object(p.a)(this,"isLogin",o,this)}return Object(d.a)(e,[{key:"login",value:function(e){var t=this;f.a.post("https://api.crazymad.top/api/auth/login/submit",e).then((function(e){t.isLogin=!0,201===e.status&&w.history&&w.history.push("/")}))}},{key:"register",value:function(e){f.a.post("https://api.crazymad.top/api/auth/register/submit",e).then((function(e){201===e.status&&w.history&&w.history.push("/auth/login")}))}}]),e}(),o=Object(E.a)(c.prototype,"isLogin",[v.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(E.a)(c.prototype,"login",[n],Object.getOwnPropertyDescriptor(c.prototype,"login"),c.prototype),Object(E.a)(c.prototype,"register",[r],Object.getOwnPropertyDescriptor(c.prototype,"register"),c.prototype),c),y=i.a.createContext({userStore:new O}),j=function(){return i.a.useContext(y)},k=(a(59),function(e){return i.a.createElement("a",{className:"earth-link",href:"http://earth.crazymad.top",target:"blank"},i.a.createElement("div",{className:"earth-globe"},i.a.createElement("img",{src:"/earth.jpg"}),i.a.createElement("img",{src:"/earth.jpg"}),i.a.createElement("div",{className:"earth-shadow"})))}),C=function(e){j().userStore;return i.a.createElement("div",{id:"indexPage"},i.a.createElement("div",{className:"earth-container"},i.a.createElement(k,null)),i.a.createElement("div",{className:"article-list-container"},i.a.createElement("div",{className:"article-rocket"},i.a.createElement("span",null,"HELLO WORLD")),i.a.createElement("div",{className:"article-rocket"}),i.a.createElement("div",{className:"article-rocket"}),i.a.createElement("div",{className:"article-rocket"}),i.a.createElement("div",{className:"article-rocket"}),i.a.createElement("div",{className:"article-rocket"}),i.a.createElement("div",{className:"article-rocket"})))},S=(a(60),a(5)),x=a(35),P=a(10),T=Object(x.a)((function(e){var t=Object(l.useState)(""),a=Object(S.a)(t,2),n=a[0],r=a[1],c=Object(l.useState)(""),o=Object(S.a)(c,2),s=o[0],u=o[1],m=j().userStore;function p(){m.login({username:n,password:s})}return i.a.createElement("div",{id:"loginPage"},i.a.createElement("div",{className:"auth-form"},i.a.createElement("p",null,i.a.createElement("b",null,"LOGIN")),i.a.createElement("div",{className:"auth-form-row"},i.a.createElement("input",{placeholder:"username",value:n,onChange:function(e){return r(e.currentTarget.value)}})),i.a.createElement("div",{className:"auth-form-row"},i.a.createElement("input",{placeholder:"password",value:s,onChange:function(e){return u(e.currentTarget.value)},type:"password",onKeyDown:function(e){13===e.keyCode&&p()}})),i.a.createElement("div",{className:"auth-form-row"},i.a.createElement("button",{onClick:p,"data-text":"submit"})),i.a.createElement("div",{className:"auth-form-row"},i.a.createElement(P.a,{to:"/auth/register"},"to register"))))})),L=function(e){return i.a.createElement("div",null,i.a.createElement(m.a,{path:"/login"},i.a.createElement(T,null)))},z=function(e){var t=Object(l.useState)(""),a=Object(S.a)(t,2),n=a[0],r=a[1],c=Object(l.useState)(""),o=Object(S.a)(c,2),s=o[0],u=o[1],m=Object(l.useState)(""),p=Object(S.a)(m,2),h=p[0],d=p[1],E=Object(l.useState)(""),v=Object(S.a)(E,2),g=v[0],f=v[1],b=j().userStore;return i.a.createElement("div",{id:"registerPage"},i.a.createElement("div",{className:"auth-form"},i.a.createElement("p",null,i.a.createElement("b",null,"REGISTER")),i.a.createElement("div",{className:"auth-form-row"},i.a.createElement("input",{value:n,onChange:function(e){return r(e.currentTarget.value)},placeholder:"username"})),i.a.createElement("div",{className:"auth-form-row"},i.a.createElement("input",{value:s,onChange:function(e){return u(e.currentTarget.value)},placeholder:"email"})),i.a.createElement("div",{className:"auth-form-row"},i.a.createElement("input",{type:"password",onChange:function(e){return d(e.currentTarget.value)},value:h,placeholder:"password"})),i.a.createElement("div",{className:"auth-form-row"},i.a.createElement("input",{type:"password",onChange:function(e){return f(e.currentTarget.value)},value:g,placeholder:"repeat password"})),i.a.createElement("div",{className:"auth-form-row"},i.a.createElement("button",{onClick:function(){""!==h&&""!==g&&""!==n&&""!==s&&g===h&&b.register({username:n,email:s,password:h})},"data-text":"submit"})),i.a.createElement("div",{className:"auth-form-row"},i.a.createElement(P.a,{to:"/auth/login"},"to login"))))},D=(a(65),a(66),function(e){var t=Object(l.useState)(""),a=Object(S.a)(t,2),n=(a[0],a[1]);return Object(l.useEffect)((function(){e.value&&n(e.value)}),[e.value]),i.a.createElement("div",{className:"text-editor"},i.a.createElement("textarea",{onChange:function(t){n(t.currentTarget.value),e.onChange&&e.onChange(t)},placeholder:e.placeholder}))});D.defaultProps={placeholder:"Please type somting in here"};var I=D,R=i.a.lazy((function(){return Promise.all([a.e(2),a.e(4)]).then(a.bind(null,268))})),W=function(e){var t=Object(l.useState)(!1),a=Object(S.a)(t,2),n=a[0],r=a[1],c=Object(l.useState)(""),o=Object(S.a)(c,2),s=o[0],u=o[1];return i.a.createElement("div",{id:"editPage"},i.a.createElement("div",{className:"editor-header"},i.a.createElement("div",{className:"title-input-box"},i.a.createElement("input",{placeholder:"Please type article title in here"})),i.a.createElement("div",{className:"tools"},i.a.createElement("span",{className:"iconfont blog-icon-yulan ".concat(n?"active":""),onClick:function(e){return r(!n)}}),i.a.createElement("span",{className:"iconfont blog-icon-publish"}),i.a.createElement("span",{className:"iconfont blog-icon-14"}),i.a.createElement("span",{className:"iconfont blog-icon-table"}))),i.a.createElement("div",{className:"editor-container"},i.a.createElement("div",{className:"editor-input"},i.a.createElement(I,{onChange:function(e){return u(e.currentTarget.value)}})),n&&i.a.createElement(R,{content:s})))},B=function(e){return i.a.createElement("div",null,i.a.createElement("h2",null,"404"))},G=function(e){return i.a.createElement("div",{className:"App"},i.a.createElement(m.a,{path:"/",component:C,exact:!0}),i.a.createElement(m.a,{path:"/auth",component:L}),i.a.createElement(m.a,{path:"/auth/login",component:T}),i.a.createElement(m.a,{path:"/auth/register",component:z}),i.a.createElement(m.a,{path:"/edit",component:W}),i.a.createElement(m.a,{nomatch:!0,path:"/404",component:B}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);u.a.hydrate(i.a.createElement(m.b,{history:function(e){var t=Object(b.a)();return N.history=t,t}(window.location.pathname)},i.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,3]]]);
//# sourceMappingURL=main.f5bde03e.chunk.js.map