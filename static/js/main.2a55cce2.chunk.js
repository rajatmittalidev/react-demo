(this.webpackJsonpmultilang_project=this.webpackJsonpmultilang_project||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),i=n.n(o),s=(n(94),n(28)),r=n(11),u=n(40),l=n(175),d=n(172),j=n(176),O=n(174),p=n(178),_=n(44),h=n(45),b=new(n(78).a),m=new(function(){function e(){Object(_.a)(this,e),this.appName="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_NAME)}return Object(h.a)(e,[{key:"set",value:function(e,t){e="".concat(this.appName,"-").concat(e),b.set(e,t,{path:"/"})}},{key:"get",value:function(e){e="".concat(this.appName,"-").concat(e);var t=b.get(e);return t||""}},{key:"removeCookie",value:function(e){return e="".concat(this.appName,"-").concat(e),b.remove(e,{path:"/"}),!0}}]),e}()),f=n(173),g=n(177),S=n(133),E=n(170),v=n(168),T=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#639",height:"51px"},username:{marginTop:"25px",fontSize:"20px"},forgot:{marginLeft:"235px",marginTop:"20px"},password:{fontSize:"20px"},signup:{marginRight:"90px"},userEmail:{marginRight:"90px"}}})),P=(n(97),n(179)),x=n(6),C=function(){var e=Object(a.useState)({value:"English",lang:"en"}),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(),i=Object(u.a)(o,2),s=i[0];i[1];Object(a.useEffect)((function(){l.changeLanguage("en")}),[s]);var r=Object(P.a)(),l=(r.t,r.i18n);return Object(x.jsxs)("div",{className:"nav ",children:[Object(x.jsx)("link",{rel:"stylesheet",type:"text/css",href:c.stylePath}),Object(x.jsx)("link",{rel:"stylesheet",type:"text/css",href:c.stylePath2}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{className:"pname",children:"Demo Project"})}),Object(x.jsxs)("div",{children:["  ",Object(x.jsx)("button",{className:"n6",onClick:function(){"en"===n.lang?(c({value:"Korean",lang:"ko"}),l.changeLanguage("ko")):(c({value:"English",lang:"en"}),l.changeLanguage("en"))},children:n.value})]})]})},R=n(27),A=n(36),N=n.n(A),L=new(function(){function e(){Object(_.a)(this,e),this.signOut=function(e){return e="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL).concat(e),new Promise((function(t,n){var a={"Content-Type":"application/json","x-access-token":m.get("authentication"),locale:"en"};N.a.post(e,{device_unique_id:"dffnkjn43434",operating_systems:"web"},{headers:a}).then((function(e){t(e),m.removeCookie("authentication"),m.removeCookie("authorization"),r.a})).catch((function(e){return n(e)}))}))},this.accounts=function(e,t){return e="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL).concat(e),new Promise((function(n,a){var c={"Content-Type":"application/json","x-access-token":m.get("authentication"),locale:"en"},o=Object(R.a)(Object(R.a)({},t),{device_unique_id:"dffnkjn43434",operating_systems:"web"});N.a.post(e,o,{headers:c}).then((function(e){n(e)})).catch((function(e){return a(e)}))}))},this.accountsUpdate=function(e,t){return e="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL).concat(e),new Promise((function(n,a){var c={"Content-Type":"application/json","x-access-token":m.get("authentication"),locale:"en"},o=Object(R.a)(Object(R.a)({},t),{device_unique_id:"dffnkjn43434",operating_systems:"web"});N.a.post(e,o,{headers:c}).then((function(e){n(e)})).catch((function(e){return a(e)}))}))},this.accountsImage=function(e,t){return e="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL).concat(e),new Promise((function(n,a){var c={"Content-Type":"application/json","x-access-token":m.get("authentication"),locale:"en"};N.a.post(e,t,{headers:c}).then((function(e){n(e)})).catch((function(e){return a(e)}))}))}}return Object(h.a)(e,[{key:"post",value:function(e,t){return e="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL).concat(e),new Promise((function(n,a){var c=Object(R.a)(Object(R.a)({},t),{device_unique_id:"dffnkjn43434",operating_systems:"web"});N.a.post(e,c,{headers:{"Content-Type":"application/json",locale:"en"}}).then((function(e){n(e)})).catch((function(e){a(e)}))}))}},{key:"postForget",value:function(e,t){return e="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/react-demo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL).concat(e),new Promise((function(n,a){var c=Object(R.a)(Object(R.a)({},t),{device_unique_id:"dffnkjn43434",operating_systems:"web"});N.a.post(e,c,{headers:{"Content-Type":"application/json",locale:"en"}}).then((function(e){n(e)})).catch((function(e){a(e)}))}))}}]),e}()),D=n(73),k=function(){var e=Object(P.a)(),t=e.t,n=(e.i18n,Object(a.useState)("")),c=Object(u.a)(n,2),o=c[0],i=c[1],_=Object(a.useState)(""),h=Object(u.a)(_,2),b=h[0],v=h[1],R=Object(r.f)();Object(a.useEffect)((function(){m.get("authentication")?R.push("/dashboard/chat"):R.push("/login")}),[]);var A=T();return Object(x.jsxs)("div",{className:"login-bg",children:[Object(x.jsx)(C,{}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"outcontainer1 pull-right ",children:Object(x.jsxs)(E.a,{component:"main",maxWidth:"xs",children:[Object(x.jsx)(d.a,{}),Object(x.jsx)("div",{className:A.paper,children:Object(x.jsxs)("form",{className:A.form,children:[Object(x.jsx)(S.a,{class:A.username,children:t("LOGIN_PAGE.USERNAME")}),Object(x.jsx)(j.a,{className:"userEmail",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"emails",onChange:function(e){i(e.target.value)},name:"email",autoComplete:"email",autoFocus:!0}),Object(x.jsx)(S.a,{class:A.password,children:t("LOGIN_PAGE.PASSWORD")}),Object(x.jsx)(f.a,{item:!0,xs:!0,children:Object(x.jsx)(s.b,{className:A.forgot,to:"/forget",variant:"body2",children:t("LOGIN_PAGE.FORGOT")})}),Object(x.jsx)(j.a,{className:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",onChange:function(e){v(e.target.value)},type:"password",id:"password",autoComplete:"current-password"}),Object(x.jsx)(O.a,{control:Object(x.jsx)(p.a,{value:"remember",color:"primary"}),label:t("LOGIN_PAGE.REMEMBER")}),Object(x.jsx)(l.a,{onClick:function(e){L.post(D.login_Api,{username:o,password:b,fcm_id:"ujedhdh"}).then((function(e){console.log("login Response",e),e&&e.data&&(m.set("authentication",e.data.data.token),m.set("authorization",e.data.data.data))})).catch((function(e){console.log("err",e)}))},type:"button",fullWidth:!0,variant:"contained",color:"primary",className:A.submit,children:t("LOGIN_PAGE.SIGNIN")}),Object(x.jsxs)(f.a,{container:!0,children:[Object(x.jsx)(f.a,{item:!0,xs:!0}),Object(x.jsx)(f.a,{item:!0,children:Object(x.jsx)(s.b,{className:A.signup,to:"/register",variant:"body2",children:t("LOGIN_PAGE.SIGNUPFREE")})})]})]})}),Object(x.jsx)(g.a,{mt:8})]})})})]})};n(128);var y=function(){return Object(x.jsx)(s.a,{children:Object(x.jsx)(a.Suspense,{fallback:"loading",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(r.b,{path:"/login",component:k}),Object(x.jsx)(r.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(r.a,{to:"/login"})}})]})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))},W=n(57),w=n(43),U=n(75),F=n(77);W.a.use(U.a).use(F.a).use(w.e).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});W.a,n(129),n(130);i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(a.Suspense,{fallback:Object(x.jsx)("div",{children:"loading ......."}),children:Object(x.jsx)(y,{})})}),document.getElementById("root")),I()},73:function(e,t){},94:function(e,t,n){},97:function(e,t,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.2a55cce2.chunk.js.map