(function(t){function e(e){for(var i,r,a=e[0],c=e[1],u=e[2],l=0,m=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function r(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"961a47ac"}[t]+".js"}function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=i);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=r(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}s[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/ufus/1/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"206d":function(t,e,n){"use strict";var i=n("4413"),s=n.n(i);s.a},"3baf":function(t,e,n){"use strict";var i=n("f28f"),s=n.n(i);s.a},4413:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.authenticated?n("md-app",[n("md-app-toolbar",{staticClass:"md-primary"},[n("span",{staticClass:"md-title"},[t._v("Košuljice")])]),n("md-app-drawer",{attrs:{"md-permanent":"full"}},[n("Drawer")],1),n("md-app-content",[n("router-view")],1)],1):n("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drawer"},[n("md-list",[n("md-list-item",{attrs:{to:"/home"}},[n("md-icon",[t._v("account_box")]),n("span",{staticClass:"md-list-item-text"},[t._v(t._s(this.$store.state.user))])],1),n("md-list-item",{on:{click:t.logout}},[n("md-icon",[t._v("clear")]),n("span",{staticClass:"md-list-item-text"},[t._v("Log Out")])],1),n("md-divider"),n("md-list-item",{attrs:{to:"/home"}},[n("md-icon",[t._v("home")]),n("span",{staticClass:"md-list-item-text"},[t._v("Home")])],1),n("md-list-item",{attrs:{to:"/home"},on:{click:t.reset}},[n("md-icon",[t._v("move_to_inbox")]),n("span",{staticClass:"md-list-item-text"},[t._v("Košuljice")]),n("md-badge",{staticClass:"md-primary",attrs:{"md-content":"9"}})],1),n("md-list-item",[n("md-icon",[t._v("notes")]),n("span",{staticClass:"md-list-item-text"},[t._v("Pregled Bodova")])],1),n("md-list-item",[n("md-icon",[t._v("info")]),n("span",{staticClass:"md-list-item-text"},[t._v("Pravila Bodovanja")])],1),n("md-list-item",[n("md-icon",[t._v("forward")]),n("span",{staticClass:"md-list-item-text"},[t._v("Unos Profita")])],1),n("md-list-item",{on:{click:t.printer}},[n("md-icon",[t._v("payment")]),n("span",{staticClass:"md-list-item-text"},[t._v("Fakture")])],1),n("md-list-item",[n("md-icon",[t._v("receipt")]),n("span",{staticClass:"md-list-item-text"},[t._v("Uplatnice")])],1),n("md-divider"),n("md-list-item",{on:{click:t.reset}},[n("md-icon",[t._v("delete")]),n("span",{staticClass:"md-list-item-text"},[t._v("Reset")])],1)],1)],1)},a=[],c={name:"Drawer",data:function(){return{}},methods:{printer:function(){},logout:function(){this.$store.commit("setUser",null),localStorage.clear(),this.$router.push("/login")},reset:function(){var t=[{name:"Kosuljica 1",status:0,content:[{ime:"Film 1",status:0,id:0},{ime:"Film 2",status:0,id:1},{ime:"Film 3",status:0,id:2}]},{name:"Kosuljica 2",status:0,content:[{ime:"Film 1",status:0,id:0},{ime:"Film 2",status:0,id:1},{ime:"Film 3",status:0,id:2}]},{name:"Kosuljica 3",status:0,content:[{ime:"Film 1",status:0,id:0},{ime:"Film 2",status:0,id:1},{ime:"Film 3",status:0,id:2}]}],e=[];e.push.apply(e,t),e.push.apply(e,t),e.push.apply(e,t);var n=[{datum:"21.12.2019",entries:[0,1,2]},{datum:"22.12.2019",entries:[3,4,5]},{datum:"23.12.2019",entries:[6,7,8]}];this.$store.commit("setKos",e),this.$store.commit("setInfo",n)}},created:function(){0==this.$store.state.info.length&&this.reset()}},u=c,l=n("2877"),d=Object(l["a"])(u,r,a,!1,null,"0b0bf98e",null),m=d.exports,f={name:"app",components:{Drawer:m},data:function(){return{}},methods:{logout:function(){this.$store.commit("setUser",null),localStorage.clear(),this.$router.push("/login")}},computed:{authenticated:function(){return this.$store.state.user}},created:function(){var t=localStorage.getItem("token");t?this.$store.commit("setUser",t):this.$router.push("/login"),null==this.$store.state.user&&this.$router.push("/login")}},p=f,h=(n("5c0b"),Object(l["a"])(p,s,o,!1,null,null,null)),v=h.exports,b=(n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.info.length>0?n("div",{staticClass:"kosuljice"},t._l(t.info,(function(e){return n("md-card",{key:e.id,staticClass:"kos"},[n("md-card-header",[t._v(t._s(e.datum))]),n("md-card-content",[e.entries.length>0?n("md-list",{staticClass:"entries"},t._l(e.entries,(function(e){return n("md-list-item",{key:e.name,staticClass:"entry",class:{active:0==t.kos[e].status,pending:1==t.kos[e].status,complete:t.kos[e].status>=2},attrs:{to:"/kosuljica/"+e}},[t._v(t._s(t.kos[e].name))])})),1):t._e()],1)],1)})),1):t._e()])},y=[],_={name:"home",components:{},data:function(){return{}},computed:{info:function(){return this.$store.state.info},kos:function(){return this.$store.state.kos}},methods:{openEntry:function(t){this.content=t.content},load:function(){}}},k=_,j=(n("3baf"),Object(l["a"])(k,g,y,!1,null,"2b0a2d64",null)),w=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"centered-container"},[n("md-content",{staticClass:"md-elevation-3"},[n("div",{staticClass:"title"},[n("div",{staticClass:"md-title"},[t._v("Login")]),n("div",{staticClass:"md-body-1"},[t._v("Udruženje filmskih umetnika Srbije")])]),n("form",{attrs:{id:"loginForm"},on:{submit:function(e){return t.login(e)}}},[n("md-field",[n("label",[t._v("Username")]),n("md-input",{attrs:{autofocus:"",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("md-field",{attrs:{"md-has-password":""}},[n("label",[t._v("Password")]),n("md-input",{attrs:{type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("div",{staticClass:"actions"},[n("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit"}},[t._v("Login")])],1)],1)])],1)},O=[],C={name:"Login",data:function(){return{username:"",password:"",loading:!1}},methods:{login:function(t){document.getElementById("loginForm").checkValidity()?(document.getElementById("loginForm").checkValidity(),localStorage.setItem("token",this.username),this.$store.commit("setUser",this.username),this.$router.push("/")):(this.loading=!1,document.getElementById("loginForm").reportValidity()),t.preventDefault()}},created:function(){var t=localStorage.getItem("token");t?(this.$store.commit("setUser",localStorage.getItem("token")),this.$router.push("/")):this.$router.push("/login")}},x=C,E=(n("206d"),Object(l["a"])(x,$,O,!1,null,null,null)),F=E.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"kosuljica"},[n("h2",[t._v(t._s(t.curr.name))]),n("md-list",t._l(t.curr.content,(function(e){return n("md-list-item",{key:e.ime,staticClass:"entry",class:{active:0==e.status,pending:1==e.status,complete:e.status>=2},attrs:{to:"/kosuljica/"+t.id+"/"+e.id}},[t._v(t._s(e.ime))])})),1),n("md-button",{on:{click:t.backEntry}},[t._v("Back")]),n("md-button",{on:{click:t.saveEntry}},[t._v("Save")])],1)},S=[],I={name:"Kosuljica",data:function(){return{id:null}},methods:{backEntry:function(){this.$store.commit("setKosuljica",this.id),this.$router.go(-1)},saveEntry:function(){this.backEntry()}},computed:{curr:function(){return this.$store.state.kos[this.id]}},created:function(){this.id=this.$route.params.id}},K=I,U=(n("9ac4"),Object(l["a"])(K,P,S,!1,null,"ba91a000",null)),D=U.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editing"},[n("md-autocomplete",{attrs:{"md-options":t.films,"md-layout":"box"},model:{value:t.editing.ime,callback:function(e){t.$set(t.editing,"ime",e)},expression:"editing.ime"}},[n("label",[t._v("Ime Filma")])]),n("md-button",{on:{click:t.backEdit}},[t._v("Cancel")]),n("md-button",{on:{click:t.saveEdit}},[t._v("Save")])],1)},L=[],T=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3"));function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){Object(T["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var V={name:"Entry",data:function(){return{editing:null,id:null,entry:null,films:["Film 1","Film 2","Film 3","Film 4","Film 5","Aaaa","Ffff"]}},methods:{backEdit:function(){this.$router.go(-1)},saveEdit:function(){this.$store.commit("setEntry",{id:this.id,entry:this.entry,editing:this.editing}),this.backEdit()}},computed:{curr:function(){return this.$store.state.kos[this.id].content[this.entry]}},created:function(){this.id=this.$route.params.id,this.entry=this.$route.params.entry,this.editing=q({},this.curr),this.editing.status=2}},A=V,J=Object(l["a"])(A,B,L,!1,null,null,null),H=J.exports;i["default"].use(b["a"]);var R=[{path:"/",name:"home",component:w},{path:"/login",name:"login",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/kosuljica/:id/:entry",component:H},{path:"/kosuljica/:id",component:D},{path:"*",redirect:"/"}],z=new b["a"]({mode:"history",base:"/ufus/1/",routes:R}),G=z,N=(n("e01a"),n("d28b"),n("3ca3"),n("ddb0"),n("2f62"));i["default"].use(N["a"]);var Q=new N["a"].Store({state:{user:null,info:[],kos:[],editing:null},mutations:{setUser:function(t,e){t.user=e},setInfo:function(t,e){t.info=e},setKos:function(t,e){t.kos=e},setKosuljica:function(t,e){var n=!0,i=!1,s=!0,o=!1,r=void 0;try{for(var a,c=t.kos[e].content[Symbol.iterator]();!(s=(a=c.next()).done);s=!0){var u=a.value;0==u.status?n=!1:i=!0}}catch(l){o=!0,r=l}finally{try{s||null==c.return||c.return()}finally{if(o)throw r}}n?t.kos[e].status=2:i&&(t.kos[e].status=1)},setEntry:function(t,e){t.kos[e.id].content[e.entry]=e.editing,t.kos[e.id].content[e.entry].status=2}},actions:{},modules:{}}),W=n("43f9"),X=n.n(W);n("51de"),n("e094");i["default"].use(X.a),i["default"].config.productionTip=!1,new i["default"]({router:G,store:Q,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"807f":function(t,e,n){},"9ac4":function(t,e,n){"use strict";var i=n("807f"),s=n.n(i);s.a},"9c0c":function(t,e,n){},f28f:function(t,e,n){}});
//# sourceMappingURL=app.e2fe47a3.js.map