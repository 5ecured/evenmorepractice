(this["webpackJsonpall-frontend"]=this["webpackJsonpall-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(15),c=n.n(r),u=n(2),o=n(3),i=n(5),m=function(e){var t=e.addPlayer,n={id:null,name:"",club:"",important:!1},r=Object(a.useState)(n),c=Object(u.a)(r,2),m=c[0],E=c[1],f=function(e){var t=e.target,n=t.name,a=t.value;E(Object(i.a)({},m,Object(o.a)({},n,a)))};return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.name&&m.club&&(t(m),E(n))}},l.a.createElement("h2",null,"Add player"),l.a.createElement("input",{placeholder:"Enter name",onChange:f,name:"name",value:m.name}),l.a.createElement("input",{placeholder:"Enter club",onChange:f,name:"club",value:m.club}),l.a.createElement("button",null,"Add player"))},E=function(e){var t=e.players,n=e.deletePlayer,r=e.whichPlayer,c=e.toggle,o=Object(a.useState)(0),i=Object(u.a)(o,2),m=i[0],E=i[1],f=t.map((function(e){return l.a.createElement("tr",{style:e.important?{backgroundColor:"orange"}:{backgroundColor:"transparent"}},l.a.createElement("td",null,e.id),l.a.createElement("td",null,l.a.createElement("span",{style:{fontWeight:"bolder"}},e.name)),l.a.createElement("td",null,e.club),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return c(e.id,e)}},e.important?"Not important":"Important")),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return r(e)}},"Edit")),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return n(e.id)}},"Delete")))}));return Object(a.useEffect)((function(){E(t.length)}),[t]),l.a.createElement("div",null,l.a.createElement("h2",null,"All players (",m,")"),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"NAME"),l.a.createElement("th",null,"CLUB"),l.a.createElement("th",null,"IMPORTANT"),l.a.createElement("th",null,"EDIT"),l.a.createElement("th",null,"DELETE")),f))},f=function(e){var t=e.setEditing,n=e.playerToEdit,r=e.editPlayer,c=Object(a.useState)(n),m=Object(u.a)(c,2),E=m[0],f=m[1],d=function(e){var t=e.target,n=t.name,a=t.value;f(Object(i.a)({},E,Object(o.a)({},n,a)))};return Object(a.useEffect)((function(){f(n)}),[n]),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E.name&&E.club&&r(E.id,E)}},l.a.createElement("h2",null,"Edit player"),l.a.createElement("input",{placeholder:"Enter name",name:"name",value:E.name,onChange:d}),l.a.createElement("input",{placeholder:"Enter club",name:"club",value:E.club,onChange:d}),l.a.createElement("button",null,"Edit player"),l.a.createElement("button",{onClick:function(){return t(!1)}},"Cancel"))},d=n(4),b=n.n(d),p=function(){return b.a.get("/players").then((function(e){return e.data}))},h=function(e){return b.a.post("/players",e).then((function(e){return e.data}))},s=function(e){return b.a.delete("".concat("/players","/").concat(e)).then((function(e){return e.data}))},y=function(e,t){return b.a.put("".concat("/players","/").concat(t),e).then((function(e){return e.data}))},g=function(e,t){return b.a.patch("".concat("/players","/").concat(t),e).then((function(e){return e.data}))},O=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),o=Object(u.a)(c,2),i=o[0],d=o[1],b=Object(a.useState)([]),O=Object(u.a)(b,2),j=O[0],v=O[1];return Object(a.useEffect)((function(){p().then((function(e){v(e)}))}),[]),l.a.createElement("div",{className:"center"},l.a.createElement("h1",null,"Practicing"),l.a.createElement("hr",null),n?l.a.createElement(f,{setEditing:r,playerToEdit:i,editPlayer:function(e,t){y(t,e).then((function(t){v(j.map((function(n){return n.id===e?t:n}))),r(!1)}))}}):l.a.createElement(m,{addPlayer:function(e){h(e).then((function(e){v(j.concat(e))}))}}),l.a.createElement(E,{players:j,deletePlayer:function(e){s(e).then((function(t){v(j.filter((function(t){return t.id!==e})))}))},whichPlayer:function(e){r(!0),d(e)},toggle:function(e,t){g(t,e).then((function(t){v(j.map((function(n){return n.id===e?t:n})))}))}}))};n(38);c.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4a6b538b.chunk.js.map