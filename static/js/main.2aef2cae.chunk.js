(this["webpackJsonpglow-up-fe"]=this["webpackJsonpglow-up-fe"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a,c,r,i,s=n(4),o=n.n(s),l=n(46),d=n.n(l),b=(n(56),n(7)),u=n(72),j=(n(57),n(26)),h=n(74),m=Object(h.a)(a||(a=Object(j.a)(["\n  query fetchUser {\n    fetchUser {\n      username\n\n      moods {\n        id\n        description\n        mood\n        createdAt\n      }\n\n      habitEntries {\n        id\n        date\n        habitId\n        status\n      }\n\n      journalEntries {\n        id\n        content\n        date\n      }\n    }\n  }\n"]))),O=Object(h.a)(c||(c=Object(j.a)(["\n  query fetchHabits {\n    fetchHabits {\n      id\n      name\n    }\n  }\n"]))),f=(n(58),n(67)),p=Object(h.a)(r||(r=Object(j.a)(["\n  mutation createMood($mood: Int!, $description: String) {\n    createMood(input: { params: { mood: $mood, description: $description } }) {\n      user {\n        id\n      }\n    }\n  }\n"]))),v=Object(h.a)(i||(i=Object(j.a)(["\n  mutation addHabitEntries($idArr: [HabitEntryInput!]!) {\n    createHabitEntry(input: { params: $idArr }) {\n      user {\n        habitEntries {\n          habitId\n          status\n          date\n        }\n      }\n    }\n  }\n"]))),g=n(3),x=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),r=Object(b.a)(c,2),i=r[0],o=r[1],l=Object(s.useState)(!0),d=Object(b.a)(l,2),u=d[0],j=d[1],h=Object(f.a)(p),m=Object(b.a)(h,1)[0];return Object(g.jsx)("section",{className:"mood-form-container",children:Object(g.jsxs)("form",{className:"mood-form",onSubmit:function(e){e.preventDefault(),n?(m({variables:{mood:parseInt(n),description:i}}),j(!0),a(""),o("")):j(!1)},children:[Object(g.jsx)("h2",{children:"How are you feeling today?"}),Object(g.jsxs)("div",{className:"moods-container",children:[Object(g.jsx)("input",{type:"radio","aria-label":"strongly negative",name:"mood",id:"strongly-negative",value:"0",onChange:function(e){return a(e.currentTarget.value)},checked:"0"===n}),Object(g.jsx)("label",{htmlFor:"strongly-negative",className:"mood-label",children:"\ud83d\ude2d"}),Object(g.jsx)("input",{type:"radio","aria-label":"negative",name:"mood",id:"negative",value:"1",onChange:function(e){return a(e.currentTarget.value)},checked:"1"===n}),Object(g.jsx)("label",{htmlFor:"negative",className:"mood-label",children:"\ud83d\ude41"}),Object(g.jsx)("input",{type:"radio","aria-label":"neutral",name:"mood",id:"neutral",value:"2",onChange:function(e){return a(e.currentTarget.value)},checked:"2"===n}),Object(g.jsx)("label",{htmlFor:"neutral",className:"mood-label",children:"\ud83d\ude10"}),Object(g.jsx)("input",{type:"radio","aria-label":"positive",name:"mood",id:"positive",value:"3",onChange:function(e){return a(e.currentTarget.value)},checked:"3"===n}),Object(g.jsx)("label",{htmlFor:"positive",className:"mood-label",children:"\ud83d\ude42"}),Object(g.jsx)("input",{type:"radio","aria-label":"strongly positive",name:"mood",id:"strongly-positive",value:"4",onChange:function(e){return a(e.currentTarget.value)},checked:"4"===n}),Object(g.jsx)("label",{htmlFor:"strongly-positive",className:"mood-label",children:"\ud83d\ude01"})]}),!u&&Object(g.jsx)("p",{className:"error-message",children:"**Please select your mood today!**"}),Object(g.jsx)("input",{type:"text",placeholder:"Today, I am feeling...",className:"mood-description",value:i,onChange:function(e){return o(e.currentTarget.value)}}),Object(g.jsx)("button",{className:"mood-submit-button",type:"submit",children:"Submit"})]})})},y=(n(61),Object(s.createContext)({userHabits:[],checkedHabitIds:[],setUserHabits:function(){},setCheckedHabitIds:function(){}})),k=function(e){var t=e.children,n=Object(s.useState)([]),a=Object(b.a)(n,2),c=a[0],r=a[1],i=Object(s.useState)([]),o=Object(b.a)(i,2),l=o[0],d=o[1];return Object(g.jsx)(y.Provider,{value:{userHabits:c,setUserHabits:r,checkedHabitIds:l,setCheckedHabitIds:d},children:t})},C=n(22);n(62);function N(e){var t=Object(s.useContext)(y),n=t.checkedHabitIds,a=t.setCheckedHabitIds,c=Object(s.useState)(n.includes(parseInt(e.id))),r=Object(b.a)(c,2),i=r[0],o=r[1],l=Object(s.useState)({backgroundColor:"#e4dfdd",color:"black"}),d=Object(b.a)(l,2),u=d[0],j=d[1];return Object(g.jsx)("button",{className:"habit-card-button",onClick:function(e){switch(e.preventDefault(),i){case!1:o(!0),a([].concat(Object(C.a)(n),[parseInt(e.currentTarget.id)])),j({backgroundColor:"#4a5582",color:"#fff"});break;case!0:o(!1);var t=n.filter((function(t){return t!==parseInt(e.currentTarget.id)}));a(t),j({backgroundColor:"#e4dfdd",color:"black"})}},id:e.id,style:u,children:e.name})}n.p;var H=function(){var e=Object(u.a)(O),t=e.error,n=e.data,a=Object(s.useContext)(y).checkedHabitIds,c=Object(f.a)(v),r=Object(b.a)(c,1)[0];return Object(g.jsxs)("section",{className:"habit-form-container",children:[Object(g.jsx)("h2",{className:"habit-form-question",children:"What have you accomplished?"}),n?Object(g.jsxs)("form",{className:"habit-form",onSubmit:function(e){e.preventDefault();var t=a.map((function(e){return{id:e}}));t.length?(r({variables:{idArr:t}}),alert("Great job")):alert("You have not selected any habit")},children:[n.fetchHabits.map((function(e){return Object(g.jsx)(N,{name:e.name,id:e.id},e.id)})),Object(g.jsx)("button",{className:"habit-submit-button",type:"submit",children:"Submit"})]}):Object(g.jsx)("h2",{children:t})]})};var I=function(){var e=Object(u.a)(m),t=e.loading,n=e.error,a=e.data,c=Object(s.useState)(null),r=Object(b.a)(c,2),i=r[0],o=r[1];return Object(s.useEffect)((function(){!t&&a&&o(a.fetchUser)}),[a,t]),t?Object(g.jsx)("h2",{children:"Loading"}):n?Object(g.jsx)("h2",{children:n}):Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("header",{className:"header",children:[Object(g.jsx)("h1",{children:"GlowUp"}),i&&Object(g.jsxs)("h2",{children:["Welcome ",i.username]}),Object(g.jsxs)("nav",{className:"nav",children:[Object(g.jsx)("h2",{children:"Dashboard"}),Object(g.jsx)("h2",{children:"Journal"})]})]}),Object(g.jsx)(x,{}),Object(g.jsx)(H,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},T=n(64),w=n(75),F=n(73),E=new T.a({uri:"http://localhost:3001/graphql",cache:new w.a});d.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(F.a,{client:E,children:Object(g.jsx)(k,{children:Object(g.jsx)(I,{})})})}),document.getElementById("root")),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.2aef2cae.chunk.js.map