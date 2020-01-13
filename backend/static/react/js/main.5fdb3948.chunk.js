(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),i=(a(81),a(30)),s=a(29);a(82);var u=function(){return l.a.createElement("main",null,"I'm a dashboard")},m=a(23),o=a.n(m),d=a(21),g=a(49),E=a.n(g),p="http://127.0.0.1:5000/";function f(e,t){return E.a.get(p+"api/students/create/"+e+"/"+t)}function h(e){return E.a.get(p+"api/students/get/"+e)}var v=a(143),b=a(144),y=a(145),k=a(146),x=a(147),w=a(148),O=a(149),j=a(4);var C=function(e){var t=e.students,a=Object(j.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(v.a),n=Object(j.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(b.a);return l.a.createElement(y.a,{component:k.a},l.a.createElement(x.a,{"aria-label":"student-list"},l.a.createElement(w.a,null,l.a.createElement(b.a,null,l.a.createElement(a,null,"Id"),l.a.createElement(a,null,"First Name"),l.a.createElement(a,null,"Last Name"),l.a.createElement(a,null,"Created (UTC)"),l.a.createElement(a,null,"Last Updated (UTC)"),l.a.createElement(a,{align:"right"},"Actions"))),l.a.createElement(O.a,null,t.map((function(e){return l.a.createElement(n,{key:e.id},l.a.createElement(a,{component:"th",scope:"row"},e.id),l.a.createElement(a,null,e.firstname),l.a.createElement(a,null,e.lastname),l.a.createElement(a,null,e.created),l.a.createElement(a,null,e.lastupdated),l.a.createElement(a,{align:"right"},l.a.createElement(i.b,{to:"/view-student/"+e.id,className:"view-student-link"},"View Details")))})))))};var N=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){!function(){var e;o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.awrap(E.a.get(p+"api/students/get"));case 3:e=t.sent,r(e.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.toString());case 10:case"end":return t.stop()}}),null,null,[[0,7]])}()}),[]),l.a.createElement("main",null,0===a.length&&l.a.createElement(l.a.Fragment,null,"Loading..."),a.length>0&&l.a.createElement(C,{students:a}))};var S=function(e){var t=Object(s.f)().id,a=Object(n.useState)(null),r=Object(d.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){!function(){var e;o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o.a.awrap(h(t));case 3:e=a.sent,i(e.data),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0.toString());case 10:case"end":return a.stop()}}),null,null,[[0,7]])}()}),[]),l.a.createElement("main",null,!c&&l.a.createElement(l.a.Fragment,null,"Loading..."),c&&l.a.createElement("div",null,l.a.createElement("p",null,"ID: ",c.id),l.a.createElement("p",null,"First Name: ",c.firstname),l.a.createElement("p",null,"Last Name: ",c.lastname),l.a.createElement("p",null,"Existing Magic Skillz:"),l.a.createElement("p",null,"Desired Magic Skillz:"),l.a.createElement("p",null,"Interested in Courses:"),l.a.createElement("p",null,"Created On: ",c.created),l.a.createElement("p",null,"Updated On: ",c.lastupdated)))},I=a(15),L=a(150),M=a(165),D=a(156),W=a(159),A=a(157),F=a(161),T=a(162),H=a(153),P=a(158),U=a(108),V=a(163);var z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,{item:!0,xs:4},l.a.createElement(W.a,{id:"magic-skill-label"},"Magic skill"),l.a.createElement(A.a,{labelId:"magic-skill-label",onChange:function(e){return console.log(e.target.value)}},["Alchemy","Animation","Conjuror","Disintegration","Elemental","Healing","Illusion","Immortality","Invisibility","Invulnerability","Necromancer","Omnipresent","Omniscient","Poison","Possession","Self-detonation","Summoning","Water breathing"].map((function(e){return l.a.createElement(F.a,{key:e,value:e},e)})))),l.a.createElement(L.a,{item:!0,xs:4},l.a.createElement(T.a,{"aria-label":"skill-type",name:"skill-type",onChange:function(e){return console.log(e.target.value)},row:!0},l.a.createElement(H.a,{value:"existing",control:l.a.createElement(P.a,null),label:"Existing"}),l.a.createElement(H.a,{value:"desired",control:l.a.createElement(P.a,null),label:"Desired"}))),l.a.createElement(L.a,{item:!0,xs:4},l.a.createElement(U.a,{id:"magic-skill-level-label",gutterBottom:!0},"Skill Level"),l.a.createElement(V.a,{onChange:function(e,t){return console.log(t)},valueLabelDisplay:"auto","aria-labelledby":"magic-skill-level-label",min:1,max:5,step:1,defaultValue:1,marks:!0})))},B=a(155),R=a(151),J=a(164),$=a(154),_=a(26),q=Object($.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,maxWidth:600},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),G={PaperProps:{style:{maxHeight:224,width:250}}},K=["Alchemy basics","Alchemy advanced","Magic for day-to-day life","Magic for medical professionals","Dating with magic"];function Q(e,t,a){return{fontWeight:-1===t.indexOf(e)?a.typography.fontWeightRegular:a.typography.fontWeightMedium}}var X=function(e){var t=q(),a=Object(_.a)(),n=e.courses,r=e.onChangeHandler;return l.a.createElement(B.a,{className:t.formControl},l.a.createElement(W.a,{id:"courses-label"},"Courses"),l.a.createElement(A.a,{labelId:"courses-label",multiple:!0,input:l.a.createElement(R.a,{id:"select-multiple-chip"}),value:n,onChange:r,renderValue:function(e){return l.a.createElement("div",{className:t.chips},e.map((function(e){return l.a.createElement(J.a,{key:e,label:e,className:t.chip})})))},MenuProps:G},K.map((function(e){return l.a.createElement(F.a,{key:e,value:e,style:Q(e,n,a)},e)}))))};var Y=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(d.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)([]),g=Object(d.a)(m,2),E=g[0],p=g[1],h=Object(n.useState)([]),v=Object(d.a)(h,2),b=v[0],y=v[1],k=Object(n.useState)({status:null,message:null}),x=Object(d.a)(k,2),w=x[0],O=x[1];return Object(n.useEffect)((function(){console.log(b)})),l.a.createElement("main",null,l.a.createElement("form",null,l.a.createElement(L.a,{container:!0,spacing:3},l.a.createElement(L.a,{item:!0,xs:6},l.a.createElement(M.a,{id:"firstname",label:"First Name",onChange:function(e){return r(e.target.value)}})),l.a.createElement(L.a,{item:!0,xs:6},l.a.createElement(M.a,{id:"lastname",label:"Last Name",onChange:function(e){return u(e.target.value)}})),l.a.createElement(L.a,{item:!0,xs:12},"Magic Skills:"),E.map((function(e,t){return l.a.createElement(z,{key:t})})),l.a.createElement(L.a,{item:!0,xs:12},l.a.createElement(D.a,{variant:"contained",onClick:function(){return p([].concat(Object(I.a)(E),[{"magic skill":null}]))}},"Add Magic Skill")),l.a.createElement(L.a,{item:!0,xs:12},"Interested in Courses:"),l.a.createElement(L.a,{item:!0,xs:12},l.a.createElement(X,{courses:b,onChangeHandler:function(e){return y(e.target.value)}})),l.a.createElement(L.a,{item:!0,xs:12},l.a.createElement(D.a,{variant:"contained",onClick:function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,o.a.awrap(f(a,s));case 4:O({status:"success",message:"Student has been successfully added to the database."}),setTimeout((function(){O({status:null,message:null})}),5e3),r(""),u(""),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),O({status:"error",message:"There has been an error, please try again later (please see console for additional information)."}),setTimeout((function(){O({status:null,message:null})}),5e3),console.log(t.t0.toString());case 13:case"end":return t.stop()}}),null,null,[[1,9]])},type:"submit"},"Create")),l.a.createElement(L.a,{item:!0,xs:12},w.status&&l.a.createElement("div",{className:w.status},w.message)))))};var Z=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"/static/img/logo_white.png",alt:"Hogwarts CRM Logo"}),l.a.createElement("span",null))};var ee=function(e){var t=e.name,a=e.imgName,n=e.path;return l.a.createElement(i.b,{exact:!0,to:n,className:"nav-element"},l.a.createElement("img",{className:"nav-icon",src:"/static/img/icons/"+a,alt:"dashboard icon"}),t)},te=[{name:"Dashboard",imgName:"dashboard.png",path:"/"},{name:"Students",imgName:"student-list.png",path:"/students"},{name:"View Student",imgName:"view-student.png",path:"/view-student"},{name:"Add Student",imgName:"add-student.png",path:"/add-student"}];var ae=function(){return l.a.createElement("nav",null,te.map((function(e){return l.a.createElement(ee,{name:e.name,imgName:e.imgName,path:e.path,key:e.imgName})})))};var ne=function(){return l.a.createElement("main",null,"Sorry, this page does not exist... you shouldn't mess with the URLs! :)")};var le=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(Z,null),l.a.createElement("section",{id:"content"},l.a.createElement(ae,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(u,null)),l.a.createElement(s.a,{path:"/students"},l.a.createElement(N,null)),l.a.createElement(s.a,{path:"/view-student/:id"},l.a.createElement(S,null)),l.a.createElement(s.a,{path:"/add-student"},l.a.createElement(Y,null)),l.a.createElement(s.a,{path:"/*"},l.a.createElement(ne,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){e.exports=a(107)},81:function(e,t,a){},82:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.5fdb3948.chunk.js.map