(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),r=a(8),c=a(2),s=(a(13),a(1)),o=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=a(7),l=a.n(d),u=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],m=a(0),j=function(e){var t=e.userId,a=function(e,t){return e.find((function(e){return t===e.id}))}(u,t);return Object(m.jsx)("a",{className:"UserInfo",href:"mailto: ".concat(null===a||void 0===a?void 0:a.email),children:null===a||void 0===a?void 0:a.name})},b=function(e){var t=e.id,a=e.title,n=e.userId,i=e.completed,r=void 0!==i&&i;return Object(m.jsxs)("article",{"data-id":t,className:l()("TodoInfo",{"TodoInfo--completed":r}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:a}),Object(m.jsx)(j,{userId:n})]})},h=function(e){var t=e.todos;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)(b,{id:e.id,title:e.title,completed:e.completed,userId:e.userId},e.id)}))})},f=function(e){var t=e.onAdd,a=Object(s.useState)(""),n=Object(c.a)(a,2),i=n[0],r=n[1],o=Object(s.useState)(""),d=Object(c.a)(o,2),l=d[0],j=d[1],b=Object(s.useState)(3),h=Object(c.a)(b,2),f=h[0],O=h[1],p=Object(s.useState)(!1),v=Object(c.a)(p,2),x=v[0],y=v[1],I=Object(s.useState)(!1),S=Object(c.a)(I,2),N=S[0],g=S[1];return Object(m.jsxs)("form",{className:"NewTodo",onSubmit:function(e){if(e.preventDefault(),!i)return g(!0),void(l||y(!0));var a=u.find((function(e){return e.name===l}));if(a){var n={id:f,title:i,userId:a.id,completed:!1};t(n),O(f+1),y(!1),g(!1),j(""),r("")}},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Please enter a title",value:i,onChange:function(e){var t=e.target.value.replace(/[^A-Za-z\u0410-\u042f\u0430-\u044f0-9\s]/g,"");r(t),g(!1)}}),N&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",onChange:function(e){j(e.target.value),y(!1)},value:l,children:[Object(m.jsx)("option",{value:"0",children:"Please choose a user"}),u.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),x&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},O=function(){var e=Object(s.useState)(o),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsx)(f,{onAdd:function(e){n([].concat(Object(r.a)(a),[e]))}}),Object(m.jsx)("section",{className:"TodoList",children:Object(m.jsx)(h,{todos:a})})]})};i.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f2a5f601.chunk.js.map