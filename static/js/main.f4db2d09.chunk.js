(this.webpackJsonpapplication=this.webpackJsonpapplication||[]).push([[0],{22:function(e,t,n){e.exports={main:"Login_main__1TYkj",table:"Login_table__388WS"}},23:function(e,t,n){e.exports={main:"Registration_main__b_1q-",table:"Registration_table__2-nSJ"}},32:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(14),r=n.n(c),s=(n(32),n(5)),o=n(7),l=(n(39),n(2)),j=n(1),d=function(){return k(),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Car component"})})},u=function(){return k(),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Cars component"})})},b=function(){return k(),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Cart component"})})},O=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Error404 component"})})},m=n(17),p=n(11),h={email:"",password:"",isLoading:!1,error:""},x=function(e){return{type:"REGISTER-SET-EMAIL",email:e}},v=function(e){return{type:"REGISTER-SET-PASSWORD",password:e}},R=function(e){return{type:"REGISTER-SET-ERROR",error:e}},f=function(e){return e.registration},g=n(22),S=n.n(g),w=function(){k();var e=Object(o.b)(),t=Object(l.f)(),n=Object(o.c)(f),i=n.password,c=n.email,r=n.error;return Object(a.useEffect)((function(){i&&c&&t(T.PROFILE)}),[i,c]),Object(j.jsx)("div",{className:S.a.main,children:Object(j.jsxs)("div",{className:S.a.table,children:[Object(j.jsx)("h1",{children:"Login page"}),Object(j.jsx)(m.a,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?e.password?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.password="Required":t.email="Required",e.password?e.password.length>5&&(t.password="Must be 5 characters or less"):t.password="Required",t},onSubmit:function(t,n){(0,n.setSubmitting)(!1),e(function(e,t){return function(n){var a=localStorage.getItem("password"),i=localStorage.getItem("email");a&&a===t?(n(v(t)),n(R(""))):n(R("Password is not correct")),n(i&&i===e?x(e):R("Email is not correct"))}}(t.email,t.password))},children:function(e){var t=e.values,n=e.errors,a=e.touched,i=e.handleChange,c=e.handleBlur,r=e.handleSubmit,s=e.isSubmitting;return Object(j.jsxs)("form",{onSubmit:r,children:[Object(j.jsx)("input",{placeholder:"Email",type:"email",name:"email",onChange:i,onBlur:c,value:t.email}),Object(j.jsx)("div",{children:n.email&&a.email&&n.email}),Object(j.jsx)("input",{placeholder:"Password",type:"password",name:"password",onChange:i,onBlur:c,value:t.password}),Object(j.jsx)("div",{children:n.password&&a.password&&n.password}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",disabled:s,children:"Submit"})})]})}}),r]})})},E=function(){return k(),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Profile component"})})},I=n(23),N=n.n(I),A=function(){k();var e=Object(o.b)(),t=Object(l.f)(),n=Object(o.c)(f),i=n.password,c=n.email;return Object(a.useEffect)((function(){i&&c&&t(T.PROFILE)}),[i,c]),Object(j.jsx)("div",{className:N.a.main,children:Object(j.jsxs)("div",{className:N.a.table,children:[Object(j.jsx)("h1",{children:"Registration page"}),Object(j.jsx)(m.a,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?e.password?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.password="Required":t.email="Required",e.password?e.password.length>5&&(t.password="Must be 5 characters or less"):t.password="Required",t},onSubmit:function(t,n){(0,n.setSubmitting)(!1),e(function(e,t){return function(n){localStorage.setItem("email",e),localStorage.setItem("password",t),n(x(e)),n(v(t))}}(t.email,t.password))},children:function(e){var t=e.values,n=e.errors,a=e.touched,i=e.handleChange,c=e.handleBlur,r=e.handleSubmit,s=e.isSubmitting;return Object(j.jsxs)("form",{onSubmit:r,children:[Object(j.jsx)("input",{placeholder:"Email",type:"email",name:"email",onChange:i,onBlur:c,value:t.email}),Object(j.jsx)("div",{children:n.email&&a.email&&n.email}),Object(j.jsx)("input",{placeholder:"Password",type:"password",name:"password",onChange:i,onBlur:c,value:t.password}),Object(j.jsx)("div",{children:n.password&&a.password&&n.password}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",disabled:s,children:"Submit"})})]})}})]})})},T={REGISTRATION:"/regist",LOGIN:"/login",CAR:"/car",CARS:"/cars",CART:"/cart",PROFILE:"/profile",ERROR404:"*"},L=function(){return Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:T.PROFILE,element:Object(j.jsx)(E,{})}),Object(j.jsx)(l.a,{path:T.REGISTRATION,element:Object(j.jsx)(A,{})}),Object(j.jsx)(l.a,{path:T.LOGIN,element:Object(j.jsx)(w,{})}),Object(j.jsx)(l.a,{path:T.CAR,element:Object(j.jsx)(d,{})}),Object(j.jsx)(l.a,{path:T.CARS,element:Object(j.jsx)(u,{})}),Object(j.jsx)(l.a,{path:T.CART,element:Object(j.jsx)(b,{})}),Object(j.jsx)(l.a,{path:T.ERROR404,element:Object(j.jsx)(O,{})})]})},C=n(19),_=n(27),G=Object(C.b)({registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER-SET-EMAIL":return Object(p.a)(Object(p.a)({},e),{},{email:t.email});case"REGISTER-SET-PASSWORD":return Object(p.a)(Object(p.a)({},e),{},{password:t.password});case"REGISTER-SET-LOADING":return Object(p.a)(Object(p.a)({},e),{},{isLoading:t.isLoading});case"REGISTER-SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.error});default:return e}}}),P=Object(C.c)(G,Object(C.a)(_.a));window.store=P;var k=function(){var e,t,n,i,c=Object(l.f)();Object(a.useEffect)((function(){e=localStorage.getItem("password"),t=localStorage.getItem("email"),n=P.getState().registration.password,i=P.getState().registration.email,e||t?e&&t&&!n&&!i&&c(T.LOGIN):c(T.REGISTRATION)}),[e,t,n,i])},y=n(8),B=n.n(y),F=function(){var e=Object(o.b)(),t=Object(l.f)();return k(),Object(j.jsxs)("nav",{className:B.a.main,children:[Object(j.jsxs)("ul",{className:B.a.menu,children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{className:function(e){return e.isActive?B.a.activeNavLink:""},to:T.CAR,children:"Car"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{className:function(e){return e.isActive?B.a.activeNavLink:""},to:T.CARS,children:"Cars"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{className:function(e){return e.isActive?B.a.activeNavLink:""},to:T.CART,children:"Cart"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{className:function(e){return e.isActive?B.a.activeNavLink:""},to:T.PROFILE,children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{className:function(e){return e.isActive?B.a.activeNavLink:""},to:T.LOGIN,children:"Login"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{className:function(e){return e.isActive?B.a.activeNavLink:""},to:T.REGISTRATION,children:"Registration"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{className:function(e){return e.isActive?B.a.activeNavLink:""},to:T.ERROR404,children:"Error404"})})]}),Object(j.jsx)("button",{type:"button",onClick:function(){e((function(e){localStorage.clear(),e(x("")),e(v(""))})),t(T.REGISTRATION)},children:"Delete Account"})]})};var q=function(){return Object(j.jsxs)("div",{className:".app",children:[Object(j.jsx)(F,{}),Object(j.jsx)(L,{})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(o.a,{store:P,children:Object(j.jsx)(q,{})})})}),document.getElementById("root")),M()},8:function(e,t,n){e.exports={main:"NavBar_main__1fgF3",menu:"NavBar_menu__MHPr-",activeNavLink:"NavBar_activeNavLink__3TO0w"}}},[[42,1,2]]]);
//# sourceMappingURL=main.f4db2d09.chunk.js.map